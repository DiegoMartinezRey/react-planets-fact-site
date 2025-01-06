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
				<span>Overview</span>
				<StyledOverviewSelect $select={activeTab} $color={planetData.color} />
			</StyledMenuTitle>
			<StyledMenuTitle onClick={() => setActiveTab(1)}>
				<span>Structure</span>
				<StyledStructureSelect $select={activeTab} $color={planetData.color} />
			</StyledMenuTitle>
			<StyledMenuTitle onClick={() => setActiveTab(2)}>
				<span>Surface</span>
				<StyledSurfaceSelect $select={activeTab} $color={planetData.color} />
			</StyledMenuTitle>
		</StyledMenuContent>
	);
};

export default TabPlanet;
