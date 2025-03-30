import { useQuery, useQueryClient } from '@tanstack/react-query';
import { render } from '@testing-library/react';

import { Props, QueryProvider } from '@/providers/QueryProvider';

function TestChild() {
  const { data } = useQuery({
    queryKey: ['test'],
    queryFn: () => 'test-data',
  });
  return <div>{data}</div>;
}

const setup = ({ children }: Props) => render(<QueryProvider>{children}</QueryProvider>);

describe('QueryProvider', () => {
  it('renders children and provide query client context', () => {
    const { container } = setup({ children: <TestChild /> });

    expect(container).toBeTruthy();
  });

  it('maintains consistent QueryClient instance between renders', () => {
    let firstQueryClient: any;

    const TestClientCapture = () => {
      const queryClient = useQueryClient();
      firstQueryClient = queryClient;
      return null;
    };

    const { rerender } = setup({ children: <TestClientCapture /> });

    const initialQueryClient = firstQueryClient;

    rerender(
      <QueryProvider>
        <TestClientCapture />
      </QueryProvider>,
    );

    expect(firstQueryClient).toBe(initialQueryClient);
  });
});
