/** @format */

import React from 'react'

import styled from 'styled-components'

const BillboardContainer = (props) => {
	return <BillboardContainerStyle>{props.children}</BillboardContainerStyle>
}

export default BillboardContainer

const BillboardContainerStyle = styled.div`
	width: 200px;
	height: 250px;
	max-width: 100%;
	transition: 0.4s;
	&:hover {
		border-radius: 10px;
		box-shadow: 0px 0px 6px rgba(97, 97, 97, 0.6);
	}
`
