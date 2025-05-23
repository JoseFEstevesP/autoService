export interface ValueAll {
	value: string;
	label: string;
}

export interface ParamsDataGet extends ParamsData {
	[key: string]: string | number | boolean | undefined | FileList;
}
