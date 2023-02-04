import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloConfig = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  
})

export default apolloConfig;
