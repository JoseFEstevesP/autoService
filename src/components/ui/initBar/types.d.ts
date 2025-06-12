import type { HTMLProps } from 'react';
import type { MenuItem } from '../menuHorizontal/types';

interface InitBarProps extends HTMLProps<HTMLElement> {
	items: MenuItem[];
}
