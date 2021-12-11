import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const WriteReviewIcon = ({ movie }) => {
  return (
    <Link
      to={{
        pathname: `/reviews/form`,
        state: {
          movieId: movie.id,
        },
      }}
    ><IconButton aria-label="write review" >
      <RateReviewIcon color="primary" fontSize="large" />
      </IconButton>
    </Link>
  );
};

export default WriteReviewIcon;