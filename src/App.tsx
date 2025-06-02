import { Route, Routes } from 'react-router-dom';
import Msg from './components/msg/Msg';
import LayoutD from './layout/layoutD/LayoutD';
import LayoutOfMenu from './layout/layoutOfMenu/LayoutOfMenu';
import About from './pages/about/About';
import Catalog from './pages/catalog/Catalog';
import Services from './pages/home/components/services/Services';
import Home from './pages/home/Home';
export const App = () => {
	return (
		<>
			<Routes>
				<Route
					element={
						<LayoutOfMenu>
							<Home />
						</LayoutOfMenu>
					}
					path='/'
				/>
				<Route
					path='/services'
					element={
						<LayoutD title='Servicios'>
							<Services />
						</LayoutD>
					}
				/>
				<Route
					path='/about'
					element={
						<LayoutOfMenu title='Acerca de'>
							<About />
						</LayoutOfMenu>
					}
				/>
				<Route path='/catalog'>
					<Route
						index
						element={
							<LayoutD title='Catálogo de servicios'>
								<Catalog />
							</LayoutD>
						}
					/>
				</Route>
			</Routes>
			<Msg />
		</>
	);
};
