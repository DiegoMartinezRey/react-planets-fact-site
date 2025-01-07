import styled from 'styled-components';

const StyledInfoGroupContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;

	@media screen and (width>767px) {
		flex-direction: row;
	}

	@media screen and (width>1023px) {
		grid-area: 2 / 1 / 3 / 3;
	}
`;

const StyledInfoContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 13px 48px;
	border: 1px solid rgba(255, 255, 255, 0.5);

	@media screen and (width>767px) {
		flex-direction: column;
		align-items: start;
		gap: 6px;
		padding-top: 16px;
		padding-left: 15px;
	}
`;

const StyledInfoTitle = styled.span`
	display: inline;
	color: rgba(255, 255, 255, 0.5);
	font-size: 8pt;
`;

const StyledInfoContent = styled.span`
	font-family: 'Antonio', serif;
	font-size: 20pt;
	white-space: nowrap;
`;

export {
	StyledInfoContainer,
	StyledInfoContent,
	StyledInfoGroupContainer,
	StyledInfoTitle
};
