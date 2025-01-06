import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<GlobalStyles />
				<NavBar />
				<Router />
			</BrowserRouter>
		</div>
	);
};

export default App;
