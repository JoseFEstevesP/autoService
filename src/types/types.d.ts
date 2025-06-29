export interface ValueAll {
	value: string;
	label: string;
}

export interface ParamsDataGet {
	[key: string]: string | number | boolean | undefined | FileList;
}

export interface APIRegisterResponse {
	[key: string]: string;
}

export interface ApiRegisterError {
	data: null;
	error: {
		status: number;
		name: string;
		message: string;
		details: Record<string, string>;
	};
}
