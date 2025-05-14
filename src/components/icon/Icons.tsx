import { useEffect, useState } from 'react';
import type { IconParameter } from './interface';
import styles from './styles.module.scss';

const iconPack = {
	autoServiceIcon: import('./../../assets/icon/autoService-min.svg'),
};

export const Icons = ({
	iconName,
	type = 'autoServiceIcon',
	...props
}: IconParameter) => {
	const [typeIconPack, setTypeIconPack] = useState<string>();

	useEffect(() => {
		(iconPack[type] as Promise<{ default: string }>).then(res => {
			setTypeIconPack(res.default);
		});
	}, [type]);

	return (
		<svg
			{...props}
			role='img'
			className={`${styles.icon} ${props.className} `}
			aria-hidden='true'
		>
			<use href={`${typeIconPack}#${iconName}`}></use>
		</svg>
	);
};

Icons.styles = styles;
