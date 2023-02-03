import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

const Component = ({ data }) => (
  <Box 
    sx={{
          display: "flex",
          justifyContent: "center" ,
          gap: "20px",
          flexWrap: "wrap",
          margin: "auto",
          width: "90vw",
      }}
  >
      {data.list.map((listItem) => (
        <Card  
          sx={{ 
            maxWidth: 345, 
            minWidth:345,
            height:180, 
            margin:2
            }}
        >
            <CardContent key={listItem.index}>
              <Typography gutterBottom variant="h5" component="div">
                {listItem.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email : {listItem.email}<br></br>
                Phone : {listItem.phone}<br></br>
                Address : {listItem.address}
              </Typography>
            </CardContent>
          
        </Card>
      ))
      }
      </Box>
  )
  

const query = gql`
{
   list {
    name
    email
    phone
    country
    city
    street
    address
    address1
    address2
    state
    building_number
  }
}
`
export default graphql(query)(Component)
