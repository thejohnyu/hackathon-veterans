import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: 800,
    // width: "100%",
    // maxWidth: "36ch",
    borderColor: "#ff0000",
    backgroundColor: theme.palette.background.paper,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inline: {
    display: "inline",
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const newData = [
    {
      title: "Resource 1",
      subtitle: "I'm pretty cool",
      imageUrl: "http://image.com",
      upvote: 512,
    },
    {
      title: "Resource 1",
      subtitle: "I'm pretty cool",
      imageUrl: "http://image.com",
      upvote: 512,
    },
    {
      title: "Resource 1",
      subtitle: "I'm pretty cool",
      imageUrl: "http://image.com",
      upvote: 512,
    },
    {
      title: "Resource 1",
      subtitle: "I'm pretty cool",
      imageUrl: "http://image.com",
      upvote: 512,
    },
    {
      title: "Resource 1",
      subtitle: "I'm pretty cool",
      imageUrl: "http://image.com",
      upvote: 512,
    },
  ];

  const listItems = newData.map((cur) => 
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={cur.subtitle}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
  )

  return (
    <Card className={classes.root}>
      <List className={classes.root}>
        {listItems}
      </List>
    </Card>
  );
}
