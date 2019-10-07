import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PaceSlider from '../PaceSlider';
import DetailsCard from '../DetailsCard';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: 'white',
    },
    Fab: {
        margin: theme.spacing(1),
        width: "100%",
        color: 'white',
    },
    button: {
        margin: theme.spacing(2),
    },
}));

export default function UserSettings() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        age: '',
        multiline: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
        <div>
            <DetailsCard>
                <h1>Your Profile</h1>
                <form className={classes.container} noValidate autoComplete="on">
                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        className={classes.textField}
                        value={values.firstname}
                        onChange={handleChange('firstname')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        className={classes.textField}
                        value={values.lastname}
                        onChange={handleChange('lastname')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-name"
                        label="Gender"
                        className={classes.textField}
                        value={values.gender}
                        onChange={handleChange('gender')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-number"
                        label="Age"
                        value={values.age}
                        onChange={handleChange('age')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Biography"
                        style={{ margin: 8 }}
                        fullWidth
                        placeholder="Biography"
                        multiline
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <PaceSlider />

                    <TextField
                        id="outlined-full-width"
                        label="Image URL"
                        style={{ margin: 8 }}
                        placeholder="https://picsum.photos/200/300/?blur=5"
                        helperText="Put a URL to an image of yourself!"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button variant="outlined" color="primary" className={classes.button, classes.Fab} >
                        Save
                    </Button>
                </form>
                <Button variant="outlined" color="primary" className={classes.button, classes.Fab} >
                    Back
                    </Button>
            </DetailsCard>
        </div>
    )
}