import { useState } from 'react';
import { Button } from '../../button/Button';
import { Icons } from '../../icon/Icons';
import LinkPer from '../../link/LinkPer';
import type { MenuItem, VerticalMenuProps } from './interface';

import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export const MenuVertical = ({ items, ...props }: VerticalMenuProps) => {
	const [active, setActive] = useState(false);
	const [showMenu, setShowMenu] = useState(true);

	return (
		<aside
			{...props}
			className={`${styles.menu}  ${showMenu ? styles['menu--show'] : ''} ${
				active ? styles['menu--active'] : ''
			} `}
		>
			<header
				className={`${styles.menu__header} ${
					active ? styles['menu__header--active'] : ''
				}`}
			>
				<Icons
					iconName='logoMin'
					className={`${styles.menu__logoMin} ${
						active ? styles['menu__logoMin--show'] : ''
					}`}
				/>
				<Icons
					iconName='logo'
					className={`${styles.menu__logo} ${
						active ? styles['menu__logo--show'] : ''
					}`}
				/>
				<Button
					title='boton menu'
					className={styles.menu__btn}
					onClick={() => setActive(!active)}
				>
					<div
						className={`${styles.menu__bar} ${
							active ? styles['menu__bar--active'] : ''
						}`}
					></div>
				</Button>
				<Button
					title='mostrar menu'
					className={`${styles.menu__btnShow} ${
						showMenu ? styles['menu__btnShow--show'] : ''
					} ${active ? styles['menu__btnShow--active'] : ''}`}
					onClick={() => setShowMenu(!showMenu)}
					icon={{
						iconName: 'arrow',
						className: `${styles.menu__iconArrow} ${
							showMenu ? styles['menu__iconArrow--show'] : ''
						}`,
					}}
				/>
			</header>

			<div
				className={`${styles.menu__contentLogoutAndProfile} ${
					active ? styles['menu__contentLogoutAndProfile--active'] : ''
				}`}
			>
				<LinkPer
					to='/options/profile'
					className={styles.menu__linkProfile}
					icon={{
						iconName: 'profile',
						className: styles.menu__iconLink,
					}}
				/>
				<Button
					title='Cerrar sesión'
					onClick={() => console.log('logout')}
					icon={{
						iconName: 'exit',
						className: styles.menu__iconLink,
					}}
				/>
			</div>

			<nav className={styles.menu__nav}>
				<ul className={styles.menu__list}>
					{items.map((item, index) => (
						<li key={index} className={styles.menu__item}>
							{item?.sub ? (
								<SubMenu key={index} item={item} active={active} />
							) : (
								<ItemNav key={index} item={item} active={active} />
							)}
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

const SubMenu = ({ item, active }: { item: MenuItem; active: boolean }) => {
	const [show, setShow] = useState(false);
	return (
		<nav className={styles.subMenu}>
			<Button
				title={item.text}
				className={`${styles.subMenu__btn} ${
					active ? styles['subMenu__btn--active'] : ''
				}`}
				onClick={() => setShow(!show)}
			>
				<Icons
					iconName={item.icon}
					className={`${styles.subMenu__iconLink} `}
				/>
				<b
					className={`${styles.menu__text} ${
						active ? styles['menu__text--active'] : ''
					}`}
				>
					{item.text}
				</b>
				<Icons
					iconName='arrow'
					className={`${styles.subMenu__iconSub} ${
						active ? styles['subMenu__iconSub--active'] : ''
					}`}
				/>
			</Button>

			<ul
				className={`${styles.subMenu__list} ${
					show ? styles['subMenu__list--show'] : ''
				}`}
			>
				{item.sub?.map((subItem, index) => (
					<li key={index} className={styles.subMenu__item}>
						<ItemNav key={index} item={subItem} active={active} />
					</li>
				))}
			</ul>
		</nav>
	);
};

const ItemNav = ({ item, active }: { item: MenuItem; active: boolean }) => {
	return (
		item.to && (
			<NavLink
				title={item.text}
				to={item.to}
				className={({ isActive }) =>
					`${styles.menu__link} ${
						isActive ? styles['menu__link--routeActive'] : ''
					} ${active ? styles['menu__link--active'] : ''}`
				}
				end
			>
				<Icons iconName={item.icon} className={styles.menu__iconLink} />
				<b
					className={`${styles.menu__text} ${
						active ? styles['menu__text--active'] : ''
					}`}
				>
					{item.text}
				</b>
			</NavLink>
		)
	);
};
