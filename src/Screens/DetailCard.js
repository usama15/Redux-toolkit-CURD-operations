import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {useLocation } from 'react-router-dom' 


export default function DetailCard(props) {
    const location = useLocation()

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
                        <Card sx={{ minWidth: 375, marginTop: 2 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {location?.state?.detail?.cardType}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {location?.state?.detail?.cardnumber}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {location?.state?.detail?.firstName} {location?.state?.detail?.lastName}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {location?.state?.detail?.description} 
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
            </Box>
        </Container>

    );
}