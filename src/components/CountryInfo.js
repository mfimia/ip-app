import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { ListGroup } from "react-bootstrap";
import { client, LIST_COUNTRIES } from "../utils/apolloClient";
import Image from "react-bootstrap/Image";
import CountryInfoPlaceholder from "./CountryInfoPlaceholder";
import { listFonts } from "../utils/listFonts";

let userCountry;

const CountryInfo = ({ ipCountry }) => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  if (loading || error) {
    return (
      <Fragment>
        {error ? <p>error.message</p> : <CountryInfoPlaceholder />}
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
      <ListGroup.Item className="text-dark">
        Country:{" "}
        {
          <ListGroup className="mt-1">
            <ListGroup.Item className="text-dark">
              {
                <Image
                  thumbnail
                  alt="country flag"
                  src={`https://flagcdn.com/16x12/${ipCountry.toLowerCase()}.png`}
                />
              }{" "}
              <span style={listFonts}>{name}</span>{" "}
              {<i style={{ fontFamily: "Roboto Slab" }}>({native})</i>}
            </ListGroup.Item>
          </ListGroup>
        }
      </ListGroup.Item>
      <ListGroup.Item className="text-dark">
        Capital:
        {
          <ListGroup className="mt-1">
            <ListGroup.Item className="text-dark">
              <span style={listFonts}>{capital}</span>
            </ListGroup.Item>
          </ListGroup>
        }
      </ListGroup.Item>
      <ListGroup.Item className="text-dark">
        Language{languages.length > 1 ? "s" : ""}:{" "}
        <ListGroup className="mt-1">
          {languages.map((lang, index) => (
            <ListGroup.Item className="text-dark" key={index}>
              <span style={listFonts}>{lang.name}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item className="text-dark">
        Currency:{" "}
        {
          <ListGroup className="mt-1">
            <ListGroup.Item className="text-dark">
              <span style={listFonts}>{currency}</span>
            </ListGroup.Item>
          </ListGroup>
        }
      </ListGroup.Item>
      <ListGroup.Item className="text-dark">
        Code:{" "}
        {
          <ListGroup className="mt-1">
            <ListGroup.Item className="text-dark">
              <span style={listFonts}>{emoji}</span>
            </ListGroup.Item>
          </ListGroup>
        }
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CountryInfo;
