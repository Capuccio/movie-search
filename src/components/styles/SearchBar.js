/** @format */

import styled from 'styled-components'

export const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	width: 900px;
	padding-left: 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const InputSearch = styled.input`
	font-size: 16px;
	border: none;
	width: 100%;
	padding: 22px 5px;
	&:focus {
		outline: none;
	}
`

export const SearchListContainer = styled.div`
	display: ${(props) => (props.haveData.length === 0 ? 'none' : 'block')};
	position: absolute;
	margin-top: 5px;
	width: 908px;
	background-color: white;
	box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
`

export const SearchListItem = styled.div`
	cursor: pointer;
	padding: 5px 12px;
	transition: background-color 0.5s linear;
	&:hover {
		background-color: #f5f5f5;
	}
`

export const searchIcon = {
	fontSize: '20px',
	color: 'rgba(0, 0, 0, .4)',
	position: 'relative',
	marginRight: '6px',
}
