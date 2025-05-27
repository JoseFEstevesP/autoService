import { Route, Routes } from 'react-router-dom';
import LayoutD from '../../layout/layoutD/LayoutD';
import LayoutOfMenu from '../../layout/layoutOfMenu/LayoutOfMenu';
import About from '../../pages/about/About';
import Services from '../../pages/home/components/services/Services';
import ServiceDetail from '../../pages/services/ServiceDetail';

export const RoutesD = () => {
	return (
		<Routes>
			<Route path='/services'>
				<Route
					index
					element={
						<LayoutD title='Servicios'>
							<Services />
						</LayoutD>
					}
				/>
				<Route
					path='detail/:data'
					element={
						<LayoutD title='Detalle del servicio'>
							<ServiceDetail />
						</LayoutD>
					}
				/>
			</Route>
			<Route
				path='/about'
				element={
					<LayoutOfMenu title='Acerca de'>
						<About />
					</LayoutOfMenu>
				}
			/>
		</Routes>
	);
};
