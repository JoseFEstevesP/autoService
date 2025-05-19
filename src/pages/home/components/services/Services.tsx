import CardServices from '../../../../components/cardServices/CardServices';
import Section from '../../../../components/section/Section';
const services = [
	{
		title: 'Mantenimiento Preventivo',
		description:
			'Servicio de mantenimiento regular para prolongar la vida útil de tu vehículo.',
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		to: `/services?uid=${crypto.randomUUID()}`,
	},
	{
		title: 'Reparación de Motor',
		description: 'Diagnóstico y reparación de problemas mecánicos en el motor.',
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		to: `/services?uid=${crypto.randomUUID()}`,
	},
	{
		title: 'Cambio de Aceite',
		description:
			'Reemplazo de aceite y filtro para un rendimiento óptimo del motor.',
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		to: `/services?uid=${crypto.randomUUID()}`,
	},
	{
		title: 'Alineación y Balanceo',
		description:
			'Alineación de ruedas y balanceo para un manejo suave y seguro.',
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		to: `/services?uid=${crypto.randomUUID()}`,
	},
	{
		title: 'Frenos y Discos',
		description:
			'Revisión y reparación del sistema de frenos para máxima seguridad.',
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		to: `/services?uid=${crypto.randomUUID()}`,
	},
	{
		title: 'Diagnóstico Electrónico',
		description:
			'Uso de herramientas avanzadas para detectar fallas en sistemas electrónicos.',
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		to: `/services?uid=${crypto.randomUUID()}`,
	},
	{
		title: 'Suspensión',
		description:
			'Reparación y reemplazo de componentes de la suspensión para mayor comodidad.',
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		to: `/services?uid=${crypto.randomUUID()}`,
	},
	{
		title: 'Aire Acondicionado',
		description: 'Mantenimiento y recarga del sistema de aire acondicionado.',
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		to: `/services?uid=${crypto.randomUUID()}`,
	},
	{
		title: 'Lavado y Detallado',
		description:
			'Lavado profesional y detallado para mantener tu auto como nuevo.',
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		to: `/services?uid=${crypto.randomUUID()}`,
	},
	{
		title: 'Cambio de Batería',
		description:
			'Instalación de baterías nuevas con garantía y pruebas de carga.',
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		to: `/services?uid=${crypto.randomUUID()}`,
	},
];
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
			{services.map((service, index) => (
				<CardServices
					key={index}
					image={service.image}
					to={service.to}
					title={service.title}
					description={service.description}
				/>
			))}
		</Section>
	);
};
export default Services;
