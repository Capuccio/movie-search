/** @format */

import React from 'react'

import BillboardLoading from './BillboardLoading'
import BillboardContainer from './BillboardContainer'

const Billboard = (props) => {
	if (props.loading) return <BillboardLoading />

	return (
		<BillboardContainer>
			<img src={props.src} style={billboardImg} />
			<p>{props.children}</p>
		</BillboardContainer>
	)
}

export default Billboard

const billboardImg = {
	width: '200px',
	height: '180px',
	maxWidth: '100%',
	objectFit: 'fill',
	borderRadius: '10px',
}
