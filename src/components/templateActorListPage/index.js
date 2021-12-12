import React, { useState } from "react";
import Header from "../headerActorList";
import FilterActorsCard from "../filterActorsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ActorList from "../actorList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function ActorListPageTemplate({ actors, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [sortinFilter, setsortinFilter]=useState(false);
  const [switchOn,setSwitchOn] = useState(true);
//   const [genreFilter, setGenreFilter] = useState("0");
//   const genreId = Number(genreFilter);


  let displayedActors = switchOn?
  actors
    .filter((a) => {
      return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    }):
    actors.filter((a) => {
      return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    }).sort((a, b) => { return a.popularity - b.popularity });
    // .filter((m) => {
    //   return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    // });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);

    else if(type==="ASC"){  setsortinFilter(false)
  }
    else if(type==="DESC") {  
      setsortinFilter(true);
    
    }
    else setSwitchOn(!switchOn);
    // else setGenreFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterActorsCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            onSwitchChange={handleChange}
            sortinFilter={sortinFilter}
            // genreFilter={genreFilter}
          />
        </Grid>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;