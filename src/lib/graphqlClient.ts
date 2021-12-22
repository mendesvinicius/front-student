import { GraphQLClient } from "graphql-request";

export default new GraphQLClient(process.env.REACT_APP_API_URL || ``);
