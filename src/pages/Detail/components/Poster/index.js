/** @format */

import React from 'react'
import { IoPlayOutline } from 'react-icons/io5'

import { PosterContainer, PosterImage, PosterIcon, iconPlayStyle } from './style'

const Poster = (props) => (
	<PosterContainer>
		<PosterImage src={props.poster} />
		<PosterIcon>
			<IoPlayOutline style={iconPlayStyle} />
		</PosterIcon>
	</PosterContainer>
)

export default Poster
