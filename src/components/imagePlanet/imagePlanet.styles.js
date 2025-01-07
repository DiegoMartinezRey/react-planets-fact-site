import styled from 'styled-components';

const StyledPlanetImgContainer = styled.div`
	width: 100%;
	height: 304px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (width>767px) {
		grid-area: 1 / 1 / 2 / 3;
		height: 460px;
	}

	@media screen and (width>1023px) {
		grid-area: 1 / 1 / 2 / 2;
		height: 754px;
	}
`;

const StyledPlanetImgGroup = styled.div`
	width: ${({ $size }) => $size.mobile};
	height: ${({ $size }) => $size.mobile};
	position: relative;

	@media screen and (width>767px) {
		width: ${({ $size }) => $size.tablet};
		height: ${({ $size }) => $size.tablet};
	}

	@media screen and (width>1023px) {
		width: ${({ $size }) => $size.desktop};
		height: ${({ $size }) => $size.desktop};
	}
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

	@media screen and (width>767px) {
		width: 102px;
		top: calc(50% + 51px);
		left: calc(50% - 51px);
	}

	@media screen and (width>1023px) {
		width: 163px;
		top: calc(50% + 82px);
		left: calc(50% - 82px);
	}
`;

export {
	StyledPlanetGeology,
	StyledPlanetImg,
	StyledPlanetImgContainer,
	StyledPlanetImgGroup
};
