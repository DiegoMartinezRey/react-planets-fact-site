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
	font-family: 'Antonio', serif;
	font-size: 28px;
	text-decoration: none;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&:hover {
		cursor: pointer;
	}
`;

const StyledIconBurger = styled.img`
	opacity: ${({ $isOpen }) => ($isOpen ? '0.2' : '1')};
	transition: opacity 0.3s ease;
	&:hover {
		cursor: pointer;
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
	overflow-y: hidden;
`;

const StyledListItem = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 41px;
	padding: 43px 29px 0 19px;
`;

const StyledPlanetsMenu = styled(Link)`
	font-size: 28pt;
	font-weight: 500;
	letter-spacing: 1.36px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&:hover {
		cursor: pointer;
	}

	& > span {
		font-size: 15px;
		color: rgba(255, 255, 255, 0.5);
	}
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
	background-color: ${({ $planetColor }) => $planetColor};
`;

const StyledPlanetName = styled.span`
	font-size: 15pt;
`;

export {
	StyledIconBurger,
	StyledIconPlanet,
	StyledListItem,
	StyledMenu,
	StyledNavBar,
	StyledPlanetContainer,
	StyledPlanetName,
	StyledPlanetsMenu,
	StyledTitleMenu
};
