import React from "react";  // useState/useEffect redundant 
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 845,
    backgroundColor: "#BABABA",
    maxHeight:400,
  },
 

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterActorsCard(props) {
  const classes = useStyles();
  // const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }
  // const genres = data.genres;
  // if (genres[0].name !== "All"){
  //   genres.unshift({ id: "0", name: "All" });
  // }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  // const handleGenreChange = (e) => {
  //   handleChange(e, "genre", e.target.value);
  // };

  return (
    <Card   className={classes.root} variant="outlined"
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
       <CardContent>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search interested actors "
        inputProps={{ 'aria-label': 'search actors' }}
      />
      <IconButton  sx={{ p: '10px' }} aria-label="search" onChange={handleTextChange}>
        <SearchIcon />
      </IconButton>
      Sorted by Popularity:
        <FormControlLabel control={<Checkbox color="success"/>}  />
        
      </CardContent>


    </Card>
  );
}