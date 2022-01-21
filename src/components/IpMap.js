import { Map, Marker } from "pigeon-maps";
import { Card } from "react-bootstrap";

const IpMap = ({ ...ipData }) => {
  const { location } = ipData;
  const { lat, lng } = location;

  return (
    <Card.Body>
      <Map height={360} defaultCenter={[lat, lng]} defaultZoom={11}>
        <Marker width={50} anchor={[lat, lng]} />
      </Map>
    </Card.Body>
  );
};

export default IpMap;
