import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { getRecommendations } from "../../api/tmdb-api";
import { excerpt } from "../../util";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function MovieReviews({ movie }) {
  const classes = useStyles();
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    getRecommendations(movie.id).then((recommend) => {
        setRecommend(recommend);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="similar table">
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell align="center">Overview</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recommend.map((s) => (
            <TableRow key={s.id}>
              <TableCell component="th" scope="row">
                {s.title}
              </TableCell>
              <TableCell >{excerpt(s.overview)}</TableCell>
              <TableCell >
                <Link
                  to={{
                    pathname: `/movies/${s.id}`,
                    state: {
                      review: s,
                      movie: movie,
                    },
                  }}
                >
                  Full Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}