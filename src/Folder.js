import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList() {
  const classes = useStyles();

  const folderData = [
    {
      title: "Vet Tix",
      subtitle: "Deploy the future",
      imageUrl: "https://static-cdn.vettix.org/images/hd/design/vettix-twitter-card.jpg",
      href: "https://www.vettix.org/"
    },
    {
      title: "Outward Bound",
      subtitle: "Free Outdoor adventures",
      imageUrl: "https://www.outwardbound.org/media/images/ob-fb-logo-2.png",
      href: "https://www.outwardbound.org/course-finder/?age=&programs%5B%5D=108"
    }
  ];

  const listFolderItems = folderData.map((data, index) =>
    <ListItem key={index}>
      <ListItemAvatar>
        <Avatar>
          <a href={data.href} target="_blank" rel="noopener noreferrer">
            <Avatar alt={data.title} src={data.imageUrl} />
          </a>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={data.title} secondary="Jan 9, 2014" />
    </ListItem>
  )

  return (
    <List className={classes.root}>
      {listFolderItems}
    </List>
  );
}
