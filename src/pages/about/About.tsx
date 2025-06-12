import CardDecorative from '@/components/common/Cards/cardDecorative/CardDecorative';
import { menuData } from '@/components/common/Navigation/menuData';
import InitBar from '@/components/ui/initBar/InitBar';
import LinkPer from '@/components/ui/link/LinkPer';
import styles from './styles.module.scss';

const About = () => {
	return (
		<>
			<header className={styles.aboutHeader}>
				<InitBar className={styles.aboutHeader__initBar} items={menuData} />
				<section className={styles.aboutHeader__contentText}>
					<h1 className={styles.aboutHeader__title}>Acerca de nosotros</h1>
					<p className={styles.aboutHeader__description}>
						Conocenos mejor y conocenos más
					</p>
				</section>
			</header>
			<main className={styles.about}>
				<section className={styles.about__us}>
					<h2 className={styles.about__usTitle}>¿Quién somos?</h2>
					<p className={styles.about__usText}>
						Somos una compañía especializada en servicios vehiculares con más de
						15 años de experiencia en el mercado. Ofrecemos los mejores
						repuestos y soluciones integrales para todo tipo de vehículos, desde
						automóviles particulares hasta flotas comerciales.
						<br />
						Nuestro equipo de técnicos certificados trabaja con la más alta
						tecnología y herramientas de diagnóstico avanzadas para garantizar
						un servicio de calidad superior. Nos distinguimos por nuestra
						atención personalizada y compromiso con la satisfacción total de
						nuestros clientes.
					</p>
					<div className={styles.about__usCards}>
						<CardDecorative
							title='Diagnóstico Avanzado'
							description='Tecnología de precisión para detectar fallas al instante.'
							iconName='car'
							className={styles.about__usCardsItem}
						/>
						<CardDecorative
							title='Repuestos Originales'
							description='Solo usamos piezas de calidad garantizada.'
							iconName='tool'
							className={styles.about__usCardsItem}
						/>
						<CardDecorative
							title='Técnicos Certificados'
							description='Expertos capacitados para un servicio confiable.'
							iconName='users'
							className={styles.about__usCardsItem}
						/>
						<CardDecorative
							title='Servicio Rápido'
							description='Soluciones eficientes sin perder calidad.'
							iconName='clock'
							className={styles.about__usCardsItem}
						/>
					</div>
				</section>
				<div className={styles.about__missionAndVision}>
					<section className={styles.about__mission}>
						<h2 className={styles.about__missionTitle}>Nuestra Misión</h2>
						<p className={styles.about__missionText}>
							Proporcionar soluciones vehiculares integrales de la más alta
							calidad, garantizando la seguridad y satisfacción de nuestros
							clientes mediante un servicio personalizado, repuestos de primera
							calidad y tecnología de vanguardia.
							<br />
							Nos comprometemos a mantener los más altos estándares de calidad
							en cada servicio que ofrecemos, asegurando que cada vehículo que
							pasa por nuestras instalaciones reciba la atención que merece.
						</p>
					</section>
					<section className={styles.about__vision}>
						<h2 className={styles.about__visionTitle}>Nuestra Visión</h2>
						<p className={styles.about__visionText}>
							Ser reconocidos como la empresa líder en servicios vehiculares a
							nivel nacional, destacándonos por nuestra innovación constante,
							excelencia técnica y compromiso con la satisfacción del cliente.
							Aspiramos a expandir nuestra presencia y convertir nuestra marca
							en sinónimo de confianza y calidad en el sector automotriz.
						</p>
					</section>
				</div>
				<section className={styles.about__values}>
					<h2 className={styles.about__valuesTitle}>Nuestros Valores</h2>
					<div className={styles.about__valuesCards}>
						<CardDecorative
							title='Excelencia'
							description='Buscamos la perfección en cada servicio que ofrecemos, superando las expectativas de nuestros clientes.'
							iconName='award'
							className={styles.about__valuesCardsItem}
						/>
						<CardDecorative
							title='Integridad'
							description='Actuamos con honestidad y transparencia en todas nuestras operaciones y relaciones comerciales.'
							iconName='shield'
							className={styles.about__valuesCardsItem}
						/>
						<CardDecorative
							title='Compromiso'
							description='Nos dedicamos completamente a satisfacer las necesidades de nuestros clientes y colaboradores.'
							iconName='users'
							className={styles.about__valuesCardsItem}
						/>
						<CardDecorative
							title='Innovación'
							description='Incorporamos constantemente nuevas tecnologías y métodos para mejorar nuestros servicios.'
							iconName='tool'
							className={styles.about__valuesCardsItem}
						/>
					</div>
				</section>
				<section className={styles.about__contact}>
					<h2 className={styles.about__contactTitle}>Contacto</h2>
					<p className={styles.about__contactText}>
						Contáctanos hoy mismo y descubre cómo podemos ayudarte con todas tus
						necesidades vehiculares.
					</p>
					<ul className={styles.about__contactList}>
						<li className={styles.about__contactListItem}>
							<LinkPer
								to='mailto:info@autoservicio.com'
								text='info@autoservicio.com'
								icon={{
									iconName: 'email',
								}}
								className={styles.about__contactListItemLink}
							/>
						</li>
						<li className={styles.about__contactListItem}>
							<LinkPer
								to='tel:+5622222222'
								text='+56 2 222 222 222'
								icon={{
									iconName: 'phone',
								}}
								className={styles.about__contactListItemLink}
							/>
						</li>
						<li className={styles.about__contactListItem}>
							<LinkPer
								to='tel:+5633333333'
								text='+56 3 333 333 333'
								icon={{
									iconName: 'phone',
								}}
								className={styles.about__contactListItemLink}
							/>
						</li>
					</ul>
				</section>
			</main>
		</>
	);
};
export default About;
