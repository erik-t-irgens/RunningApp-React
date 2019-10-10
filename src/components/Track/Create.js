import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MapView from '../Map';
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

export default function TrackCreation() {
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
                <h1>Create Track</h1>
                <form className={classes.container} noValidate autoComplete="on">
                    <TextField
                        required
                        id="outlined-required"
                        label="Track Title"
                        className={classes.textField}
                        value={values.tracktitle}
                        onChange={handleChange('tracktitle')}
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
                    <MapView></MapView>
                    <Button variant="outlined" color="primary" className={classes.button} >
                        Create
                    </Button>
                </form>
            </DetailsCard>
        </div>
    )
};