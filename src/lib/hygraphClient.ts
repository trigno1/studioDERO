import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://ap-south-1.cdn.hygraph.com/content/cmggglcpv00n807uvfqrgvmz7/master';

export const hygraphClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_CONTENT_API_KEY}`,
  },
});
