import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        padding: "15px;"
    },
}));

export default function PromoterList() {
    const classes = useStyles();

    const promoterData = [
        {
            title: "Veterans Crisis Line",
            subtitle: "Veteran suicide hotline",
            imageUrl: "https://www.veteranscrisisline.net/Content/images/VeteransCrisisLineLogo.png",
            href: "https://www.veteranscrisisline.net/"
        },
        {
            title: "Veteran Experiencing Homelessness",
            subtitle: "",
            imageUrl: "https://www.va.gov/HOMELESS/images/slide-News-and-Updates_500x275.jpg",
            href: "https://www.va.gov/homeless/"
        }
    ];

    const promoterDataItems = promoterData.map((data, index) =>
        <Card className={classes.root} key={index}>
            <CardActionArea>
                <a href={data.href}>
                    <CardMedia
                        component="img"
                        alt={data.title}
                        height="90"
                        image={data.imageUrl}
                        title={data.title}
                        className={classes.root.padding}
                    /></a>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.subtitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
      </Button>
            </CardActions>
        </Card>
    )

    return (
        <div>
            {promoterDataItems}
        </div>
    );
}
