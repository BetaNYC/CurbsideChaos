import KeplerGl from 'kepler.gl';

const Map = props => (
  <KeplerGl
    id="curbside_chaos"
    mapboxApiAccessToken={process.env.MAP_BOX_API_KEY}
  />
);