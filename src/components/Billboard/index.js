/** @format */

import React from 'react'

import { BillboardContainer, billboardImg } from './style'

const Billboard = (props) => {
	return (
		<BillboardContainer>
			<img src={props.billboardImage} style={billboardImg} />
			<p>{props.billBoardTitle}</p>
		</BillboardContainer>
	)
}

export default Billboard
