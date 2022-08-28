import { fetchQuery, graphql } from "react-relay";
import { initEnvironment } from "../relay/relayEnvironment";

import type { InferGetStaticPropsType } from "next";
import type { pages_index_MarketplaceListings_Query } from "../__generated__/pages_index_MarketplaceListings_Query.graphql";

export default function Home({
  marketplaceListings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <ul>
        {marketplaceListings?.edges?.map(({ node }) => (
          <li key={node.id}>
            <div>App name: {node.app?.name}</div>
            <div>Description: {node.fullDescription}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const query = graphql`
  query pages_index_MarketplaceListings_Query($first: Int) {
    marketplaceListings(first: $first) {
      edges {
        node {
          id
          app {
            name
          }
          fullDescription
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  const environment = initEnvironment();
  try {
    const queryProps = await fetchQuery<pages_index_MarketplaceListings_Query>(
      environment,
      query,
      {
        first: 20,
      }
    ).toPromise();
    const initialRecords = environment.getStore().getSource().toJSON();

    return {
      props: {
        ...queryProps,
        initialRecords,
      },
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
};
