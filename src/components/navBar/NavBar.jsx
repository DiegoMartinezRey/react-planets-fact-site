import { useState } from 'react';
import { PLANETS_INFO } from '../../constants/planets-info';
import {
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
} from './navBar.styles';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<StyledNavBar>
			<StyledTitleMenu to='/' onClick={() => setIsMenuOpen(false)}>
				THE PLANETS
			</StyledTitleMenu>
			<StyledIconBurger
				src='/assets/icon-hamburger.svg'
				alt='Menu icon'
				$isOpen={isMenuOpen}
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			/>
			<StyledMenu $isOpen={isMenuOpen}>
				<StyledListItem>
					{PLANETS_INFO.map(planet => (
						<StyledPlanetsMenu
							key={planet.name}
							to={`/${planet.name.toLowerCase()}`}
							onClick={() => setIsMenuOpen(false)}
						>
							<StyledPlanetContainer>
								<StyledIconPlanet $planetColor={planet.color} />
								<StyledPlanetName>{planet.name.toUpperCase()}</StyledPlanetName>
							</StyledPlanetContainer>
							<span>{'>'}</span>
						</StyledPlanetsMenu>
					))}
				</StyledListItem>
			</StyledMenu>
			<StyledHorizontalMenu>
				{PLANETS_INFO.map(planet => (
					<StyledListPlanets key={planet.name}>
						<StyledLinkPlanet to={`/${planet.name.toLowerCase()}`}>
							{planet.name.toUpperCase()}
						</StyledLinkPlanet>
					</StyledListPlanets>
				))}
			</StyledHorizontalMenu>
		</StyledNavBar>
	);
};

export default NavBar;
