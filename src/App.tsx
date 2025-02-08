import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import ProductSearch from './components/ProductSearch'
import ProductShop from './components/ProductShop'
import { useProducts } from './hook/useProducts'
import { Product } from './type/PorductTypes'

function App() {
	const products = useProducts()
	const [searchData, setSearchData] = useState<Product[]>([])

	const [addCar, setAddCar] = useState<Product[]>([])

	const addToCart = (product: Product) => {
		setAddCar([...addCar, product])
	}

	return (
		<div className='flex bg-amber-200 flex-col'>
			<h2 className='text-4xl text-center mt-4 uppercase text-gray-800 font-bold'>
				Mi farmacia
			</h2>
			<ProductShop cart={addCar} />
			<ProductSearch setSearchData={setSearchData} products={products} />
			<ProductList
				products={searchData.length > 0 ? searchData : products}
				addToCart={addToCart}
			/>
		</div>
	)
}

export default App
