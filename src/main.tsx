import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { CartProvider } from './context/cart/CartProvider.tsx';
import { MsgProvider } from './context/msg/MsgProvider.tsx';
import { TokenProvider } from './context/token/TokenProvider.tsx';
import './styles/styles.scss';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 3,
			retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
		},
	},
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<TokenProvider>
				<MsgProvider>
					<CartProvider>
						<QueryClientProvider client={queryClient}>
							<App />
						</QueryClientProvider>
					</CartProvider>
				</MsgProvider>
			</TokenProvider>
		</BrowserRouter>
	</StrictMode>,
);
