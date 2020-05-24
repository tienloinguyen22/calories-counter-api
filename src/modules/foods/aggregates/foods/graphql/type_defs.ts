import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Query {
    foods: QueryFoodsOperations
  }

  type QueryFoodsOperations {
    findById(id: ID!): Food
    find(payload: FindFoodsQuery!): FoodsQueryResult
  }

  type Food {
    id: ID!
    code: String
    title: String
    portionDefault: Int
    portionAmount: Float
    portionName: String
    factor: Float
    increment: Float
    multiplier: Float
    grains: Float
    wholeGrains: Float
    vegetables: Float
    orangeVegetables: Float
    starchyVegetables: Float
    darkGreenVegetables: Float
    otherVegetables: Float
    fruits: Float
    milk: Float
    meats: Float
    dryBeanPeas: Float
    oils: Float
    solidFats: Float
    addedSugars: Float
    alcohol: Float
    calories: Float
    saturatedFats: Float
    createdAt: String
    updatedAt: String
  }

  input FindFoodsQuery {
    filter_textSearch: String
    orderBy: String
    pageIndex: Int
    itemsPerPage: Int
  }

  type FoodsQueryResult {
    data: [Food!]
    pagination: OffsetPaginationResult
  }
`;
