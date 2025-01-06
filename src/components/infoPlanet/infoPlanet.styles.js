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
	border: 1px solid #d8d8d8;
`;

const StyledInfoTitle = styled.span`
	font-size: 8px;
`;

const StyledInfoContent = styled.span`
	font-size: 20px;
`;

export {
	StyledInfoContainer,
	StyledInfoContent,
	StyledInfoGroupContainer,
	StyledInfoTitle
};
