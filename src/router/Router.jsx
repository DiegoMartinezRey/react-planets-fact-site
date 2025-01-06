import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Planet from '../pages/planet/Planet';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/mercury' element={<Planet planet='mercury' />} />
			<Route path='/venus' element={<Planet planet='venus' />} />
			<Route path='/earth' element={<Planet planet='earth' />} />
			<Route path='/mars' element={<Planet planet='mars' />} />
			<Route path='/jupiter' element={<Planet planet='jupiter' />} />
			<Route path='/saturn' element={<Planet planet='saturn' />} />
			<Route path='/uranus' element={<Planet planet='uranus' />} />
			<Route path='/neptune' element={<Planet planet='neptune' />} />
			<Route path='*' element={<Planet planet='' />} />
		</Routes>
	);
};

export default Router;
