import Header from './components/Header'
import Footer from './components/Footer'
import PaginaPrincipal from './pages/Home/PaginaPrincipal';
import PaginaDoDia from './pages/DoDia/DoDia';
import EscolhaData from './pages/EscolhaData';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
	return (
		<Router>
			<Header/>
				<Routes>
					<Route path='/' element= {<PaginaPrincipal />}/>
					<Route path='/dia' element= {<PaginaDoDia />}/>
					<Route path='/data' element= {<EscolhaData />}/>
				</Routes>
			<Footer />
		</Router>
	)
}

export default AppRouter;