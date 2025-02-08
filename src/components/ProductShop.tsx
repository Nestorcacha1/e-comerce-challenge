import { useState } from 'react'
import { FaCartPlus } from 'react-icons/fa6'
import { CartProps } from '../type/PorductTypes'
import ProductShopItem from './ProductShopItem'

function ProductShop({ cart }: CartProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const ToggleVisible = () => {
		setIsVisible(!isVisible)
	}

	const getPrice = (product: { price: string; offer_price?: string }) => {
		return product.offer_price
			? parseFloat(product.offer_price)
			: parseFloat(product.price)
	}

	const TotalPrice = () => {
		return cart
			.reduce((total, product) => total + getPrice(product), 0)
			.toFixed(2)
	}

	return (
		<div className='relative flex justify-end p-4 mx-16 gap-4'>
			<FaCartPlus
				className='w-10 h-10 text-white cursor-pointer'
				onClick={ToggleVisible}
			/>
			<span className='font-semibold  text-center text-lg bg-sky-300 w-8 h-8 rounded-full'>
				{cart.length}
			</span>

			{isVisible && (
				<div className='absolute top-12 right-0 bg-white shadow-lg rounded-md w-80 z-50'>
					<h2 className='text-2xl font-semibold mb-4 text-amber-300 p-2 text-center'>
						Carrito de Compras
					</h2>
					<p>Total pagar {TotalPrice()}</p>
					<div className='max-h-64 overflow-y-auto  cursor-pointer'>
						{cart.length > 0 ? (
							cart.map((product, index) => (
								<ProductShopItem product={product} index={index} />
							))
						) : (
							<p className='text-gray-600'>No hay productos en el carrito</p>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default ProductShop
