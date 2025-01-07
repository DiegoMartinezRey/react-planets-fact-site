import styled from 'styled-components';

const StyledPlanet = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const StyledContentContainer = styled.div`
	padding: 24px;
	display: flex;
	flex-direction: column;

	@media screen and (width>767px) {
	}

	@media screen and (width>1023px) {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, auto);
		grid-column-gap: 100px;
		grid-row-gap: 0px;
		padding: 0 165px;
	}
`;

const StyledChangeInfoContainer = styled.div`
	grid-area: 1 / 2 / 2 / 3;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (width>767px) {
		gap: 69px;
	}

	@media screen and (width>1023px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	@media screen and (width>767px) {
		max-width: 339px;
	}

	@media screen and (width>1023px) {
	}
`;

const StyledTitle = styled.h1`
	font-family: 'Antonio', serif;
	font-size: 40pt;
`;

const StyledOverviewText = styled.p`
	font-size: 11pt;
	font-weight: 300;
	line-height: 22px;
`;

const StyledMenuBig = styled.div`
	display: none;

	@media screen and (width>767px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	@media screen and (width>1023px) {
	}
`;

const StyledOptionInfo = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	gap: 17px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	padding-left: 20px;

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
		cursor: pointer;
	}

	& > span {
		font-size: 9pt;
		letter-spacing: 1.93px;
	}
`;

export {
	StyledChangeInfoContainer,
	StyledContentContainer,
	StyledMenuBig,
	StyledOptionInfo,
	StyledOverviewText,
	StyledPlanet,
	StyledTextContainer,
	StyledTitle
};
