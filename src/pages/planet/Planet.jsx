import { useState } from 'react';
import ImagePlanet from '../../components/imagePlanet/ImagePlanet';
import InfoPlanet from '../../components/infoPlanet/InfoPlanet';
import TabPlanet from '../../components/tabPlanet/TabPlanet';
import { PLANETS_INFO } from '../../constants/planets-info';
import {
	StyledContentContainer,
	StyledOverviewText,
	StyledPlanet,
	StyledTextContainer,
	StyledTitle
} from './planet.style';

const Planet = ({ planet }) => {
	const [activeTab, setActiveTab] = useState(0);

	const planetData = PLANETS_INFO.find(
		p => p.name.toLowerCase() === planet.toLowerCase()
	);

	if (!planetData)
		return (
			<StyledPlanet>
				<p>Planeta no encontrado</p>
			</StyledPlanet>
		);

	return (
		<StyledPlanet>
			<TabPlanet
				planetData={planetData}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>

			<StyledContentContainer>
				<ImagePlanet planetData={planetData} activeTab={activeTab} />

				<StyledTextContainer>
					<StyledTitle>{planetData.name}</StyledTitle>
					<StyledOverviewText>{planetData.overview.content}</StyledOverviewText>
					<p>
						Source: <a href={planetData.overview.source}>Wikipedia</a>
					</p>
				</StyledTextContainer>

				<InfoPlanet planetData={planetData} />
			</StyledContentContainer>
		</StyledPlanet>
	);
};

export default Planet;
