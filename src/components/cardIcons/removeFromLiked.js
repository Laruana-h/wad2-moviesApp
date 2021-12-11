import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromLikedIcon = ({ actor }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromLiked = (e) => {
    e.preventDefault();
    context.removeFromLiked(actor);
  };
  return (
    <IconButton
      aria-label="remove from liked"
      onClick={handleRemoveFromLiked}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromLikedIcon;