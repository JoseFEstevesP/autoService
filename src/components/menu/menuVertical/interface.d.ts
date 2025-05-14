import type { HTMLProps } from 'react';
import type { DataMenu } from '../menuHorizontal/interface';

type DataMenuIcon = DataMenu & {
	icon: string;
};

export interface MenuItem extends DataMenuIcon {
	sub?: DataMenuIcon[];
}

interface VerticalMenuProps extends HTMLProps<HTMLElement> {
	items: MenuItem[];
	className?: string;
}
