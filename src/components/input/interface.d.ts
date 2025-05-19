import type { UseFormRegister } from 'react-hook-form';
import type { NameIcon } from '../icon/interface';

export type ErrorInput = ErrorStructure | undefined;

export type TypeInput =
	| 'text'
	| 'number'
	| 'search'
	| 'date'
	| 'email'
	| 'password'
	| 'file';

export interface InputProps {
	name: string;
	placeholder?: string;
	error: ErrorInput;
	className?: string;
	register: UseFormRegister;
	type?: TypeInput;
	label?: string;
	disabled?: boolean;
	iconName?: NameIcon;
}
