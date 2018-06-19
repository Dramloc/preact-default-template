import cx from 'classnames';
import Helmet from 'preact-helmet';
import { Router } from 'preact-router';
import manifest from '../../manifest.json';
import Home from '../../routes/Home';
import Settings from '../../routes/Settings';
import { AppNavigation } from '../AppNavigation';
import style from './style';

export const App = () => (
	<div className={cx('mdc-typography', style.App)}>
		<Helmet
			htmlAttributes={{ lang: 'en' }}
			defaultTitle={manifest.name}
			titleTemplate={`%s – ${manifest.name}`}
			titleAttributes={{ itemprop: 'name' }}
		/>

		<AppNavigation />
		<Router>
			<Home path="/" />
			<Settings path="/settings" />
		</Router>
	</div>
);
