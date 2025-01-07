import styled from 'styled-components';

const StyledInfoGroupContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const StyledInfoContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 13px 48px;
	border: 1px solid rgba(255, 255, 255, 0.5);
`;

const StyledInfoTitle = styled.span`
	color: rgba(255, 255, 255, 0.5);
	font-size: 8pt;
`;

const StyledInfoContent = styled.span`
	font-family: 'Antonio', serif;
	font-size: 20pt;
`;

export {
	StyledInfoContainer,
	StyledInfoContent,
	StyledInfoGroupContainer,
	StyledInfoTitle
};
