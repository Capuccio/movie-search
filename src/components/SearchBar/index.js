/** @format */

import React from 'react'

import { IoSearchOutline } from 'react-icons/io5'

import { SearchBarContainer, InputSearch, searchIcon } from './style'

const SearchBar = () => (
	<SearchBarContainer>
		<InputSearch placeholder='Search...' />
		<IoSearchOutline style={searchIcon} />
	</SearchBarContainer>
)

export default SearchBar
