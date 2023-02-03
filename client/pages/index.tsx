import Link from 'next/link'
//import WithApollo from '../lib/with-apollo'
//import Name from '../components/Name'

const Page = () => (
  <div>
    Welcome, 
    <br/><br/>
    <Link href="/about">About</Link>
    <br/><br/>
    <Link href="/user">User List</Link>
  </div>
)

export default Page
