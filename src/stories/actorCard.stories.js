import React from "react";
import ActorCard from "../components/actorCard";
import SampleActor from "./sampleActor";
import { MemoryRouter } from "react-router";
import ActorsContextProvider from "../contexts/actorsContext";

import AddToLikedIcon from "../components/cardIcons/addToLiked";

export default {
  title: "Home Page/ActorCard",
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ActorsContextProvider>{Story()}</ActorsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ActorCard
      actor={SampleActor}
      action={(actor) => <AddToLikedIcon  actor={actor} />}
      taging={(actor) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleActor, profile_path: undefined };
  return (
    <ActorCard
      actor={sampleNoPoster}
      action={(actor) => <AddToLikedIcon  actor={actor} />}
      taging={(actor) => null}
    />
  );
};
Exceptional.storyName = "exception";