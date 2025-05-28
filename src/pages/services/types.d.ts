export interface ServiceType {
	id: number;
	documentId: string;
	catalog: string;
	sku: string;
	name: string;
	description: string;
	price: number;
	tax: number;
	taxable: number;
	stock: number;
	rating: number;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	model: string;
	category: string;
	image: string;
	tags: Tag[];
	brand: string;
}

export interface Tag {
	id: number;
	documentId: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
}

export interface ApiResponse {
	data: ServiceType[];
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}
