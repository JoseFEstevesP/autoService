import { useParams } from 'react-router-dom';
import LinkPer from '../../components/link/LinkPer';
import Stars from '../../components/stars/Stars';
import styles from './styles.module.scss';
import type { ServiceType } from './types';

const ServiceDetail = () => {
	const { data } = useParams<{ data?: string }>();
	const service: ServiceType | null = data
		? JSON.parse(decodeURIComponent(data))
		: null;

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
				<div className={styles.serviceDetail__header}>
					<h2 className={styles.serviceDetail__title}>{service.name}</h2>
					<span className={styles.serviceDetail__brand}>{service.brand}</span>
				</div>

				<div className={styles.serviceDetail__meta}>
					<div className={styles.serviceDetail__pricing}>
						<span className={styles.serviceDetail__price}>
							${service.price.toFixed(2)}
						</span>
						{service.taxable && (
							<span className={styles.serviceDetail__oldPrice}>
								${service.taxable.toFixed(2)}
							</span>
						)}
					</div>

					<Stars
						rating={service.rating}
						className={styles.serviceDetail__rating}
					/>

					<div className={styles.serviceDetail__tags}>
						{service.tags?.map(tag => (
							<span key={tag.id} className={styles.serviceDetail__tag}>
								{tag.name}
							</span>
						))}
					</div>

					<span className={styles.serviceDetail__category}>
						{service.category}
					</span>
				</div>

				<div className={styles.serviceDetail__description}>
					{service.description.split('\n').map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
				</div>

				<div className={styles.serviceDetail__actions}>
					<LinkPer
						to={`/cite/${service.documentId}`}
						text='Citar Servicio'
						className={styles.serviceDetail__link}
						icon={{
							iconName: 'calendar',
						}}
					/>
					<LinkPer
						to='/services'
						text='Ver más servicios'
						className={styles.serviceDetail__linkSecondary}
						icon={{
							iconName: 'arrow',
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default ServiceDetail;
