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
import { Card, Spinner } from "react-bootstrap";

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
    <Container style={{ fontFamily: "Roboto" }} className="mt-4" fluid>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} xl={7}>
          <Card className="bg-dark">
            {ipData.location.lat !== 0 ? (
              <IpMap {...ipData} />
            ) : (
              <Container style={{ height: "90vh" }}>
                <Spinner
                  style={{ position: "absolute", top: "50%", left: "50%" }}
                  animation="border"
                />
              </Container>
            )}
            <Card.Body>
              <Container>
                <Row>
                  <Col className="text-center">
                    <IpButton toggleOpen={toggleOpen} />
                    <Collapse in={open}>
                      <div id="ip-message">
                        <IpMessage {...ipData} />
                      </div>
                    </Collapse>
                  </Col>
                  <Col>
                    {countryCode && (
                      <CountryInfo
                        ipCountry={countryCode.toLocaleUpperCase()}
                      />
                    )}
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
