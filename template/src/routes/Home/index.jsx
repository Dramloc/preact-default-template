import Helmet from 'preact-helmet';
import { Page } from '../../components/Page';

const Home = () => (
	<Page>
		<Helmet title="Home" />
		<h1 className="mdc-typography--headline4">Home</h1>
		<p className="mdc-typography--body1">This is the Home component.</p>
		<p className="mdc-typography--body1">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat ultricies
			nisl, at sagittis tellus semper nec. Aliquam eu laoreet nisi, et fermentum justo. Aenean ac
			velit id leo rutrum aliquet posuere quis mauris. Maecenas pharetra lectus accumsan, luctus
			magna ac, maximus velit. Proin pulvinar justo ac justo maximus, non lacinia lorem molestie.
			Nulla et nibh ac sem laoreet aliquam. Donec quis tellus maximus, vehicula turpis vitae,
			dapibus augue. Ut molestie tortor libero, at interdum odio aliquam facilisis. Nunc vel luctus
			sem.
		</p>
		<p className="mdc-typography--body1">
			Praesent hendrerit purus et nunc commodo euismod. Fusce molestie ut tortor ut luctus. Nulla
			tincidunt ipsum at laoreet maximus. Nulla iaculis dapibus placerat. Donec et orci tortor.
			Mauris in lacus ex. Quisque volutpat justo in consectetur consectetur. Lorem ipsum dolor sit
			amet, consectetur adipiscing elit. In ultrices nulla at lacinia lacinia. Quisque congue
			commodo quam in elementum. Mauris non eros ac ex congue luctus. Integer malesuada congue
			congue.
		</p>
		Praesent gravida augue id felis fermentum auctor. Pellentesque eget consectetur metus. Quisque
		gravida nibh eu lectus venenatis, id viverra augue scelerisque. In sodales urna odio, ac
		convallis mi laoreet in. Nullam id aliquet purus, ut malesuada dolor. Morbi sed ultrices magna.
		In convallis congue metus non auctor. Mauris pulvinar felis sit amet lorem viverra egestas. Cras
		pellentesque, augue in tincidunt pulvinar, erat orci consequat orci, sit amet tristique velit
		velit ut lorem. Sed faucibus placerat congue. Suspendisse sit amet viverra diam, at eleifend
		magna. Etiam malesuada consequat magna at maximus. Nulla neque dolor, dictum a lectus eu, ornare
		dignissim nulla. Vivamus vitae orci et magna interdum vulputate. Morbi quis interdum eros.
		<p className="mdc-typography--body1">
			Nullam efficitur ultricies massa non pharetra. Class aptent taciti sociosqu ad litora torquent
			per conubia nostra, per inceptos himenaeos. Ut volutpat, risus eget facilisis viverra, nisi
			sapien aliquam urna, id lobortis magna ex eget nunc. Integer auctor laoreet ligula, quis
			mollis lectus dictum a. Duis vehicula dolor eu nunc sollicitudin, ut malesuada ex convallis.
			Morbi porttitor, elit quis varius tristique, felis nulla accumsan elit, vel imperdiet magna
			ligula eu lorem. In in nunc quis ligula convallis molestie. Nullam lacus velit, molestie in
			bibendum eu, viverra et risus. Aliquam erat volutpat. Donec nec neque id eros dignissim
			laoreet vel quis felis. Aliquam tincidunt dolor et sagittis accumsan. Sed ornare pretium
			malesuada. Phasellus eu risus quis neque consequat faucibus nec sed augue.
		</p>
		<p className="mdc-typography--body1">
			Duis felis nunc, dignissim eu urna quis, bibendum pulvinar tortor. Donec mattis eu nulla non
			cursus. Nulla dapibus ornare faucibus. Cras varius diam et velit volutpat, vitae fermentum
			neque hendrerit. Proin ullamcorper libero massa, rhoncus fermentum mi commodo vel. Integer
			luctus, neque nec ullamcorper accumsan, arcu urna aliquam dolor, viverra tristique neque neque
			vel orci. Nunc placerat magna vel urna vestibulum ultricies.
		</p>
	</Page>
);

export default Home;
