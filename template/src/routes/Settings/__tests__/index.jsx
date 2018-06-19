import Helmet from 'preact-helmet';
import render from 'preact-render-spy';
import Settings from '../index';

describe('<Settings />', () => {
	test('<Settings /> matches snapshot', () => {
		expect(render(<Settings />)).toMatchSnapshot();
		expect(Helmet.peek()).toMatchSnapshot();
	});
});
