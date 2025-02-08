import { CartItemProps } from '../type/PorductTypes'

function ProductShopItem({ product, index }: CartItemProps) {
	const hasOfferPrice =
		product.offer_price !== null && product.offer_price !== undefined

	return (
		<div
			key={`${product.id}-${index}`}
			className='flex ml-5 justify-between items-center mb-2 border-b pb-2 last:border-b-0'
		>
			<div>
				<h3 className='text-md font-semibold'>{product.name}</h3>

				{hasOfferPrice ? (
					<div>
						<p className='text-gray-500 line-through text-sm'>
							${product.price}
						</p>
						<p className='text-md font-bold text-gray-700 p-1'>
							${product.offer_price}
						</p>
					</div>
				) : (
					<p className='text-lg font-semibold p-2 text-gray-700'>
						Precio: ${product.price}
					</p>
				)}
			</div>
		</div>
	)
}

export default ProductShopItem
