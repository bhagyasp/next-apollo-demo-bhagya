import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import NameDetails from '../components/NameDetails'
import ApolloConfig from '../lib/with-apollo'
import { ApolloProvider } from '@apollo/client'
import { useState } from 'react'

const User = () => {
    const [loadMore, setLoadMore] = useState(false);
    
    const handleLoadMore = (value) => {
       setLoadMore(value);
    }
    
    return (
        <Box>
            <Typography variant="h5" component="div">
                User details
            </Typography>            
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "right" ,
                    gap: "20px",
                    flexWrap: "wrap",
                    margin: "auto",
                    width: "90vw",
                }}
            >
                <Link href="/"><Button variant="contained">Go Back</Button></Link>
                <Button
                variant="contained"
                onClick={handleLoadMore}
                >Load More</Button>
            </Box>
           <ApolloProvider client={ApolloConfig}><NameDetails handleLoadMore={handleLoadMore} ></NameDetails></ApolloProvider>
        </Box>
    )
}
export default User;
