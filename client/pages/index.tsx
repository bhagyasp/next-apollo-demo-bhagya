import Link from 'next/link'
import NameComponent from '../components/Name'
import ApolloConfig from '../lib/with-apollo'
import { ApolloProvider } from '@apollo/client'

const Page = () => (
  <div>
    Welcome, <ApolloProvider client={ApolloConfig}><NameComponent /></ApolloProvider>
    <br/><br/>
    <Link href="/about">About</Link>
    <br/><br/>
    <Link href="/user">User List</Link>
  </div>
)

export default Page;
