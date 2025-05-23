import type { HTMLProps } from 'react';
import type { MenuItem } from '../menu/menuHorizontal/types';

interface InitBarProps extends HTMLProps<HTMLElement> {
	items: MenuItem[];
}
