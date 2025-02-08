import { useEffect, useState } from 'react'
import { Product } from '../type/PorductTypes'
import axios from 'axios'

const BASE_URL = 'https://67a681cf510789ef0dfb946c.mockapi.io/api/v1/productos'

export const useProducts = () => {
	const [products, setPorducts] = useState<Product[]>([])

	const getProducts = async () => {
		try {
			const response = await axios.get(BASE_URL)
			setPorducts(response.data)
		} catch {
			console.log('Error en obtener los datos')
		}
	}

	useEffect(() => {
		getProducts()
	}, [])

	return products
}

export const searchProducts = async (query: string) => {
	try {
		const response = await axios.get(`${BASE_URL}?search=${query}`)
		return response.data
	} catch {
		console.log('Error en buscar los datos')
		return []
	}
}
