import { useParams } from 'react-router-dom';
import LinkPer from '../../components/link/LinkPer';
import { servicesData } from './servicesData';
import styles from './styles.module.scss';

const data = (id?: string) => {
	if (!id) return;
	return servicesData.find(service => service.uid === id);
};

const ServiceDetail = () => {
	const { id } = useParams();
	const service = data(id);
	return (
		<section className={styles.serviceDetail}>
			<div className={styles.serviceDetail__contentImage}>
				<img
					src={service?.image}
					alt={service?.title}
					className={styles.serviceDetail__image}
				/>
			</div>
			<div className={styles.serviceDetail__contentData}>
				<h2 className={styles.serviceDetail__title}>{service?.title}</h2>
				<p className={styles.serviceDetail__description}>
					{service?.description}
				</p>
				<LinkPer
					to={`/default/cite/${id}`}
					text='Citar Servicio'
					className={styles.serviceDetail__link}
					icon={{
						iconName: 'calendar',
					}}
				/>
			</div>
		</section>
	);
};
export default ServiceDetail;
