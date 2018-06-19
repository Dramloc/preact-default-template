import { Link } from 'preact-router/match';
import manifest from '../../manifest.json';
import style from './style';

const AppNavigationLink = props => (
	<Link
		className={style.AppNavigation_Link}
		activeClassName={style.AppNavigation_Link__active}
		{...props}
	/>
);

export const AppNavigation = () => (
	<header className={style.AppNavigation}>
		<h1>{manifest.name}</h1>
		<nav>
			<AppNavigationLink href="/">
				<i class="material-icons">home</i>
				<span>Home</span>
			</AppNavigationLink>
			<AppNavigationLink href="/settings">
				<i class="material-icons">settings</i>
				<span>Settings</span>
			</AppNavigationLink>
		</nav>
	</header>
);
