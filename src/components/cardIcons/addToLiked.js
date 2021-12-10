import React, { useContext } from "react";
import { ActorsContext } from "../../contexts/actorsContext";
import IconButton from "@material-ui/core/IconButton";
import StarsIcon from '@material-ui/icons/Stars';

const AddToLikedIcon = ({ actor }) => {
  const context = useContext(ActorsContext);

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