import React, { Fragment, useEffect, useState } from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/Activities/Dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {

  const{activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])



if(activityStore.loadingInitial) return<LoadingComponent content='loading application'/>

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop : '7em'}}>
        <ActivityDashboard/>
      </Container>
    </Fragment>
  );
}

export default observer(App);
