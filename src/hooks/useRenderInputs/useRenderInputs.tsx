import type { FieldValues } from 'react-hook-form';

import { Input } from '@/components/ui/input/Input';
import type { ErrorInput } from '@/components/ui/input/types';
import { SelectMultiple } from '@/components/ui/select/SelectMultiple';
import { SelectSingle } from '@/components/ui/select/SelectSingle';
import type {
	RenderInputType,
	RenderSelectMultipleType,
	RenderSelectType,
	UseRenderInputsType,
} from './types';

const useRenderInputs = <T extends FieldValues>({
	register,
	errors,
	control,
}: UseRenderInputsType<T>) => {
	const renderInput = ({
		name,
		placeholder,
		label,
		type = 'text',
		className,
		iconName,
		disabled,
	}: RenderInputType) => (
		<Input
			name={name}
			placeholder={placeholder}
			type={type}
			register={register}
			error={errors && (errors[name] as ErrorInput)}
			label={label}
			className={className}
			iconName={iconName}
			disabled={disabled}
		/>
	);

	// const renderInputFile = ({
	// 	name,
	// 	placeholder,
	// 	label,
	// 	type = 'file',
	// 	className,
	// 	iconName,
	// 	disabled,
	// }: RenderInputType) => (
	// 	<InputFile
	// 		name={name}
	// 		placeholder={placeholder}
	// 		type={type}
	// 		register={register}
	// 		error={errors && (errors[name] as ErrorInput)}
	// 		label={label}
	// 		className={className}
	// 		iconName={iconName}
	// 		disabled={disabled}
	// 	/>
	// );

	const renderSelect = ({
		name,
		placeholder,
		options,
		label,
		className,
		defaultValue,
		disabled,
		iconName,
	}: RenderSelectType) =>
		control ? (
			<SelectSingle<T>
				name={name}
				placeholder={placeholder}
				options={options}
				error={errors && (errors[name] as ErrorInput)}
				control={control}
				label={label}
				className={className}
				defaultValue={defaultValue}
				disabled={disabled}
				enableSearch={options.length > 5}
				iconName={iconName}
			/>
		) : null;

	const renderSelectMultiple = ({
		name,
		placeholder,
		options,
		label,
		className,
		defaultValue,
		disabled,
		iconName,
	}: RenderSelectMultipleType) =>
		control ? (
			<SelectMultiple
				name={name}
				placeholder={placeholder}
				options={options}
				error={errors && (errors[name] as ErrorInput)}
				control={control}
				label={label}
				className={className}
				defaultValue={defaultValue}
				disabled={disabled}
				enableSearch={options.length > 5}
				iconName={iconName}
			/>
		) : null;

	return {
		renderInput,
		renderSelect,
		renderSelectMultiple,
		//  renderInputFile
	};
};
export default useRenderInputs;
