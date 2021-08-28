/** @format */

import React from 'react'
import { NavLink } from 'react-router-dom'

import { IoHomeOutline, IoFilmOutline, IoTvOutline } from 'react-icons/io5'

import { NavbarContainer, navLinkStyle, iconStyle } from './style'

const Navbar = () => {
	return (
		<NavbarContainer>
			<NavLink exact to='/' activeStyle={navLinkStyle}>
				<IoHomeOutline style={iconStyle} />
			</NavLink>
			<NavLink to='/other' activeStyle={navLinkStyle}>
				<IoFilmOutline style={iconStyle} />
			</NavLink>
			<NavLink to='/other' activeStyle={navLinkStyle}>
				<IoTvOutline style={iconStyle} />
			</NavLink>
		</NavbarContainer>
	)
}

export default Navbar
