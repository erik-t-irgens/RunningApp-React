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

export default function EventCreation() {
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
                <h1>Create Event</h1>
                <form className={classes.container} noValidate autoComplete="on">
                    <TextField
                        required
                        id="outlined-required"
                        label="Event Title"
                        className={classes.textField}
                        value={values.eventtitle}
                        onChange={handleChange('eventtitle')}
                        margin="normal"
                        variant="outlined"
                    />
                    
                    <TextField
                        id="outlined-textarea"
                        label="Description"
                        style={{ margin: 8 }}
                        fullWidth
                        placeholder="Description"
                        multiline
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Image URL"
                        style={{ margin: 8 }}
                        placeholder="https://picsum.photos/200/300/?blur=5"
                        helperText="URL to image for the event"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button variant="outlined" color="primary" className={classes.button} >
                        Create
                    </Button>
                </form>
            </DetailsCard>
        </div>
    )
};