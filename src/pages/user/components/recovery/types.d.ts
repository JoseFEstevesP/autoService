export interface APIRecoveryResponse {
	code: number;
	message: string;
}

export interface APINextPasswordResponse {
	code: number;
	message: string;
	nextPassword: string;
}
