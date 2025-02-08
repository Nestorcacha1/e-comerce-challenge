export interface Product {
	createdAt: string
	name: string
	image: string
	price: string
	offer_price: string
	promoted: boolean
	featured_product: boolean
	bar_code: number
	presentation_type: string
	category: string
	description: string
	state: boolean
	id: string
}

export interface ProductListProps {
	products: Product[]
	addToCart: (product: Product) => void
}
export interface ProductsItemsProps {
	product: Product
	index: number
	addToCart: (product: Product) => void
}

export interface ProductSearchProps {
	// setSearchData: React.Dispatch<React.SetStateAction<Product[]>>
	// products: Product[]
	addToCart: (product: Product) => void
}

export interface CartProps {
	cart: Product[]
	// product: Product
	// index?: number
}
export interface CartItemProps {
	product: Product
	index: number
}

export interface ProductSearchItemProps {
	product: Product
	index: number
	addToCart: (product: Product) => void
}
