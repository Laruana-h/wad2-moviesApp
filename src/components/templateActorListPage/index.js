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
//   const [genreFilter, setGenreFilter] = useState("0");
//   const genreId = Number(genreFilter);

  let displayedActors = actors
  console.log(actors);
    // .filter((a) => {
    //   return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    // })
    // .filter((m) => {
    //   return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    // });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
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
            // genreFilter={genreFilter}
          />
        </Grid>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;