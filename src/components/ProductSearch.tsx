import React, { useState } from 'react'
import { searchProducts } from '../hook/useProducts'
import { Product, ProductSearchProps } from '../type/PorductTypes'

import { IoClose } from 'react-icons/io5'

function ProductSearch({ addToCart }: ProductSearchProps) {
	const [search, setSearch] = useState<string>('')
	const [searchData, setSearchData] = useState<Product[]>([])
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleSearchByNameAndCode = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault()
		const results = await searchProducts(search)
		setSearchData(results)
		setIsOpen(true)
	}

	return (
		<div className='flex flex-col items-center mt-6 px-4 relative w-full max-w-lg mx-auto'>
			<form
				onSubmit={handleSearchByNameAndCode}
				className='flex items-center gap-3 w-full border border-gray-300 rounded-lg overflow-hidden'
			>
				<input
					onChange={e => setSearch(e.target.value)}
					value={search}
					required
					className='w-full p-3 outline-none'
					type='search'
					placeholder='Buscar por nombre o código'
				/>
				<button
					type='submit'
					className='px-4 py-3 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all'
				>
					Buscar
				</button>
			</form>

			{isOpen && (
				<div className='absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg p-4 max-h-80 overflow-auto z-10'>
					<div className='flex justify-between items-center mb-2'>
						<h2 className='text-lg font-semibold'>Resultados de búsqueda</h2>
						<button
							onClick={() => setIsOpen(false)}
							className='text-gray-600 hover:text-black'
						>
							<IoClose size={24} />
						</button>
					</div>
					{searchData.length > 0 ? (
						<ul>
							{searchData.map((product, index) => (
								<li
									key={index}
									className='flex items-center gap-4 border-b py-2'
								>
									<img
										className='w-12 h-12 object-cover'
										src={product.image}
										alt={product.name}
									/>
									<div className='flex-1'>
										<p className='font-medium'>{product.name}</p>
										{product.offer_price ? (
											<p className='text-red-500 font-semibold'>
												S/ {product.offer_price}
											</p>
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
							))}
						</ul>
					) : (
						<p className='text-gray-600 text-center'>
							No se encontraron productos
						</p>
					)}
				</div>
			)}
		</div>
	)
}

export default ProductSearch
