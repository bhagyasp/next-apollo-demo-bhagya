import { useQuery } from '@apollo/client'
import {listQuery} from '../queries/Queries'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react';

const NameDetails = ({handleLoadMore, LoadMoreData}) => {
    const limit = 20;
    const [offset, setOffset] = useState(0);
   const {loading, data, error, fetchMore} = useQuery(listQuery, {
        variables:{
            offset,
            limit
        }
    });
    
    useEffect(() => {
        if(LoadMoreData) {
            setOffset(offset+limit);
            fetchMore({
                variables : {
                    limit,
                    offset
                }
            });
            handleLoadMore(!LoadMoreData)
        }
    }, [handleLoadMore, LoadMoreData]);

    return (
    !loading? 
        <Box 
            sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "95vw",
            }}
            data-testID = "nameDetails"
        >
            {data.list.map((listItem) => (
                <Card  
                sx={{ 
                    maxWidth: 332, 
                    minWidth:300,
                    height:150, 
                    margin:2
                    }}
                    data-testID="NameDetailsCard"
                >
                    <CardContent key={listItem.name}>
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
            </Box> :  !error?<Typography data-testID="loadingMsg"> loading</Typography>: <Typography data-testID="errorMsg"> error</Typography>
    )
}

export default NameDetails;

