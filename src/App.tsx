import { Route, Routes } from 'react-router-dom';
import LayoutD from './components/common/Layout/layoutD/LayoutD';
import LayoutOfMenu from './components/common/Layout/layoutOfMenu/LayoutOfMenu';
import Msg from './components/ui/msg/Msg';
import About from './pages/about/About';
import Catalog from './pages/catalog/Catalog';
import Products from './pages/catalog/components/products/Products';
import Services from './pages/catalog/components/services/Services';
import HomeServices from './pages/home/components/services/HomeServices';
import Home from './pages/home/Home';
import Quotes from './pages/quotes/Quotes';
import ContentLogin from './pages/user/components/contentLogin/ContentLogin';
import ContentRegister from './pages/user/components/contentRegister/ContentRegister';

export const App = () => {
	return (
		<>
			<Routes>
				<Route
					element={
						<LayoutOfMenu title='Home'>
							<Home />
						</LayoutOfMenu>
					}
					path='/'
				/>
				<Route
					path='/login'
					element={
						<LayoutD title='Login'>
							<ContentLogin />
						</LayoutD>
					}
				/>
				<Route
					path='/register'
					element={
						<LayoutD title='Register'>
							<ContentRegister />
						</LayoutD>
					}
				/>
				<Route
					path='/services'
					element={
						<LayoutD title='Services'>
							<HomeServices />
						</LayoutD>
					}
				/>
				<Route
					path='/about'
					element={
						<LayoutOfMenu title='About de'>
							<About />
						</LayoutOfMenu>
					}
				/>
				<Route
					path='/catalog'
					element={
						<LayoutD title='Catalog'>
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
						<LayoutD title='Appointments'>
							<Quotes />
						</LayoutD>
					}
				/>
			</Routes>
			<Msg />
		</>
	);
};
