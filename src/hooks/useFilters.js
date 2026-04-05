import { useState } from 'react'

export function useFilters() {
	const [search, setSearch] = useState('')
	const [category, setCategory] = useState('all')
	const [type, setType] = useState('all')
	const [sortBy, setSortBy] = useState('date-desc')

	const resetFilters = () => {
		setSearch('')
		setCategory('all')
		setType('all')
		setSortBy('date-desc')
	}

	return {
		search,
		setSearch,
		category,
		setCategory,
		type,
		setType,
		sortBy,
		setSortBy,
		resetFilters,
	}
}

