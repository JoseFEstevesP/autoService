import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

export const App = () => {
	return (
		<>
			<Routes>
				<Route element={<Home />} path='/' />
			</Routes>
		</>
	);
};
