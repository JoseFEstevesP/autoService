import type { SVGProps } from 'react';

export type NameIcon =
	| 'arrow'
	| 'bank'
	| 'calendar'
	| 'car'
	| 'card'
	| 'email'
	| 'facebook'
	| 'instagram'
	| 'location'
	| 'paypal'
	| 'phone'
	| 'shield'
	| 'user'
	| 'wallet'
	| 'x'
	| 'arrow-small'
	| 'logo'
	| 'padlock'
	| 'add'
	| 'close'
	| 'shopCar'
	| 'clock'
	| 'tool'
	| 'users'
	| 'award'
	| 'sun'
	| 'moon'
	| 'star'
	| 'starEmpty';

export interface IconParameter extends SVGProps<SVGSVGElement> {
	iconName: NameIcon;
	type?: 'autoServiceIcon';
}
