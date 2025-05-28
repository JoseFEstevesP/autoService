export interface ProductType {
	id: number;
	documentId: string;
	catalog: Catalog;
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
	brand: Brand;
}

export enum Brand {
	Inca = 'INCA',
	Motul = 'MOTUL',
}

export enum Catalog {
	Producto = 'producto',
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
	data: ProductType[];
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}
