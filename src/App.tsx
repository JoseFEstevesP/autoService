import { Route, Routes } from 'react-router-dom';
import Msg from './components/msg/Msg';
import LayoutD from './layout/layoutD/LayoutD';
import LayoutOfMenu from './layout/layoutOfMenu/LayoutOfMenu';
import About from './pages/about/About';
import Catalog from './pages/catalog/Catalog';
import Products from './pages/catalog/components/servicesAndProducts/products/Products';
import Services from './pages/catalog/components/servicesAndProducts/services/Services';
import HomeServices from './pages/home/components/services/HomeServices';
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
							<HomeServices />
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
				<Route
					path='/catalog'
					element={
						<LayoutD title='Catálogo'>
							<Catalog />
						</LayoutD>
					}
				>
					<Route path='services' element={<Services />} />
					<Route path='products' element={<Products />} />
				</Route>
			</Routes>
			<Msg />
		</>
	);
};
