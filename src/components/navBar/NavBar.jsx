import { useState } from 'react';
import { PLANETS_INFO } from '../../constants/planets-info';
import {
	StyledIconPlanet,
	StyledListItem,
	StyledMenu,
	StyledNavBar,
	StyledPlanetContainer,
	StyledTitleMenu
} from './navBar.styles';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<StyledNavBar>
			<StyledTitleMenu to='/' onClick={() => setIsMenuOpen(false)}>
				THE PLANETS
			</StyledTitleMenu>
			<img
				src='/assets/icon-hamburger.svg'
				alt='Menu icon'
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			/>
			<StyledMenu $isOpen={isMenuOpen}>
				<ul>
					{PLANETS_INFO.map(planet => (
						<StyledListItem key={planet.name}>
							<StyledTitleMenu
								to={`/${planet.name.toLowerCase()}`}
								onClick={() => setIsMenuOpen(false)}
							>
								<StyledPlanetContainer>
									<StyledIconPlanet
										$planet={planet.name.toLowerCase()}
									></StyledIconPlanet>
									<span>{planet.name}</span>
								</StyledPlanetContainer>
								<span>{'>'}</span>
							</StyledTitleMenu>
						</StyledListItem>
					))}
				</ul>
			</StyledMenu>
		</StyledNavBar>
	);
};

export default NavBar;
