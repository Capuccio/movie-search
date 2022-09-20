/** @format */

import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
	text-align: center;
	display: grid;
	grid-template-columns: auto auto auto auto auto;
	grid-row-gap: 14px;
	margin: 15px 10px 0 10p;
`

export const HomeLink = styled(Link)`
	text-decoration: none;
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
