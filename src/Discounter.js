import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        padding: "15px;"
    },
}));

export default function DiscountList() {
    const classes = useStyles();

    const discountData = [
        {
            title: "Lowes",
            subtitle: "10% purchase online and in-store",
            imageUrl: "https://www.logotaglines.com/wp-content/uploads/2020/04/Lowes-logo-tagline-slogan-1200x1161.jpg",
            href: "https://www.lowes.com/"
        },
        {
            title: "Applebee's",
            subtitle: "Free meal on Veterans Day, 10% everyday",
            imageUrl: "https://visitduboiscounty.com/wp-content/uploads/2012/10/Applebees-Logo.jpg",
            href: "https://www.applesbees.com"
        },
        {
            title: "Nike",
            subtitle: "10% purchase",
            imageUrl: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            href: "https://www.nike.com"
        },
        {
            title: "Navy Federal: RealtyPlus Program",
            subtitle: "Cashback when using partnered realtors",
            imageUrl: "https://pbs.twimg.com/profile_images/963505271728427011/XoP8-Xam_400x400.jpg",
            href: "https://realestateperk.com/RealtyPlus/"
        },
    ];

    const discountDataItems = discountData.map((data, index) =>
        <List className={classes.root} key={index}>
            <ListItem>
                <ListItemAvatar>
                    <a href={data.href} target="_blank" rel="noopener noreferrer">
                        <Avatar alt={data.title} src={data.imageUrl} />
                    </a>
                </ListItemAvatar>
                <ListItemText primary={data.title} secondary={data.subtitle} />
            </ListItem>
        </List>
    )

    return (
        <div>
            <h3>Veteran Discounts Near You</h3>
            {discountDataItems}
        </div>
    );
}