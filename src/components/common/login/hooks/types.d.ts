export interface APIResponse {
	jwt: string;
	user: User;
	profile: Profile;
}

export interface User {
	id: number;
	documentId: string;
	username: string;
}

export interface Profile {
	id: number;
	documentId: string;
	name: string;
	dni: string;
	phone: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: unknown;
	addresses: unknown[];
	vehicles: unknown[];
	email: string;
}
