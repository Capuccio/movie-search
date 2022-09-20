/** @format */

import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const NavbarContainer = styled.div`
	width: 7%;
	font-size: 28px;
	background-color: rgb(247, 247, 247, 0.7);
	box-shadow: inset 0 0 10px -5px rgb(0, 0, 0, 0.3);
	position: fixed;
	height: 100vh;
`

export const NavbarLink = styled(NavLink)`
	textdecoration: 'none';
	&:link {
		color: rgba(76, 76, 76, 1);
	}
	&:visited {
		color: rgba(76, 76, 76, 1);
	}
	&.active {
		color: #3c9aff;
	}
`

export const iconStyle = {
	display: 'block',
	margin: '25px auto',
}
