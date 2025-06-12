import { Route, Routes } from 'react-router-dom';
import LayoutD from './components/common/Layout/layoutD/LayoutD';
import LayoutOfMenu from './components/common/Layout/layoutOfMenu/LayoutOfMenu';
import Msg from './components/ui/msg/Msg';
import About from './pages/about/About';
import Catalog from './pages/catalog/Catalog';
import Products from './pages/catalog/components/servicesAndProducts/products/Products';
import Services from './pages/catalog/components/servicesAndProducts/services/Services';
import HomeServices from './pages/home/components/services/HomeServices';
import Home from './pages/home/Home';
import Quotes from './pages/quotes/Quotes';

export const App = () => {
	return (
		<>
			<Routes>
				<Route
					element={
						<LayoutOfMenu title='Inicio'>
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

				<Route
					path='/quotes/:serviceId'
					element={
						<LayoutD title='Citas'>
							<Quotes />
						</LayoutD>
					}
				/>
			</Routes>
			<Msg />
		</>
	);
};
