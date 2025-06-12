import type { NameIcon } from '@/components/ui/icon/types';
import type { TypeInput } from '@/components/ui/input/types';
import type { ValueAll } from '@/types/types';
import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form';

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
	iconName?: NameIcon;
}

export interface RenderSelectMultipleType {
	name: string;
	placeholder: string;
	options: ValueAll[];
	label?: string;
	className?: string;
	defaultValue?: string[];
	disabled?: boolean;
	iconName?: NameIcon;
}
