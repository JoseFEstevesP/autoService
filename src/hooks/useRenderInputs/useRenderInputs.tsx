import type { FieldValues } from 'react-hook-form';
import { Input } from '../../components/input/Input';
import type { ErrorInput } from '../../components/input/interface';
import type { RenderInputType, UseRenderInputsType } from './interface';

const useRenderInputs = <T extends FieldValues>({
	register,
	errors,
}: // control,
UseRenderInputsType<T>) => {
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

	// const renderSelect = ({
	// 	name,
	// 	placeholder,
	// 	options,
	// 	label,
	// 	className,
	// 	defaultValue,
	// 	disabled,
	// 	enableSearch,
	// 	iconName,
	// }: RenderSelectType) => (
	// 	<SelectSingle<T>
	// 		name={name}
	// 		placeholder={placeholder}
	// 		options={options}
	// 		error={errors && (errors[name] as ErrorInput)}
	// 		control={control}
	// 		label={label}
	// 		className={className}
	// 		defaultValue={defaultValue}
	// 		disabled={disabled}
	// 		enableSearch={enableSearch}
	// 		iconName={iconName}
	// 	/>
	// );

	// const renderSelectMultiple = ({
	// 	name,
	// 	placeholder,
	// 	options,
	// 	label,
	// 	className,
	// 	defaultValue,
	// 	disabled,
	// 	enableSearch,
	// 	iconName,
	// }: RenderSelectMultipleType) => (
	// 	<SelectMultiple
	// 		name={name}
	// 		placeholder={placeholder}
	// 		options={options}
	// 		error={errors && (errors[name] as ErrorInput)}
	// 		control={control}
	// 		label={label}
	// 		className={className}
	// 		defaultValue={defaultValue}
	// 		disabled={disabled}
	// 		enableSearch={enableSearch}
	// 		iconName={iconName}
	// 	/>
	// );

	return {
		renderInput,
		// renderSelect,
		//  renderSelectMultiple,
		//  renderInputFile
	};
};
export default useRenderInputs;
