import LinkPer from '../link/LinkPer';
import type { SectionProps } from './interface';
import styles from './styles.module.scss';

const Section = ({ children, description, link, ...props }: SectionProps) => {
	return (
		<section {...props} className={`${styles.section} ${props.className}`}>
			<h2 className={styles.section__title}>{props.title}</h2>
			<p className={styles.section__description}>{description}</p>
			<LinkPer
				className={styles.section__link}
				to={link?.to ?? '/'}
				text={link?.textLink}
				icon={{
					iconName: 'arrow',
				}}
			/>
			<div className={styles.section__children}>{children}</div>
		</section>
	);
};
export default Section;
