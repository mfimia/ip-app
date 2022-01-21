import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { client, LIST_COUNTRIES } from "../utils/apolloClient";
import Image from "react-bootstrap/Image";

let userCountry;

const CountryInfo = ({ ipCountry }) => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  if (loading || error) {
    return (
      <Fragment>
        {error ? <p>error.message</p> : <Spinner animation="border" />}
      </Fragment>
    );
  }

  if (data.countries) {
    userCountry = data.countries.filter(
      (country) => country.code === ipCountry
    );
  }

  const { name, currency, capital, native, languages, emoji } = userCountry[0];

  return (
    <ListGroup>
      <ListGroup.Item>
        Country:{" "}
        {
          <ListGroup className="mt-1">
            <ListGroup.Item>
              {
                <Image
                  thumbnail
                  alt="country flag"
                  src={`https://flagcdn.com/16x12/${ipCountry.toLowerCase()}.png`}
                />
              }{" "}
              {name} {<i>({native})</i>}{" "}
            </ListGroup.Item>
          </ListGroup>
        }
      </ListGroup.Item>
      <ListGroup.Item>
        Capital:{" "}
        {
          <ListGroup className="mt-1">
            <ListGroup.Item>{capital}</ListGroup.Item>
          </ListGroup>
        }
      </ListGroup.Item>
      <ListGroup.Item>
        Language{languages.length > 1 ? "s" : ""}:{" "}
        <ListGroup className="mt-1">
          {languages.map((lang, index) => (
            <ListGroup.Item key={index}>{lang.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item>
        Currency:{" "}
        {
          <ListGroup className="mt-1">
            <ListGroup.Item>{currency}</ListGroup.Item>
          </ListGroup>
        }
      </ListGroup.Item>
      <ListGroup.Item>
        Code:{" "}
        {
          <ListGroup className="mt-1">
            <ListGroup.Item>{emoji}</ListGroup.Item>
          </ListGroup>
        }
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CountryInfo;
