import { Map, Marker } from "pigeon-maps";

const IpMap = ({ ...ipData }) => {
  const { location } = ipData;
  const { lat, lng } = location;

  return (
    <Map height={300} width={600} defaultCenter={[lat, lng]} defaultZoom={11}>
      <Marker width={50} anchor={[lat, lng]} />
    </Map>
  );
};

export default IpMap;
