import axios from "axios";
import type { Variables } from "relay-runtime";

export const fetchGraphQL = async (query: string, variables: Variables) => {
  const response = await axios.post(
    "https://api.github.com/graphql",
    { query, variables },
    {
      headers: {
        Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    }
  );

  return response.data;
};
