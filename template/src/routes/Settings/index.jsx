import Helmet from 'preact-helmet';
import { Page } from '../../components/Page';

const Settings = () => (
	<Page>
		<Helmet title="Settings" />
		<h1 className="mdc-typography--headline4">Settings</h1>
		<p className="mdc-typography--body1">This is the Settings component.</p>
	</Page>
);

export default Settings;
