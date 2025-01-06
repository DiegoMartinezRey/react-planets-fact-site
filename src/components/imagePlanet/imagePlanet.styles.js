import styled from 'styled-components';

const StyledPlanetImgContainer = styled.div`
	width: 100%;
	height: 304px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledPlanetImgGroup = styled.div`
	width: ${({ $size }) => $size.mobile};
	height: ${({ $size }) => $size.mobile};
	position: relative;
`;

const StyledPlanetImg = styled.img`
	width: 100%;
	height: 100%;
`;

const StyledPlanetGeology = styled.img`
	position: absolute;
	width: 62px;
	top: calc(50% + 31px);
	left: calc(50% - 31px);
`;

export {
	StyledPlanetGeology,
	StyledPlanetImg,
	StyledPlanetImgContainer,
	StyledPlanetImgGroup
};
