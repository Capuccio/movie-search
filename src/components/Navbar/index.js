/** @format */

import React from 'react'

import { IoHomeOutline, IoNewspaperOutline, IoFilmOutline, IoTvOutline } from 'react-icons/io5'

import { NavbarContainer, NavbarLink, iconStyle } from './style'

const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarLink exact to='/'>
				<IoHomeOutline style={iconStyle} />
			</NavbarLink>
			<NavbarLink to='/detail/2'>
				<IoFilmOutline style={iconStyle} />
			</NavbarLink>
			<NavbarLink to='/other'>
				<IoTvOutline style={iconStyle} />
			</NavbarLink>
			<NavbarLink to='/other'>
				<IoNewspaperOutline style={iconStyle} />
			</NavbarLink>
		</NavbarContainer>
	)
}

export default Navbar
