import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
	background-color: transparent;
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

	@media screen and (width>767px) {
		height: 159px;
		padding: 32px 52px 27px 51px;
		display: flex;
		flex-direction: column;
		gap: 39px;
	}

	@media screen and (width>1023px) {
		height: 85px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
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

	@media screen and (width>767px) {
		display: none;
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

	@media screen and (width>767px) {
		display: none;
	}
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

const StyledHorizontalMenu = styled.ul`
	display: none;

	@media screen and (width>767px) {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media screen and (width>1023px) {
		max-width: 665px;
	}
`;

const StyledListPlanets = styled.li`
	font-size: 11pt;
`;

const StyledLinkPlanet = styled(Link)`
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}
`;

export {
	StyledHorizontalMenu,
	StyledIconBurger,
	StyledIconPlanet,
	StyledLinkPlanet,
	StyledListItem,
	StyledListPlanets,
	StyledMenu,
	StyledNavBar,
	StyledPlanetContainer,
	StyledPlanetName,
	StyledPlanetsMenu,
	StyledTitleMenu
};
