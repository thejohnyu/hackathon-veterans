import React from "react";
import "./App.css";
import SimpleCard from "./Card";
import PrimarySearchAppBar from "./App-bar";
import PromoterList from "./Promoter";
import DiscountList from "./Discounter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        borderColor: "#ff0000",
        marginBottom: "2rem",
        backgroundColor: theme.palette.background.default,
    },
}));

function MainBody() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <PrimarySearchAppBar />
            <main className="App-main">
                <div className="App-left-column">
                    
                    <SimpleCard />
                </div>
                <div className="App-right-column">
                    <header className="App-sub-header"><h3>Veteran Outreach</h3></header>
                    <PromoterList />
                    <br></br>
                    <DiscountList />
                </div>
            </main>
            <footer className="App-footer"></footer>
        </div>

    );
}

export default MainBody;