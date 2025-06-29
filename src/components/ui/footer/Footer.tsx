import { Icons } from '../icon/Icons';
import LinkPer from '../link/LinkPer';
import styles from './styles.module.scss';
import type { FooterProps } from './types';

const Footer = ({ ...props }: FooterProps) => {
	return (
		<footer {...props} className={`${styles.footer} ${props.className}`}>
			<div className={styles.footer__container}>
				<div className={styles.footer__section}>
					<LinkPer
						to='/'
						className={styles.footer__logo}
						icon={{
							iconName: 'logo',
							className: styles.footer__logoIcon,
						}}
					/>
					<p className={styles.footer__description}>
						We offer high-quality automotive services and products to keep your
						vehicle in optimal condition.
					</p>
					<div className={styles.footer__socialIcons}>
						<LinkPer
							target='_blank'
							to='https://instagram.com'
							icon={{ iconName: 'instagram', className: styles.footer__link }}
						/>
						<LinkPer
							target='_blank'
							to='https://facebook.com'
							icon={{ iconName: 'facebook', className: styles.footer__link }}
						/>
						<LinkPer
							target='_blank'
							to='https://twitter.com'
							icon={{ iconName: 'x', className: styles.footer__link }}
						/>
					</div>
				</div>

				<div className={styles.footer__section}>
					<h2 className={styles.footer__sectionTitle}>Quick Links</h2>
					<ul className={styles.footer__linkList}>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/' className={styles.footer__link}>
								Home
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/about' className={styles.footer__link}>
								About Us
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/services' className={styles.footer__link}>
								Service Catalog
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/appointment' className={styles.footer__link}>
								Book Appointment
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/profile' className={styles.footer__link}>
								My Profile
							</LinkPer>
						</li>
					</ul>
				</div>

				<div className={styles.footer__section}>
					<h2 className={styles.footer__sectionTitle}>Our Services</h2>
					<ul className={styles.footer__linkList}>
						<li className={styles.footer__linkListItem}>
							<LinkPer
								to='/services/maintenance'
								className={styles.footer__link}
							>
								Preventive Maintenance
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer
								to='/services/oil-change'
								className={styles.footer__link}
							>
								Oil Change
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/services/brakes' className={styles.footer__link}>
								Brake Inspection
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer
								to='/services/diagnostic'
								className={styles.footer__link}
							>
								Complete Diagnostic
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/services/engine' className={styles.footer__link}>
								Engine Repair
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/services/alignment' className={styles.footer__link}>
								Wheel Alignment & Balancing
							</LinkPer>
						</li>
					</ul>
				</div>

				<div className={styles.footer__section}>
					<h2 className={styles.footer__sectionTitle}>Contact Us</h2>
					<ul className={styles.footer__linkList}>
						<li
							className={`${styles.footer__linkListItem} ${styles['footer__linkListItem--contact']}`}
						>
							<Icons
								iconName='location'
								className={styles.footer__contactIcon}
							/>
							123 Fake Street, Santiago, Chile
						</li>
						<li
							className={`${styles.footer__linkListItem} ${styles['footer__linkListItem--contact']}`}
						>
							<Icons iconName='phone' className={styles.footer__contactIcon} />
							+56 2 222 222 222
						</li>
						<li
							className={`${styles.footer__linkListItem} ${styles['footer__linkListItem--contact']}`}
						>
							<Icons iconName='email' className={styles.footer__contactIcon} />
							auto@service.com
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.footer__copyright}>
				<span>© 2025 AutoService. All rights reserved.</span>
			</div>
		</footer>
	);
};

export default Footer;
