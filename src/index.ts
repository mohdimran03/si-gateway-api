// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from '@apollo/server/standalone'
// import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import express from 'express'

// const gateway = new ApolloGateway({
//     supergraphSdl: new IntrospectAndCompose({
//       subgraphs: [
//           // List of federation-capable GraphQL endpoints...
//          //{ name: "user-service", url: "http://localhost:4001/graphql" }
//       ],
//     }),
//   });
  
//   const server = new ApolloServer({ gateway });
  
//   // Note the top-level await!
//   const { url } = await startStandaloneServer(server);
//   console.log(`🚀  Server ready at ${url}`);
  
let app = express();

app.listen(3001,()=> {
  console.log('server is running on port 3000')
})