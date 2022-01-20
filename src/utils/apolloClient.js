import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

// write a GraphQL query that asks for names and codes for all countries
export const LIST_COUNTRIES = gql`
  {
    countries {
      name
      native
      capital
      emoji
      currency
      code
      languages {
        code
        name
      }
    }
  }
`;
