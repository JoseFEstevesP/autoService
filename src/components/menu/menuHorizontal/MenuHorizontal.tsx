import { useState } from 'react';
import { Button } from '../../button/Button';
import type { HorizontalMenuProps, MenuItem } from './interface';

import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export const MenuHorizontal = ({ items, ...props }: HorizontalMenuProps) => {
	const [active, setActive] = useState(false);
	return (
		<div {...props} className={`${styles.menu}`}>
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
						<ItemNav
							key={index}
							item={subItem}
							className={styles.subMenu__link}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};

const ItemNav = ({
	item,
	className,
}: {
	item: MenuItem;
	className?: string;
}) => {
	return (
		item.to && (
			<NavLink
				title={item.text}
				to={item.to}
				className={({ isActive }) =>
					`${styles.menu__link} ${className} ${
						isActive ? styles['menu__link--routeActive'] : ''
					}`
				}
				end
			>
				<b>{item.text}</b>
			</NavLink>
		)
	);
};
