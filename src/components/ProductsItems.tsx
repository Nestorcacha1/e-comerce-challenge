import { ProductsItemsProps } from '../type/PorductTypes'

function ProductsItems({ product, index, addToCart }: ProductsItemsProps) {
	const hasOfferPrice =
		product.offer_price !== null && product.offer_price !== undefined
	return (
		<article
			className='bg-white shadow-md rounded-lg p-4 w-full  sm:w-1/2 md:w-1/3 lg:w-1/4'
			key={`${product.id}-${index}`}
		>
			<img
				className='w-full h-48 object-cover rounded-t-lg'
				src={product.image}
				alt={product.name}
			/>
			<div className='py-4 items-center text-center'>
				<h2 className='text-balance font-semibold p-2'>{product.name}</h2>
				{hasOfferPrice ? (
					<div>
						<p className='text-sm line-through text-gray-500 p-1'>
							Precio: ${product.price}
						</p>
						<p className='text-lg font-bold text-red-500 p-1'>
							Oferta: ${product.offer_price}
						</p>
					</div>
				) : (
					<p className='text-lg font-semibold p-2'>Precio: ${product.price}</p>
				)}

				<button
					onClick={() => addToCart(product)}
					type='button'
					className='bg-lime-200 hover:bg-lime-600  text-gray-700 p-2 rounded-lg border-2 border-lime-500'
				>
					Agregar
				</button>
			</div>
		</article>
	)
}

export default ProductsItems
