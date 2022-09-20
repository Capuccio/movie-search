/** @format */

import React from 'react'

import { IoHomeOutline, IoNewspaperOutline, IoFilmOutline, IoTvOutline } from 'react-icons/io5'

import { NavbarContainer, NavbarLink, iconStyle } from './styles'

const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarLink exact to='/'>
				<IoHomeOutline style={iconStyle} />
			</NavbarLink>
			<NavbarLink to='/detail'>
				<IoFilmOutline style={iconStyle} />
			</NavbarLink>
		</NavbarContainer>
	)
}

export default Navbar
