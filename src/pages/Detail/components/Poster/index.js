/** @format */

import React from 'react'
import { IoPlayOutline } from 'react-icons/io5'

import { PosterContainer, PosterImage, PosterIcon, iconPlayStyle } from './style'

const Poster = () => (
	<PosterContainer>
		<PosterImage src='https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg' />
		<PosterIcon>
			<IoPlayOutline style={iconPlayStyle} />
		</PosterIcon>
	</PosterContainer>
)

export default Poster
