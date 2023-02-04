import {nameQuery} from '../queries/Queries'
import { useQuery } from '@apollo/client'

const NameComponent = () => {
	const {loading, data, error} = useQuery(nameQuery, {
        variables:{
            offset:0,
            limit:1
        }
    })
	return	(
		<span>
			{loading? '..' : data.list[0].name}
		</span>
	)
}

export default NameComponent;
