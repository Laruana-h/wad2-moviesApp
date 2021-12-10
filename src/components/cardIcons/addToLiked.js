import React, { useContext } from "react";

import IconButton from "@material-ui/core/IconButton";
import StarsIcon from '@material-ui/icons/Stars';
import { MoviesContext } from "../../contexts/moviesContext";

const AddToLikedIcon = ({ actor }) => {
  const context = useContext(MoviesContext);

  const handleAddToliked = (e) => {
    e.preventDefault();
    context.addToLiked(actor);
    console.log("{ actor }")
  };
  return (
    <IconButton aria-label="add to liked" onClick={handleAddToliked}>
      <StarsIcon  color="primary" fontSize="large"/>
    </IconButton>
  );
};

export default AddToLikedIcon;