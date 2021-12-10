import { withRouter } from "react-router-dom"
import React from "react";
import PageTemplate from "../components/templatePersonPage";
import useActor from "../hooks/useActor";
//w未改完
const ActorPage = props => {
  const { id } = props.match.params;
  const [person] = useActor(id)
  return (
    <>
    {person ?  (
        <>
          <PageTemplate person={person}>
            
          </PageTemplate>
       </>
    )
    : 
    (
        <p>Waiting for person details </p>
    )
    }
    </>
  );
};

export default withRouter(ActorPage);