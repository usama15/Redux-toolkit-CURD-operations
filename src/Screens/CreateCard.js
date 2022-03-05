import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { saveCard, selectCardList } from '../Store/Reducer/CardReducer';
const theme = createTheme();


export default function CreateCard() {
    const [card, setCard] = React.useState('');

    const handleChange = (event) => {
        setCard(event.target.value);
    };
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch(saveCard({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            cardnumber: data.get('cardnumber'),
            description: data.get('description'),
            cardType: card,
            id: Date.now()
        }))
    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    required
                                    fullWidth
                                    name="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="cardnumber"
                                    label="Card Number"
                                />
                            </Grid>
                            <Grid item sx={{ minWidth: 220 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Membership Tier</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="select"
                                        value={card}
                                        label="Age"
                                        name='select'
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'Gold'}>Gold</MenuItem>
                                        <MenuItem value={'Silver'}>Silver</MenuItem>
                                        <MenuItem value={'Platinum '}>Platinum </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    multiline
                                    required
                                    name='description'
                                    rows={5}
                                    fullWidth
                                    label="Description of the user"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Card
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
