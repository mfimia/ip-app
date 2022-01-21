import Card from "react-bootstrap/Card";

const IpMessage = ({ ...ipData }) => {
  const { ip, isp, location, as } = ipData;
  const { country, region, timezone } = location;
  const { domain, type } = as;

  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Title>{ip}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {region}, {country} ({timezone} GMT)
        </Card.Subtitle>
        <Card.Text>
          {isp} ({type})
        </Card.Text>
        <Card.Link href={domain}>{domain}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default IpMessage;
