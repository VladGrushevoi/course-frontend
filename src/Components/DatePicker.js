import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '2em',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  const handleChange = (e) =>{
    props.getDate(e.target.value)
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Дата кінц. бронювання"
        type="date"
        defaultValue={new Date().toJSON().slice(0,10).replace(/-/g,'-')}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event)=> handleChange(event)}
      />
    </form>
  );
}