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
    console.log(data);
    setIpData(data);
  };

  useEffect(() => getData(), []);

  return (
    <Container className="mt-5" fluid>
      <Row style={{ justifyContent: "center" }}>
        <Col className="text-center" xs={2}>
          <IpButton toggleOpen={toggleOpen} />
          <Collapse in={open}>
            <div id="ip-message">
              <IpMessage {...ipData} />
            </div>
          </Collapse>
          {ipData.location.lat !== 0 && <IpMap {...ipData} />}
          <img
            style={{ width: "32px" }}
            alt="country flag"
            src={`https://flagcdn.com/16x12/${countryCode}.png`}
          />
        </Col>
      </Row>
      {countryCode && (
        <CountryInfo ipCountry={countryCode.toLocaleUpperCase()} />
      )}
    </Container>
  );
};

export default App;
