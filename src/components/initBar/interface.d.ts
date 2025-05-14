import type { HTMLProps } from 'react';
import type { MenuItem } from '../menu/menuHorizontal/interface';

interface InitBarProps extends HTMLProps<HTMLElement> {
	items: MenuItem[];
}
