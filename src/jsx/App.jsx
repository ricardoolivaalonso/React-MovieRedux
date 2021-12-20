
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AsideSection } from "./01-sections/AsideSection"
import { FormSection } from "./01-sections/FormSection"
import { MoviesSection } from "./01-sections/MoviesSection"
import { BannerSection } from './01-sections/BannerSection'
import { FavoritesSection } from "./01-sections/FavoritesSection"

const App = () => {

	return(
		<Router>
			<div className="container">
				<AsideSection />

				<main className="main">
					<Switch>
						<Route path="/" exact>
							<div className="movies">
								<FormSection />
								<BannerSection />
								<MoviesSection />
							</div>
						</Route>
						<Route path="/favorites" exact>
							<div className="movies">
								<FavoritesSection />
							</div>
						</Route>
					</Switch>	
				</main>

			</div>
		</Router>
	)
}

export default App;
