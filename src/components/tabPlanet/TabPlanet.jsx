import {
	StyledMenuContent,
	StyledMenuTitle,
	StyledOverviewSelect,
	StyledStructureSelect,
	StyledSurfaceSelect
} from './tabPlanet.styles';

const TabPlanet = ({ planetData, activeTab, setActiveTab }) => {
	return (
		<StyledMenuContent>
			<StyledMenuTitle onClick={() => setActiveTab(0)}>
				<span>OVERVIEW</span>
				<StyledOverviewSelect $select={activeTab} $color={planetData.color} />
			</StyledMenuTitle>
			<StyledMenuTitle onClick={() => setActiveTab(1)}>
				<span>STRUCTURE</span>
				<StyledStructureSelect $select={activeTab} $color={planetData.color} />
			</StyledMenuTitle>
			<StyledMenuTitle onClick={() => setActiveTab(2)}>
				<span>SURFACE</span>
				<StyledSurfaceSelect $select={activeTab} $color={planetData.color} />
			</StyledMenuTitle>
		</StyledMenuContent>
	);
};

export default TabPlanet;
