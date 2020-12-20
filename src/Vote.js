import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    border:'1px solid #ddd',
    alignItems:'center'
  },
}));

export default function Vote() {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);

  return (
    <div className={classes.root}>
        
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
             <ArrowDropUp />
          </Button>
          <div>{count}</div>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <ArrowDropDown />
          </Button>
    </div>
  );
}