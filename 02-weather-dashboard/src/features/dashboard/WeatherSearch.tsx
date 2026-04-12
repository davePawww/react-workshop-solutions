import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
} from '@/components/ui/command';
import { Spinner } from '@/components/ui/spinner';
import { getCities } from '@/features/dashboard/dashboard.api';
import { useDebounce } from '@/hooks';

import type { Coordinates, WeatherSearchProps } from '@/features/dashboard/dashboard.types';

export default function WeatherSearch({ onSelectCoordinates, onSelectCity }: WeatherSearchProps) {
  const [searchString, setSearchString] = useState('');
  const cityName = searchString.trim();
  const debouncedValue = useDebounce(cityName, 500);

  const { isFetching, error, data } = useQuery({
    queryKey: ['cities', debouncedValue],
    queryFn: () => getCities(debouncedValue),
    enabled: debouncedValue.length > 0,
  });

  const showResults = !!cityName && (isFetching || !!error || (data?.results?.length ?? 0) >= 0);

  const handleSelect = (coordinates: Coordinates, selectedCityName: string) => {
    if (!isFetching) {
      onSelectCoordinates(coordinates);
      onSelectCity(selectedCityName);
      setSearchString('');
    }
  };

  return (
    <div className="relative z-50">
      {showResults && <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />}
      <Command
        className="relative z-50 mx-auto h-auto w-3/4 overflow-visible rounded-lg border pb-2 shadow-[0_0_10px_rgba(59,130,246,0.35)] ring-1 ring-blue-300/30"
        shouldFilter={false}
      >
        <CommandInput
          value={searchString}
          onValueChange={setSearchString}
          placeholder="Type a name of a city to search..."
        />
        <CommandList className="bg-popover absolute top-full right-0 left-0 z-50 rounded-lg shadow-lg">
          {!!cityName && !isFetching && data?.results?.length === 0 && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
          {isFetching && (
            <CommandItem className="flex items-center justify-center gap-2">
              <Spinner />
              <p>Finding Cities..</p>
            </CommandItem>
          )}
          {error && !isFetching && (
            <CommandItem>There was a problem loading the data..</CommandItem>
          )}

          {data &&
            !isFetching &&
            data.results?.map((c) => (
              <CommandItem
                key={c.id}
                className="mb-1 rounded-none border-b border-b-slate-700/15"
                onSelect={() =>
                  handleSelect(
                    { latitude: c.latitude, longitude: c.longitude, timezone: c.timezone },
                    c.name + ' - ' + c.country,
                  )
                }
              >
                {c.name} - {c.country} - {c.admin1}
                {c.admin2 ? ` - ${c.admin2}` : ''}
                {c.admin3 ? ` - ${c.admin3}` : ''}
              </CommandItem>
            ))}
        </CommandList>
      </Command>
    </div>
  );
}
