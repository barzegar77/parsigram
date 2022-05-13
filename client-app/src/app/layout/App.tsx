import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/Activities/Dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/Activities/Form/ActivityForm';
import ActivityDetails from '../../features/Activities/Details/ActivityDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from './ServerError';

function App() {

function MyLayout(){
  return(
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

  return (
    <Fragment>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <Container style={{marginTop : '7em'}}>
     <Routes>

        <Route path="/" element={<HomePage/>}  />

        <Route element={<MyLayout/>} >
          <Route path="/activities" element={<ActivityDashboard/>} />
          <Route path="/activities/:id" element={<ActivityDetails/>} />
          <Route path="/createActivity" element={<ActivityForm/>} />
          <Route path="/manage/:id" element={<ActivityForm/>} />
          <Route path="/errors" element={<TestErrors/>} />
          <Route path="/server-error" element={<ServerError/>} />
        </Route>

        <Route path='*' element={<NotFound/>}/>
     </Routes>

    

      </Container>
    </Fragment>
  );
}

export default observer(App);
