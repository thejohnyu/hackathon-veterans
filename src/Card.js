import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Vote from "./Vote";
import { Chip } from "@material-ui/core";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderColor: "#ff0000",
    marginBottom: "2rem",
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
  butpos:{
    float:"right",
    marginBottom: "15px"
  }
}));

export default function SimpleCard() {
  const classes = useStyles();
  let newData = [
    {
      title: "Team Rubicon: Disaster Response",
      subtitle: "Disaster Response",
      imageUrl: "https://teamrubiconusa.org/app/uploads/2018/05/cropped-favicon.png",
      upvote: 512,
      href: "https://teamrubiconusa.org/",
      tags: ["volunteer"]
    },
    {
      title: "Operation Code",
      subtitle: "Deploy the future",
      imageUrl: "https://pbs.twimg.com/profile_images/820688452039614465/QOOekCzS_400x400.jpg",
      upvote: 512,
      href: "https://operationcode.org/",
      tags: ["technology"]
    },
    {
      title: "Wounded Warrior Project",
      subtitle: "Offers a variety of programs, services and events for wounded veterans.",
      imageUrl: "https://www.woundedwarriorproject.org/media/txmlqlcd/wwp_logo_black.png",
      upvote: 512,
      href: "https://www.woundedwarriorproject.org/",
      tags: ["charity", "medical", "therapy", "counseling"]
    },
    {
      title: "Vet Tec",
      subtitle: "Veteran Employment Through Technology",
      imageUrl: "https://www.benefits.va.gov/GIBILL/images/FGIB/VetTec_Logo.PNG",
      upvote: 512,
      href: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/",
      tags: ["career", "technology"]
    },
    {
      title: "Bastards Canteen",
      subtitle: "Down-home joint dishing up dogs, burgers & brews in casual digs with military-themed decor.",
      imageUrl: "https://bastardscanteen.com/wp-content/uploads/2020/11/Chicken-Sandwich.jpg",
      upvote: 512,
      href: "https://bastardscanteen.com/",
      tags: ["restaurant", "veteran owned", "beer"]
    },
    {
      title: "Vets2Industry",
      subtitle: "PEOPLE FIRST, VETERANS AND THEIR FAMILIES ALWAYS",
      imageUrl: "https://vets2industry.com/wp-content/uploads/2019/02/Untitled-2-e1576790485230.png",
      upvote: 512,
      href: "https://vets2industry.com/ ",
      tags: ["career", "spouse"]
    },
    {
      title: "Save A Warrior",
      subtitle: "Provides an innovative and effective \"war detox\" program for Warriors suffering from Post Traumatic Stress.",
      imageUrl: "https://static1.squarespace.com/static/5494a4e8e4b0d7d16a2b3486/t/5cb62f819b747a56b311fe7a/1607100564006/?format=1500w",
      upvote: 512,
      href: "https://saveawarrior.org/home ",
      tags: ["suicide prevention", "counseling", "holistic service", "post-traumatic stress"]
    },
    {
      title: "FourBlock",
      subtitle: "Veteran Career Readiness",
      imageUrl: "data:image/jpeg;base64,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",
      upvote: 512,
      href: "https://fourblock.org/",
      tags: ["career", "networking"]
    },
    {
      title: "Wreaths across America",
      subtitle: "Wreaths Across America coordinates wreath-laying ceremonies at more than 2,100 locations across the United States, at sea and abroad",
      imageUrl: "https://cdn11.bigcommerce.com/s-x8kcwz9kod/stencil/cb36b3c0-0015-0139-4088-0242ac11000c/e/dbb68ea0-1290-0137-c403-06715e5dd399/img/sponsorimg.jpg",
      upvote: 512,
      href: "https://donate.wreathsacrossamerica.org/",
      tags: ["volunteer", "memorial", "fundraising"]
    },
    {
      title: "Oplign",
      subtitle: "Where Opportunities Align",
      imageUrl: "https://i.vimeocdn.com/portrait/38627916_120x120.jpg",
      upvote: 512,
      href: "http://oplign.com/",
      tags: ["career", "spouse"]
    },
    {
      title: "Veterati",
      subtitle: "America's mentoring network for the military",
      imageUrl: "https://pbs.twimg.com/profile_images/662354554768498688/JYaeAgU5_400x400.png",
      upvote: 512,
      href: "https://www.veterati.com/",
      tags: ["mentorship", "career"]
    },
    {
      title: "Save The Brave",
      subtitle: "To Connect Veterans Through Outreach Programs To Build Strength of Character",
      imageUrl: "https://savethebrave.org/wp-content/uploads/2017/05/STB-LOGO-L.jpg",
      upvote: 512,
      href: "https://savethebrave.org/",
      tags: ["mentorship", "nonprofit", "support network", "stress management"]
    },
    {
      title: "Heroes and Horses",
      subtitle: "The H&H program inspires veterans to move beyond the difficulties experience from years of war, towards of life of restoration and hope.",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5d543e7f3b4c5600017d9eab/1602008753983-MSNDIF4EN2WMDM3M5SUK/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/TY1A8109+%281%29.jpg?format=750w",
      upvote: 512,
      href: "https://www.heroesandhorses.org/",
      tags: ["adventure", "educational", "volunteer", "teamwork"]
    },
    

  ];

  const [datas, setDatas] = React.useState(newData);


  const searchResources = (searchTerm) => {
    let newResources = [];
    for (var i = 0; i < newData.length; i++) {
      if (newData[i].tags.includes(searchTerm)) {
        newResources.push(newData[i]);
      }
    }

    setDatas(newData = newResources);
  };

  const clearData = () => {
    setDatas(newData = newData);
  }

  const listItems = datas.map((cur, index) =>

    <Card className={classes.root} key={index}>
      <List>
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <a href={cur.href} target="_blank" rel="noopener noreferrer">
              <Avatar alt={cur.title} src={cur.imageUrl} />
            </a>
          </ListItemAvatar>
          <ListItemText
            primary={cur.title}
            secondary={
              <React.Fragment>
                {cur.subtitle}
                <br></br><br></br>
                {cur.tags.map((tag) => {
                  return <Chip label={tag} key={tag} color="primary" onClick={() => searchResources(tag)}></Chip>
                })}
              </React.Fragment>
            }
          />
          <Vote />
        </ListItem>
      </List>
    </Card>
  )

  return (

    <div><h3>Benefits and Resources</h3>
      <Button variant="contained" color="secondary" onClick={() => clearData()} className={classes.butpos}>
        Clear
      </Button>
      {listItems}</div>
  );
}
