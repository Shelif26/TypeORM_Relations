import { ApolloServer } from "apollo-server-express";
import express from "express";
import { UserData } from "./Resources/Datasource";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./graphql/typedef";
import { resolvers } from "./graphql/resolver";

const app = express();

let apolloServer: any;

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

async function startServer() {
  apolloServer = new ApolloServer({
    schema: schema,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();

UserData.initialize()
  .then(() =>
    console.log("<-------------DB established successfully------------>")
  )
  .catch((err) => console.log(err));

app.listen(5050, () => {
  console.log("Running in : localhost:5050/graphql");
});
