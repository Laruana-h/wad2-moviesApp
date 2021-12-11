import React from 'react';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BookIcon from "@material-ui/icons/Book";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FaceRetouchingNaturalRoundedIcon from '@material-ui/icons/FaceRounded';
import PageviewIcon from '@material-ui/icons/Pageview';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
  
});

export function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
         <ListItem>
           <ListItemIcon><FavoriteBorderIcon/> </ListItemIcon>
           <Link to="/movies/favorites">Favorite Movies</Link>
           <ListItemText/>
         </ListItem>
         <ListItem>
           <ListItemIcon><BookIcon/> </ListItemIcon>
           <Link to="/movies/playlist">Play List</Link>
           <ListItemText />
         </ListItem>
      </List>
     
      <Divider/>
      <List>
         <ListItem>
           <ListItemIcon><FaceRetouchingNaturalRoundedIcon/></ListItemIcon>
           <Link to="/actors">Popular Actors</Link>
           <ListItemText />
         </ListItem>
      </List>
      <List>
         <ListItem>
           <ListItemIcon><FavoriteBorderOutlinedIcon/></ListItemIcon>
           <Link to="/actors/liked">Liked Actors</Link>
           <ListItemText />
         </ListItem>
      </List>
      <Divider/>
      <List>
         <ListItem>
           <ListItemIcon><HomeRoundedIcon/></ListItemIcon>
           <Link to="/login">Login</Link>
           <ListItemText />
         </ListItem>
      </List>
      <List>
         <ListItem>
           <ListItemIcon><PageviewIcon/></ListItemIcon>
           <Link to="/tv">Search TV</Link>
           <ListItemText />
         </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <IconButton><MenuOpenIcon/>
        <nav className={classes.title}></nav>
      {(["MENU LIST"]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      </IconButton>
    </div>
  );
}

export default withRouter(TemporaryDrawer);

    