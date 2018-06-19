import Helmet from 'preact-helmet';
import render from 'preact-render-spy';
import Home from '../index';

describe('<Home />', () => {
	test('<Home /> matches snapshot', () => {
		expect(render(<Home />)).toMatchSnapshot();
		expect(Helmet.peek()).toMatchSnapshot();
	});
});
