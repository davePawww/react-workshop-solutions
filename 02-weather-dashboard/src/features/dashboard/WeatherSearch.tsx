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

export function WeatherSearch() {
  const [searchString, setSearchString] = useState('');
  const cityName = searchString.trim();
  const debouncedValue = useDebounce(cityName, 500);

  const { isFetching, error, data } = useQuery({
    queryKey: ['cities', debouncedValue],
    queryFn: () => getCities(debouncedValue),
    enabled: debouncedValue.length > 0,
  });

  // data.latitude, data.longitude
  // to be passed in
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Asia%2FSingapore&temperature_unit=fahrenheit

  // Things we need passed
  // latitude, longitude, timezone, temparature unit

  return (
    <Command className="max-w-sm rounded-lg border" shouldFilter={false}>
      <CommandInput
        value={searchString}
        onValueChange={setSearchString}
        placeholder="Type a name of a city to search..."
      />
      <CommandList className="mt-1">
        {!!cityName && !isFetching && data?.results?.length === 0 && (
          <CommandEmpty>No results found.</CommandEmpty>
        )}
        {isFetching && (
          <CommandItem>
            <Spinner />
          </CommandItem>
        )}
        {error && !isFetching && <CommandItem>There was a problem loading the data..</CommandItem>}

        {data &&
          !isFetching &&
          data.results?.map((c) => (
            <CommandItem key={c.id} className="mb-1">
              {c.name} - {c.country} - {c.admin1} - {c.admin2}
              {c.admin3 ? ` - ${c.admin3}` : ''}
            </CommandItem>
          ))}
      </CommandList>
    </Command>
  );
}
