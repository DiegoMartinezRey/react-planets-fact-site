import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<NavBar />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
