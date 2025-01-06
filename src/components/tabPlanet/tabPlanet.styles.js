import styled from 'styled-components';

const StyledMenuContent = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const StyledMenuTitle = styled.span`
	font-size: 20px;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	gap: 17px;

	&:hover {
		background-color: #38384f;
		cursor: pointer;
	}
`;

const StyledOverviewSelect = styled.div`
	width: 100%;
	height: 4px;
	background-color: ${({ $select, $color }) =>
		$select === 0 ? `${$color}` : 'transparent'};
`;
const StyledStructureSelect = styled.div`
	width: 100%;
	height: 4px;
	background-color: ${({ $select, $color }) =>
		$select === 1 ? `${$color}` : 'transparent'};
`;
const StyledSurfaceSelect = styled.div`
	width: 100%;
	height: 4px;
	background-color: ${({ $select, $color }) =>
		$select === 2 ? `${$color}` : 'transparent'};
`;

export {
	StyledMenuContent,
	StyledMenuTitle,
	StyledOverviewSelect,
	StyledStructureSelect,
	StyledSurfaceSelect
};
