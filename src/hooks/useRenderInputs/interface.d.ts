import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import type { NameIcon } from '../../components/icon/interface';
import type { TypeInput } from '../../components/input/interface';
import type { ValueAll } from '../../interface';

export interface UseRenderInputsType<T> {
	register?: UseFormRegister<T>;
	errors?: FieldErrors<T>;
	control?: Control<T>;
}

export interface RenderInputType {
	name: string;
	placeholder: string;
	label?: string;
	type?: TypeInput;
	className?: string;
	iconName?: NameIcon;
	disabled?: boolean;
}

export interface RenderInputFileType {
	name: string;
	placeholder: string;
	label: string;
	type?: TypeInput;
	className?: string;
	iconName?: string;
	disabled?: boolean;
}

export interface RenderSelectType {
	name: string;
	placeholder: string;
	options: ValueAll[];
	label?: string;
	className?: string;
	defaultValue?: string;
	disabled?: boolean;
	enableSearch?: boolean;
	iconName?: string;
}

export interface RenderSelectMultipleType {
	name: string;
	placeholder: string;
	options: ValueAll[];
	label?: string;
	className?: string;
	defaultValue?: string[];
	disabled?: boolean;
	enableSearch?: boolean;
	iconName?: string;
}
