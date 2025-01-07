import styled from 'styled-components';

const StyledMenuContent = styled.div`
	padding: 24px 24px 0 24px;
	display: flex;
	justify-content: space-between;
	width: 100%;
	position: relative;

	&::after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: rgba(255, 255, 255, 0.2);
		position: absolute;
		left: 0;
		bottom: 0;
	}
`;

const StyledMenuTitle = styled.span`
	font-size: 9pt;
	letter-spacing: 1.93px;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	gap: 17px;

	&:hover {
		cursor: pointer;
	}
`;

const StyledOverviewSelect = styled.div`
	width: 100%;
	height: 4px;
	background-color: ${({ $select, $color }) =>
		$select === 0 ? `${$color}` : 'transparent'};
	transition: background-color 0.3s ease;
`;
const StyledStructureSelect = styled.div`
	width: 100%;
	height: 4px;
	background-color: ${({ $select, $color }) =>
		$select === 1 ? `${$color}` : 'transparent'};
	transition: background-color 0.3s ease;
`;
const StyledSurfaceSelect = styled.div`
	width: 100%;
	height: 4px;
	background-color: ${({ $select, $color }) =>
		$select === 2 ? `${$color}` : 'transparent'};
	transition: background-color 0.3s ease;
`;

export {
	StyledMenuContent,
	StyledMenuTitle,
	StyledOverviewSelect,
	StyledStructureSelect,
	StyledSurfaceSelect
};
