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
	| 'arrowSmall'
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
	| 'starEmpty'
	| 'search'
	| 'refresh'
	| 'filter'
	| 'checkBoxOn'
	| 'checkBoxOff'
	| 'arrowMin';

export interface IconParameter extends SVGProps<SVGSVGElement> {
	iconName: NameIcon;
	type?: 'autoServiceIcon';
}
