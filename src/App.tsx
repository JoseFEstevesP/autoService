import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { RoutesD } from './routes/default/Routes';
export const App = () => {
	return (
		<>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route path='/default/*' element={<RoutesD />} />
			</Routes>
		</>
	);
};
