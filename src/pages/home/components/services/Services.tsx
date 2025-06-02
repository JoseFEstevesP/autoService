import CardServices from '../../../../components/cardServices/CardServices';
import Loader from '../../../../components/loader/Loader';
import Section from '../../../../components/section/Section';
import useServiceDetailModal from '../../../catalog/components/servicesAndProducts/services/components/serviceDetailModal/hooks/useServiceDetailModal';
import ServiceDetailModal from '../../../catalog/components/servicesAndProducts/services/components/serviceDetailModal/ServiceDetailModal';
import useGetServices from './hooks/useGetServices';
import styles from './styles.module.scss';

const Services = ({ className }: { className?: string }) => {
	const { data, error, isLoading } = useGetServices();
	const { dataDetail, handleData, serviceDetailModal } =
		useServiceDetailModal();

	if (isLoading) return <Loader className={styles.services__loader} />;
	if (error)
		return (
			<Loader
				className={`${styles.services__loader} ${styles['services__loader--error']}`}
				error
			/>
		);
	if (!data?.length)
		return (
			<Loader
				className={`${styles.services__loader} ${styles['services__loader--warning']}`}
				warning
			/>
		);

	return (
		<>
			<ServiceDetailModal
				serviceDetailModal={serviceDetailModal}
				dataDetail={dataDetail}
			/>
			<Section
				className={`${className}`}
				title='Nuestros Servicios'
				description='Ofrecemos una amplia gama de servicios para mantener tu vehículo en óptimas condiciones.'
				link={{
					to: '/services',
					textLink: 'Ver más servicios',
				}}
			>
				{data.map(service => (
					<CardServices
						key={service.id}
						image={service.image.url}
						handleData={() => handleData(service)}
						title={service.name}
						price={service.price}
						oldPrice={service.taxable}
						rating={service.rating}
						tags={service.tags}
					/>
				))}
			</Section>
		</>
	);
};

export default Services;
