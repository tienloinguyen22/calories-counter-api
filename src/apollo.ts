import { DocumentNode } from 'graphql';
import { Config } from 'apollo-server-express';

interface ApolloParams {
  typeDefs: DocumentNode[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolvers: any;
}

export const getApolloConfig = ({ typeDefs, resolvers }: ApolloParams): Config => ({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: async () => {
    return {};
  },
});
