import {
	StyledInfoContainer,
	StyledInfoContent,
	StyledInfoGroupContainer,
	StyledInfoTitle
} from './infoPlanet.styles';

const InfoPlanet = ({ planetData }) => {
	return (
		<StyledInfoGroupContainer>
			<StyledInfoContainer>
				<StyledInfoTitle>ROTATION TIME</StyledInfoTitle>
				<StyledInfoContent>{planetData.rotation}</StyledInfoContent>
			</StyledInfoContainer>
			<StyledInfoContainer>
				<StyledInfoTitle>REVOLUTION TIME</StyledInfoTitle>
				<StyledInfoContent>{planetData.revolution}</StyledInfoContent>
			</StyledInfoContainer>
			<StyledInfoContainer>
				<StyledInfoTitle>RADIUS</StyledInfoTitle>
				<StyledInfoContent>{planetData.radius}</StyledInfoContent>
			</StyledInfoContainer>
			<StyledInfoContainer>
				<StyledInfoTitle>AVERAGE TEMP.</StyledInfoTitle>
				<StyledInfoContent>{planetData.temperature}</StyledInfoContent>
			</StyledInfoContainer>
		</StyledInfoGroupContainer>
	);
};

export default InfoPlanet;
