import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import { selectCardList,removeCard } from '../Store/Reducer/CardReducer';


export default function ViewCard(props) {
    const [card, setCard] = useState([])
    const cards = useSelector(selectCardList)
    const Dispatch = useDispatch()
    useEffect(() => {
        setCard(cards)
    }, [cards])
    console.log(card)
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Grid container spacing={2}>
                    {card?.map((item, index) => (
                        <Card sx={{ minWidth: 375, marginTop: 2 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {item.cardType}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {item.cardnumber}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {item.firstName} {item.lastName}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => Dispatch(removeCard(item.id))}
                                    size="small">Delete Card</Button>
                                <Button onClick={() => props.history.push({ pathname: '/DetailCard', state: { detail: item } })}
                                    size="small">View Detail</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Grid>
            </Box>
        </Container>

    );
}