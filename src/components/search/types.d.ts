export interface SearchProps {
	handleData: ({ search: string }) => void;
	classNames?: string;
}

export interface SearchInputProps {
	onChange?: (value: string) => void;
}
