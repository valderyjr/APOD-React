import Header from 'components/Header'
import Footer from 'components/Footer'
import PaginaPrincipal from 'pages/PaginaPrincipal';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
	return (
		<Router>
			<Header/>
				<Routes>
					<Route path='/' element= {<PaginaPrincipal />}>

					</Route>
				</Routes>
			<Footer />
		</Router>
	)
}

export default AppRouter;