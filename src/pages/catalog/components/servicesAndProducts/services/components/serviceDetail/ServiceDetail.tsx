import LinkPer from '../../../../../../../components/link/LinkPer';
import Stars from '../../../../../../../components/stars/Stars';
import type { ServiceType } from '../../../types';
import styles from './styles.module.scss';

const ServiceDetail = ({ data }: { data?: ServiceType }) => {
	if (!data) {
		return <div className={styles.serviceDetail}>Servicio no encontrado</div>;
	}

	return (
		<section className={styles.serviceDetail}>
			<div className={styles.serviceDetail__contentImage}>
				<img
					src={data.image.url}
					alt={data.name}
					className={styles.serviceDetail__image}
				/>
			</div>

			<div className={styles.serviceDetail__contentData}>
				<div className={styles.serviceDetail__header}>
					<h2 className={styles.serviceDetail__title}>{data.name}</h2>
					<span className={styles.serviceDetail__brand}>{data.brand}</span>
				</div>

				<div className={styles.serviceDetail__meta}>
					<div className={styles.serviceDetail__pricing}>
						<span className={styles.serviceDetail__price}>
							${data.price.toFixed(2)}
						</span>
						{data.taxable && (
							<span className={styles.serviceDetail__oldPrice}>
								${data.taxable.toFixed(2)}
							</span>
						)}
					</div>

					<Stars
						rating={data.rating}
						className={styles.serviceDetail__rating}
					/>

					<div className={styles.serviceDetail__tags}>
						{data.tags?.map(tag => (
							<span key={tag.id} className={styles.serviceDetail__tag}>
								{tag.name}
							</span>
						))}
					</div>

					<span className={styles.serviceDetail__category}>
						{data.category.name}
					</span>
				</div>

				<div className={styles.serviceDetail__description}>
					{data.description.split('\n').map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
				</div>

				<div className={styles.serviceDetail__actions}>
					<LinkPer
						to={`/cite/${data.documentId}`}
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
