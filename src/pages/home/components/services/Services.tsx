import CardServices from '../../../../components/cardServices/CardServices';
import Section from '../../../../components/section/Section';
import { servicesData } from '../../../services/servicesData';

const Services = ({ className }: { className?: string }) => {
	return (
		<Section
			className={`${className}`}
			title='Nuestros Servicios'
			description='Ofrecemos una amplia gama de servicios para mantener tu vehículo en óptimas condiciones.'
			link={{
				to: '/services',
				textLink: 'Ver más servicios',
			}}
		>
			{servicesData.map((service, index) => (
				<CardServices
					key={index}
					image={service.image}
					to={'default/services/detail/' + service.uid}
					title={service.title}
					description={service.description}
				/>
			))}
		</Section>
	);
};
export default Services;
