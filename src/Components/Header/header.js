import {AppBar, Toolbar, makeStyles, IconButton, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./header.css";
import "./hexagon.css"
import React from "react";
import "tachyons";
import "../../font.css";



const styles = makeStyles (
    {

    root:{
        display:"flex",
        justifyContent:"space-between" 
            }, 
    header:{
        backgroundImage: "linear-gradient(to right, white , #616161)",
        color: "black",
        boxShadow: "0px 0px 0px 0px",
        }, 
    typography:{
    display:"flex",
    "align-self": "center"
    }, 
    text:{
        display:"flex",
        color:"#ffffff",
        textStyle:"bold"
    
    }
    }
)

const Header = () => {
    const classes = styles();

    const desktop = () => {
        return(
            <Toolbar className={classes.root}>
                    <div className="hexagon"/>
                    <IconButton edge="start" className={classes.button} color="#3f3f3f" aria-label="menu">
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                    <div className={classes.text}>
                    <h1 className="mytext" >
                    Joao Valle
                    </h1>
                    </div>

            </Toolbar>
        )
    };

    return(
        <header>
            <AppBar className={classes.header}>{desktop()}</AppBar>

        </header>
    )
}

export default Header;