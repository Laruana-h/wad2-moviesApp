import React, { useContext } from "react";
import PeoplePageTemplate from '../components/templatePersonListPage'
import {PeopleContext} from '../contexts/peopleContext'
import BlankPersonButton from '../components/buttons/blankPerson.js'


const PopularPeoplePage = () => {
  const context = useContext(PeopleContext);
  
  const people = context.popular.filter((m) => {  // New
    
    return !("popular" in m);
  });

  return (
    <PeoplePageTemplate
      name="Popular People"
      people={people}  /* Changed */
      action={(person) => {
        return <BlankPersonButton person={person} />;
      }}
    />
  );
};

export default PopularPeoplePage;
