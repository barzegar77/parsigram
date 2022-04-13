import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { generatePath, Link, useParams } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";


export default observer( function ActivityDetails(){

  const{activityStore} = useStore();
  const{selectedActivity : activity , loadActivity , loadingInitial } = activityStore;
  const{id} = useParams<{id : string}>();




  useEffect(()=>{
    if(id) loadActivity(id);
  }, [id, loadActivity])

if(loadingInitial || !activity) return <LoadingComponent />

let img = generatePath("/assets/categoryImages/:image", {"image": `${activity.category}.jpg`}); 

    return(
        <Card fluid>
        <Image src={img} />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span >{activity.date}</span>
          </Card.Meta>
          <Card.Description>
            {activity.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
         <Button.Group widths='2'>
             <Button as={Link} to={`/manage/${activity.id}`} basic color='blue' content='ویراش'/>
             <Button as={Link} to='/activities'  basic color='grey' content='لغو'/>
         </Button.Group>
        </Card.Content>
      </Card>
    )
})