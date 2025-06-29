import type { ApiRegisterError } from '@/types/types';
import { AxiosError } from 'axios';
import type {
	FieldErrors,
	FieldValues,
	Path,
	UseFormSetError,
} from 'react-hook-form';

export const handleError = <T extends FieldValues>({
	error,
	setError,
}: {
	error: unknown;
	setError: UseFormSetError<T>;
}) => {
	// Si es un error de validación de react-hook-form
	if (isFieldErrors(error)) {
		const errorKeys = Object.keys(error) as Path<T>[];
		errorKeys.forEach(key => {
			const errorMessage = error[key]?.message;
			if (errorMessage) {
				setError(key, {
					type: 'manual',
					message: errorMessage as string | undefined,
				});
			}
		});
		return;
	}

	// Si es un error de Axios con la estructura de tu API
	if (isApiError(error)) {
		const errorDetails = error.response?.data.error.details;
		if (errorDetails) {
			const errorEntries = Object.entries(errorDetails) as [Path<T>, string][];
			errorEntries.forEach(([key, message]) => {
				setError(key, {
					type: 'manual',
					message: message,
				});
			});
		}
		return;
	}

	// Manejo de otros tipos de errores
	console.error('Unhandled error type:', error);
};

// Type guards para verificar la estructura del error
function isFieldErrors<T extends FieldValues>(
	error: unknown,
): error is FieldErrors<T> {
	return typeof error === 'object' && error !== null && !('response' in error);
}

function isApiError(error: unknown): error is AxiosError<ApiRegisterError> {
	return (
		error instanceof AxiosError &&
		error.response?.data?.error?.details !== undefined
	);
}
