import { useParams } from 'react-router-dom';
import LinkPer from '../../components/link/LinkPer';
import styles from './styles.module.scss';
import type { ServiceType } from './types';
import { Icons } from '../../components/icon/Icons';

const ServiceDetail = () => {
	const { data } = useParams<{ data?: string }>();

	const service: ServiceType | null = data ? JSON.parse(data) : null;

	if (!service) {
		return <div className={styles.serviceDetail}>Servicio no encontrado</div>;
	}

	return (
		<section className={styles.serviceDetail}>
			<div className={styles.serviceDetail__contentImage}>
				<img
					src={service.image}
					alt={service.name}
					className={styles.serviceDetail__image}
				/>
			</div>
			<div className={styles.serviceDetail__contentData}>
				<h2 className={styles.serviceDetail__title}>{service.name}</h2>
				<div className={styles.serviceDetail__meta}>
					<span className={styles.serviceDetail__price}>
						${service.price.toFixed(2)}
					</span>
					<span className={styles.serviceDetail__rating}>
						<Icons iconName='star' className={styles.serviceDetail__iconStar} />
						{service.rating}/5
					</span>
					<span className={styles.serviceDetail__category}>
						{service.category}
					</span>
				</div>
				<p className={styles.serviceDetail__description}>
					{service.description}
				</p>
				<LinkPer
					to={`/default/cite/${service.documentId}`}
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
