import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActions, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useCallback, useEffect, useState } from 'react';
import { useUser } from '../../users/providers/UserProvider';
import PropTypes from 'prop-types';

export default function CardsActionBar({handleDelete, handleEdit, handleLike, id, likedTrips, tripIds}) {
    const {user} = useUser();
    const [isLikedTrue, setIsLikedTrue] = useState(false);
    const isAdmin = user?.isAdmin === 'True'

    const showLike = useCallback(()=>{
        setIsLikedTrue(tripIds.includes(id))
    },[setIsLikedTrue, id, tripIds])

    useEffect(() => {
        showLike();
    }, [showLike, id]);


    return (
        <div>
            <>
                <CardActions sx={{paddingTop: 0, justifyContent: "space-between"}}>
                    <Box>
                        {user && isAdmin && (
                            <>
                                <IconButton aria-label='Delete Button' onClick={() => (handleDelete(id))}>
                                    <DeleteIcon/>
                                </IconButton>
                                <IconButton aria-label='Create Button' onClick={()=>(handleEdit(id))}>
                                    <CreateIcon/>
                                </IconButton>
                            </>
                        )}
                    </Box>
                    <Box>
                        { user && !isAdmin && (
                            <>
                                <IconButton aria-label='Add To Favorites Button' 
                                    onClick={() => (handleLike(id))}
                                    style={{ color: isLikedTrue? 'red' : 'inherit' }}
                                >
                                    <FavoriteIcon />
                                </IconButton>
                            </>
                        )}
                    </Box>
                </CardActions>
            </>
        </div>
    )
}

CardsActionBar.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleLike: PropTypes.func.isRequired,
    likedTrips: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
  };