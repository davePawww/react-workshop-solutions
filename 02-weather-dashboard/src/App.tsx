import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/layout/Layout';
import { Dashboard } from '@/features/dashboard';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header />
        <Dashboard />
        <Footer />
      </Layout>
    </QueryClientProvider>
  );
}
