import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
	background-color: #070724;
	padding: 16px 24px;
	height: 68px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	&:after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: white;
		position: absolute;
		left: 0;
		bottom: 0;
	}
`;

const StyledTitleMenu = styled(Link)`
	font-size: 20px;
	text-decoration: none;
	display: flex;
	justify-content: space-between;
	width: 100%;

	&:hover {
		background-color: #38384f;
		cursor: pointer;
	}

	& > div {
		display: flex;
		gap: 25px;
	}
`;

const StyledMenu = styled.div`
	position: absolute;
	width: 100%;
	height: calc(100vh - 68px);
	background-color: #070724;
	opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
	left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
	top: 68px;
	transition:
		left 0.3s ease,
		opacity 0.3s ease;
	z-index: 10;
`;

const StyledListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 24px;
`;

const StyledPlanetContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 25px;
`;

const StyledIconPlanet = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${({ $planet }) => {
		switch ($planet) {
			case 'mercury':
				return '#419EBB';
			case 'venus':
				return '#EDA249';
			case 'earth':
				return '#6D2ED5';
			case 'mars':
				return '#D14C32';
			case 'jupiter':
				return '#D83A34';
			case 'saturn':
				return '#CD5120';
			case 'uranus':
				return '#1EC1A2';
			case 'neptune':
				return '#2D68F0';
			default:
				return 'white';
		}
	}};
`;

export {
	StyledIconPlanet,
	StyledListItem,
	StyledMenu,
	StyledNavBar,
	StyledPlanetContainer,
	StyledTitleMenu
};
