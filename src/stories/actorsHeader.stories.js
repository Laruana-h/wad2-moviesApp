import React from "react";
import ActorsHeader from "../components/headerActorList";
import { MemoryRouter } from "react-router";
import ActorsContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/ActorPageHeader",
  component: ActorsHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ActorsContextProvider>{Story()}</ActorsContextProvider>,
  ],
};

export const Basic = () => <ActorsHeader title="Discover Actors" />;

Basic.storyName = "Default";
