import type { HTMLAttributes, ReactNode } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
	description: string;
	children: ReactNode;
	textLink: string;
	to: string;
}
