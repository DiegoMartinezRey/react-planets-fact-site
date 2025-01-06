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
				<StyledInfoTitle>Rotation Time</StyledInfoTitle>
				<StyledInfoContent>{planetData.rotation}</StyledInfoContent>
			</StyledInfoContainer>
			<StyledInfoContainer>
				<StyledInfoTitle>Revolution Time</StyledInfoTitle>
				<StyledInfoContent>{planetData.revolution}</StyledInfoContent>
			</StyledInfoContainer>
			<StyledInfoContainer>
				<StyledInfoTitle>Radius</StyledInfoTitle>
				<StyledInfoContent>{planetData.radius}</StyledInfoContent>
			</StyledInfoContainer>
			<StyledInfoContainer>
				<StyledInfoTitle>Average Temp.</StyledInfoTitle>
				<StyledInfoContent>{planetData.temperature}</StyledInfoContent>
			</StyledInfoContainer>
		</StyledInfoGroupContainer>
	);
};

export default InfoPlanet;
