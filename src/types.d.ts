export interface ValueAll {
	value: string;
	label: string;
}

export interface ParamsDataGet {
	[key: string]: string | number | boolean | undefined | FileList;
}
