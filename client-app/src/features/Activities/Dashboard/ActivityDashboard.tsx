import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../Form/ActivityForm";
import ActivityList from "./ActivityList";


export default observer( function ActivityDashboard(){

const{activityStore} = useStore();
const{loadActivities,activityRegistry} = activityStore;

useEffect(() => {
  if(activityRegistry.size <= 1) loadActivities();
}, [activityRegistry.size ,loadActivities])



if(activityStore.loadingInitial) return<LoadingComponent content='بارگزاری پارسی گرام'/>

    return (
        <Grid>
            <Grid.Column width='10'>
              <ActivityList/>
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>فیلترینگ</h2>
            </Grid.Column>
        </Grid>
    )
})