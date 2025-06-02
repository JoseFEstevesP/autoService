export interface BaseEntity {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface Image extends BaseEntity {
	name: string;
	alternativeText: string;
	caption: string;
	width: number | null;
	height: number | null;
	formats: null;
	hash: string | null;
	ext: string | null;
	mime: string | null;
	size: number | null;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: null;
}

export interface Tag extends BaseEntity {
	name: string;
}

export interface Model extends BaseEntity {
	name: string;
}

export interface Category extends BaseEntity {
	name: string;
}

export enum Brand {
	Inca = 'INCA',
	Motul = 'MOTUL',
}

export enum CatalogType {
	Product = 'producto',
	Service = 'servicio',
}

export interface ProductType extends BaseEntity {
	catalog: CatalogType.Product;
	sku: string;
	name: string;
	description: string;
	price: number;
	tax: number;
	taxable: number;
	stock: number;
	rating: number;
	model: Model;
	category: Category;
	image: Image;
	tags: Tag[];
	brand: Brand;
	appointment: null;
}

export interface ServiceType extends BaseEntity {
	catalog: CatalogType.Service;
	sku: string;
	name: string;
	description: string;
	price: number;
	tax: number;
	taxable: number;
	stock: number;
	rating: number;
	model: Model;
	category: Category;
	image: Image;
	tags: Tag[];
	brand: string;
	appointment: null;
}

export interface ApiResponse<T> {
	data: T[];
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

export type ProductsResponse = ApiResponse<ProductType>;
export type ServicesResponse = ApiResponse<ServiceType>;
