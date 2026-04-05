import Input from '../common/Input.jsx'

function SearchBar({ value, onChange }) {
	return (
		<Input
			label="Search"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder="Search by description or category"
			className="w-full"
		/>
	)
}

export default SearchBar

