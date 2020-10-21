import React, { useEffect, useState } from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import CardItem from "./CardItem/CardItem"
import axios from "axios";

const useStyles = makeStyles({
  gridContainer: {
    padding: '20px 100px'
  }
})


const CardItems: React.FC = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([] as any[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .then(() => setLoading(false))
  }, [setUsers]);

  return (
    <React.Fragment>
    {loading ? (<p>It's loading...</p>) : (
      <Grid container className={classes.gridContainer}>
        {
          users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <CardItem {...user}/>
            </Grid>
          ))
        }
      </Grid>
    )}
    </React.Fragment>
  )
}

export default CardItems;