import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '../../Button/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    textAlign: "center",
    alignItems:"center",
    justifyContent:"center"
  },
  avatar: {
    backgroundColor: 'gray',
    margin: 'auto',
    fontSize: '50px',
    color: 'black',
    height: 150,
    width: 150,
  },
  userName: {
    color: 'gray',
    fontStyle: "oblique",
    paddingBottom: '20px',
  },
  name: {
    fontWeight: 700,
  },
  website: {
    paddingBottom: '40px'
  }
}));

type CardItemProps = {
  name: string,
  username: string,
  website: string,
  id: number
}

const CardItem: React.FC<CardItemProps> = ({name, username, website, id}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name[0]}
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant="h6" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="caption" display="block" className={classes.userName}>
          @{username}
        </Typography>
        <Typography variant="caption" display="block" className={classes.website}>
          <a href={"https://" + website} target="_blank">{"https://" + website}</a>
        </Typography>
        <Button id={id}/>
      </CardContent>
    </Card>
  );
}

export default CardItem;