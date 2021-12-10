import React from "react";  // useState/useEffect redundant 
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import img from '../../images/IMG_1618.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 845,
    backgroundColor: "#BABABA",
    // maxHeight:600,
    maxWidth: 345,
  },
 
  media: { height: 300 },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterActorsCard(props) {
  const classes = useStyles();



  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };
  const handlesortinChange = e => {
    var kind = document.getElementById("sortin");
    var myoption=kind.options[kind.selectedIndex].getAttribute('on');
    if(myoption==='1'){
      handleChange(e, "ASC", e.target.value);
      
    }else if(myoption==='2'){
      handleChange(e, "DESC", e.target.value);
    }

  };
  return (
    <Card   className={classes.root} variant="outlined"
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
       <CardContent>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      {/* <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search interested actors "
        inputProps={{ 'aria-label': 'search actors' }}
        value={props.titleFilter}
      /> */}
       <TextField
          className={classes.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={handleTextChange}
        />
      <IconButton  sx={{ p: '10px' }} aria-label="search" onChange={handleTextChange}>
        <SearchIcon />
      </IconButton>
      Sorted by Popularity:
        <FormControlLabel control={<Checkbox color="success" />}  onChange={handlesortinChange}/>
        <select id="sortin" onChange={handlesortinChange}>
            {<option on="1" value="false">ASC</option>}
            {<option on="2" value="true">DESC</option>}
            
          </select>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={img}
        title="Filter"
      />
    <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="medium" />
          Find your interested Actors.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}