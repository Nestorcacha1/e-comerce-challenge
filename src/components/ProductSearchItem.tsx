import { ProductSearchItemProps } from '../type/PorductTypes'

function ProductSearchItem({
	product,
	index,
	addToCart,
}: ProductSearchItemProps) {
	return (
		<li key={index} className='flex items-center gap-4 border-b py-2'>
			<img
				className='w-12 h-12 object-cover'
				src={product.image}
				alt={product.name}
			/>
			<div className='flex-1'>
				<p className='font-medium'>{product.name}</p>
				{product.offer_price ? (
					<p className='text-red-500 font-semibold'>S/ {product.offer_price}</p>
				) : (
					<p className='text-gray-600'>S/ {product.price}</p>
				)}
			</div>
			<button
				className='px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
				onClick={() => addToCart(product)}
			>
				Agregar
			</button>
		</li>
	)
}

export default ProductSearchItem
