import { ProductListProps } from '../type/PorductTypes'
import ProductsItems from './ProductsItems'

function ProductList({ products, addToCart }: ProductListProps) {
	return (
		<div className='flex flex-wrap justify-center gap-4 mt-8'>
			{products.map((product, index: number) => (
				<ProductsItems
					key={`${product.id}-${index}`}
					product={product}
					index={index}
					addToCart={addToCart}
				/>
			))}
		</div>
	)
}

export default ProductList
