import { useState } from 'react';
import { Button } from '../button/Button';
import { Icons } from '../icon/Icons';
import type { MenuItem, VerticalMenuProps } from './interface';

import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export const MenuHorizontal = ({ items, ...props }: VerticalMenuProps) => {
	console.log(' MenuHorizontal -> items:', items);
	const [active, setActive] = useState(false);
	return (
		<aside {...props} className={`${styles.menu}  `}>
			<header>
				<Icons iconName='logo' className={`${styles.menu__logo}`} />
			</header>

			<div className={styles.menu__contentMenu}>
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
				<nav
					className={`${styles.menu__nav} ${
						active ? styles['menu__nav--active'] : ''
					}`}
				>
					<ul className={styles.menu__list}>
						{items.map((item, index) => (
							<li key={index} className={styles.menu__item}>
								{item?.sub ? (
									<SubMenu key={index} item={item} />
								) : (
									<ItemNav key={index} item={item} />
								)}
							</li>
						))}
					</ul>
				</nav>
			</div>

			<footer className={styles.menu__footer}>
				<Icons iconName='user' className={styles.menu__icon} />
			</footer>
		</aside>
	);
};

const SubMenu = ({ item }: { item: MenuItem }) => {
	const [show, setShow] = useState(false);
	return (
		<nav className={styles.subMenu}>
			<Button
				title={item.text}
				text={item.text}
				className={`${styles.subMenu__btn} `}
				onClick={() => setShow(!show)}
				icon={{
					iconName: 'arrow-small',
					className: `${styles.subMenu__iconSub}`,
				}}
			/>

			<ul
				className={`${styles.subMenu__list} ${
					show ? styles['subMenu__list--show'] : ''
				}`}
			>
				{item.sub?.map((subItem, index) => (
					<li key={index} className={styles.subMenu__item}>
						<ItemNav key={index} item={subItem} />
					</li>
				))}
			</ul>
		</nav>
	);
};

const ItemNav = ({ item }: { item: MenuItem }) => {
	return (
		item.to && (
			<NavLink
				title={item.text}
				to={item.to}
				className={({ isActive }) =>
					`${styles.menu__link} ${
						isActive ? styles['menu__link--routeActive'] : ''
					}`
				}
				end
			>
				<b className={`${styles.menu__text} `}>{item.text}</b>
			</NavLink>
		)
	);
};
