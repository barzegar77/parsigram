import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { generatePath, Link, useParams } from "react-router-dom";
import { Button, Card, Grid, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";


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
    
      <Grid>
        <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity}/>
        <ActivityDetailedInfo activity={activity}/>
        <ActivityDetailedChat/>
        </Grid.Column>
        <Grid.Column width={6}>
          <ActivityDetailedSidebar/>
          </Grid.Column>
      </Grid>
    
    
      
    )
})