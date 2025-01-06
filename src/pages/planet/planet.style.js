import styled from 'styled-components';

const StyledPlanet = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 24px;
`;

const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledTitle = styled.h1`
	font-size: 40px;
`;

const StyledOverviewText = styled.p`
	font-size: 11px;
	line-height: 22px;
`;

export { StyledOverviewText, StyledPlanet, StyledTextContainer, StyledTitle };
