import {gql} from '@apollo/client'

const nameQuery = gql`
query list ($limit:Int!, $offset:Int!){
   list (offset:$offset, limit:$limit){
    name
  }
}
`

const listQuery = gql`
query list ($limit:Int!, $offset:Int!){
   list (offset:$offset, limit:$limit){
    name
    email
    phone
    address
    address1
    address2
    state
    building_number
  }
}`;

export {nameQuery,listQuery};