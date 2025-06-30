import { Route, Routes } from 'react-router-dom';
import LayoutD from './components/common/Layout/layoutD/LayoutD';
import LayoutOfMenu from './components/common/Layout/layoutOfMenu/LayoutOfMenu';
import Msg from './components/ui/msg/Msg';
import About from './pages/about/About';
import Catalog from './pages/catalog/Catalog';
import Products from './pages/catalog/components/products/Products';
import Services from './pages/catalog/components/services/Services';
import Home from './pages/home/Home';
import HomeServices from './pages/home/components/services/HomeServices';
import Quotes from './pages/quotes/Quotes';
import ContentLogin from './pages/user/components/contentLogin/ContentLogin';
import ContentRecovery from './pages/user/components/contentRecovery/ContentRecovery';
import ContentRegister from './pages/user/components/contentRegister/ContentRegister';

export const App = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<LayoutOfMenu title='Home'>
							<Home />
						</LayoutOfMenu>
					}
				/>
				<Route
					path='/about'
					element={
						<LayoutOfMenu title='About'>
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
					<Route path='products' element={<Products />} />
					<Route path='services' element={<Services />} />
				</Route>
				<Route
					path='/login'
					element={
						<LayoutD title='Login'>
							<ContentLogin />
						</LayoutD>
					}
				/>
				<Route
					path='/quotes/:serviceId'
					element={
						<LayoutD title='Appointments'>
							<Quotes />
						</LayoutD>
					}
				/>
				<Route
					path='/recovery'
					element={
						<LayoutD title='Recovery'>
							<ContentRecovery />
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
			</Routes>
			<Msg />
		</>
	);
};
