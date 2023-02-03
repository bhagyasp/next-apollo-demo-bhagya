import Link from 'next/link'
import Name from '../components/Name'
import WithApollo from '../lib/with-apollo'

const User = () => {
    return (
        <div>
            User details
            <br/><br/>
            <Link href="/">Go Back</Link>
            <br></br>
            <Name />
        </div>
    )
}
export default WithApollo(User);
