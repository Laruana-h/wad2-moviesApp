
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HouseIcon from "@material-ui/icons/House";
import { border } from "polished";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  bord:{
    margin: 10,

  }
  
}));

const ActorDetails = ({ actor }) => {  // Don't miss this!
  const classes = useStyles();


  return (
    <>
      <Typography variant="h5" component="h3" align="center">
      Biography
      </Typography>

      <Typography variant="h9" component="p" className={classes.bord}>
        {actor.biography}
      </Typography>
      <Paper component="ul" className={classes.root}>
        <Chip icon={<CalendarIcon  />} label={`Birthday: ${actor.birthday} `} />
        <Chip
          icon={<HouseIcon  />}
          label={`Hometown: ${actor.place_of_birth}`}
        />

        {/* <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} /> */}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Known for Department" className={classes.chip} color="primary" />
        </li>
        
          <li >
            <Chip label={`${actor.known_for_department}`} className={classes.chip} />
          </li>
        
      </Paper>

    </>
  );
};
export default  ActorDetails ;