import { useQuery } from "@apollo/client";
import { client, LIST_COUNTRIES } from "../utils/apolloClient";

let userCountry;

const CountryInfo = ({ ipCountry }) => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  if (data.countries) {
    userCountry = data.countries.filter(
      (country) => country.code === ipCountry
    );
  }

  console.log(userCountry[0]);

  return (
    <div>
      <p>name: {userCountry[0].name}</p>
      <p>currency: {userCountry[0].currency}</p>
      <p>native: {userCountry[0].native}</p>
      <p>
        languages:{" "}
        <ul>
          {userCountry[0].languages.map((lang) => (
            <li>{lang.name}</li>
          ))}
        </ul>
      </p>
      <p>capital: {userCountry[0].capital}</p>
      <p>emoji: {userCountry[0].emoji}</p>
    </div>
  );
};

export default CountryInfo;
