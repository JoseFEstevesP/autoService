import { Route, Routes } from 'react-router-dom';
import LayoutD from '../../layout/LayoutD';
import Services from '../../pages/home/components/services/Services';
import ServiceDetail from '../../pages/services/ServiceDetail';

export const RoutesD = () => {
	return (
		<LayoutD>
			<Routes>
				<Route path='/services'>
					<Route index element={<Services />} />
					<Route path='detail/:id' element={<ServiceDetail />} />
				</Route>
			</Routes>
		</LayoutD>
	);
};
