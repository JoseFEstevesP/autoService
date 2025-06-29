import type { UseFormSetError } from 'react-hook-form';

export interface UseRegisterType<T> {
	url: string;
	name: string;
	setError: UseFormSetError<T>;
	to: string;
}
