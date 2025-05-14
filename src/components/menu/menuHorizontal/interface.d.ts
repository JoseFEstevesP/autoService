import type { HTMLProps } from 'react';

export interface DataMenu {
	text: string;
	to: string;
}

export interface MenuItem extends DataMenu {
	sub?: DataMenu[];
}

interface HorizontalMenuProps extends HTMLProps<HTMLDivElement> {
	items: MenuItem[];
}
