import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { MsgProvider } from './context/msg/MsgProvider.tsx';
import './styles/styles.scss';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<MsgProvider>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</MsgProvider>
		</BrowserRouter>
	</StrictMode>,
);
