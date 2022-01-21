import { useEffect, useState } from "react";
import IpButton from "./components/IpButton";
import { apiKey } from "./utils/apiKey";
import IpMessage from "./components/IpMessage";
import Collapse from "react-bootstrap/Collapse";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { emptyData } from "./utils/emptyIpData";
import IpMap from "./components/IpMap";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  const [ipData, setIpData] = useState(emptyData);
  const [open, setOpen] = useState(false);

  const countryCode = ipData.location.country.toLocaleLowerCase();

  const toggleOpen = () => setOpen((prev) => !prev);

  const getData = async () => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}`
    );
    const data = await response.json();
    setIpData(data);
  };

  useEffect(() => getData(), []);

  return (
    <Container className="my-5" fluid>
      <Row className="justify-content-md-center">
        <Col className="text-center" xs={2}>
          <IpButton toggleOpen={toggleOpen} />
          <Collapse in={open}>
            <div id="ip-message">
              <IpMessage {...ipData} />
            </div>
          </Collapse>
        </Col>
        <Col xs={4}>
          {countryCode && (
            <CountryInfo ipCountry={countryCode.toLocaleUpperCase()} />
          )}
        </Col>
      </Row>
      <Row className="mt-4 justify-content-md-center">
        <Col xs={6}>{ipData.location.lat !== 0 && <IpMap {...ipData} />}</Col>
      </Row>
    </Container>
  );
};

export default App;
