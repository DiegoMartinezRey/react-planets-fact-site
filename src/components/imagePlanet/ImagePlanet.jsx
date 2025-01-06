import {
	StyledPlanetGeology,
	StyledPlanetImg,
	StyledPlanetImgContainer,
	StyledPlanetImgGroup
} from './imagePlanet.styles';

const ImagePlanet = ({ planetData, activeTab }) => {
	return (
		<StyledPlanetImgContainer>
			<StyledPlanetImgGroup $size={planetData.planetWidth}>
				{activeTab === 0 && (
					<StyledPlanetImg src={planetData.images.planet} alt='planet' />
				)}
				{activeTab === 1 && (
					<StyledPlanetImg src={planetData.images.internal} alt='planet' />
				)}
				{activeTab === 2 && (
					<>
						<StyledPlanetImg src={planetData.images.planet} alt='planet' />
						<StyledPlanetGeology
							src={planetData.images.geology}
							alt='geology'
						/>
					</>
				)}
			</StyledPlanetImgGroup>
		</StyledPlanetImgContainer>
	);
};

export default ImagePlanet;
