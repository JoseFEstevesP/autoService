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
						Ofrecemos servicios automotrices de alta calidad y productos para
						mantener tu vehículo en condiciones óptimas.
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
					<h2 className={styles.footer__sectionTitle}>Enlaces Rápidos</h2>
					<ul className={styles.footer__linkList}>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/' className={styles.footer__link}>
								Inicio
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/about' className={styles.footer__link}>
								Acerca de Nosotros
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/services' className={styles.footer__link}>
								Catálogo de Servicios
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/appointment' className={styles.footer__link}>
								Reservar Cita
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/profile' className={styles.footer__link}>
								Mi Perfil
							</LinkPer>
						</li>
					</ul>
				</div>

				<div className={styles.footer__section}>
					<h2 className={styles.footer__sectionTitle}>Nuestros Servicios</h2>
					<ul className={styles.footer__linkList}>
						<li className={styles.footer__linkListItem}>
							<LinkPer
								to='/services/maintenance'
								className={styles.footer__link}
							>
								Mantenimiento Preventivo
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer
								to='/services/oil-change'
								className={styles.footer__link}
							>
								Cambio de Aceite
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/services/brakes' className={styles.footer__link}>
								Revisión de Frenos
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer
								to='/services/diagnostic'
								className={styles.footer__link}
							>
								Diagnóstico Completo
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/services/engine' className={styles.footer__link}>
								Reparación de Motor
							</LinkPer>
						</li>
						<li className={styles.footer__linkListItem}>
							<LinkPer to='/services/alignment' className={styles.footer__link}>
								Alineación y Balanceo
							</LinkPer>
						</li>
					</ul>
				</div>

				<div className={styles.footer__section}>
					<h2 className={styles.footer__sectionTitle}>Contáctanos</h2>
					<ul className={styles.footer__linkList}>
						<li
							className={`${styles.footer__linkListItem} ${styles['footer__linkListItem--contact']}`}
						>
							<Icons
								iconName='location'
								className={styles.footer__contactIcon}
							/>
							Ubicación
						</li>
						<li
							className={`${styles.footer__linkListItem} ${styles['footer__linkListItem--contact']}`}
						>
							<Icons iconName='phone' className={styles.footer__contactIcon} />
							Teléfono
						</li>
						<li
							className={`${styles.footer__linkListItem} ${styles['footer__linkListItem--contact']}`}
						>
							<Icons iconName='email' className={styles.footer__contactIcon} />
							Correo
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.footer__copyright}>
				<span>© 2025 AutoService. Todos los derechos reservados.</span>
			</div>
		</footer>
	);
};

export default Footer;
