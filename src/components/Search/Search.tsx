import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useLocation, useMatch, useNavigate } from 'react-router-dom'

export const Search = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const isMatch = useMatch('search')
	const [inputState, setInputState] = useState('')
	
	useEffect(() => {
		if (isMatch) return
		setInputState('')
	}, [location.pathname, isMatch])

	const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputState(e.target.value)
	}

	const onSubmitHandler = (e: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		
		if (!inputState.trim()) return
		navigate(`/search?q=${inputState}`)
	}

	return (
		<form onSubmit={onSubmitHandler} className='relative'>
			<input
				name='search'
				type='text'
				placeholder='Поиск...'
				className='p-1 w-60 placeholder:text-neutral-800 text-neutral-800'
				value={inputState}
				onChange={onInputHandler}
			/>
			<button type='submit' className="absolute inset-y-0 right-1 cursor-pointer" onClick={onSubmitHandler}>
				<i className="ri-search-line text-neutral-800"></i>
			</button>
		</form>
	);
}