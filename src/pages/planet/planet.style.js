import styled from 'styled-components';

const StyledPlanet = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const StyledContentContainer = styled.div`
	padding: 24px;
`;

const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
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

export {
	StyledContentContainer,
	StyledOverviewText,
	StyledPlanet,
	StyledTextContainer,
	StyledTitle
};
