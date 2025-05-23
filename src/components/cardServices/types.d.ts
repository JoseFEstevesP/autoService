import type { HTMLAttributes } from 'react';

export interface CardServicesProps extends HTMLAttributes<HTMLElement> {
	image: string;
	to: string;
	description: string;
}
