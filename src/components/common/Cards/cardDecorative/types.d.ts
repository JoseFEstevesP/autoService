import type { NameIcon } from '@/components/ui/icon/types';
import type { HTMLAttributes } from 'react';

export interface CardDecorativeProps extends HTMLAttributes<HTMLElement> {
	description: string;
	iconName: NameIcon;
}
