import React, { useState } from 'react'
import { searchProducts } from '../hook/useProducts'
import { ProductSearchProps } from '../type/PorductTypes'

function ProductSearch({ setSearchData, products }: ProductSearchProps) {
	const [search, setSearch] = useState<string>('')

	const handleSearchByNameAndCode = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault()
		if (search.trim() === '') {
			setSearchData(products)
		} else {
			const results = await searchProducts(search)
			setSearchData(results)
		}
	}

	return (
		<div className='flex flex-col items-center mt-6 px-4'>
			<form
				onSubmit={handleSearchByNameAndCode}
				className='flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg'
			>
				<input
					onChange={e => setSearch(e.target.value)}
					value={search}
					className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
					type='search'
					placeholder='Buscar por nombre o código'
				/>
				<button
					type='submit'
					className='px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all'
				>
					Buscar
				</button>
			</form>
		</div>
	)
}

export default ProductSearch
