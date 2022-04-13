import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams , useNavigate, Link, generatePath } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import {v4 as uuid} from 'uuid';


export default observer( function ActivityForm(){
const navigate = useNavigate();
const{activityStore} =useStore();
const{selectedActivity, createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
const{id} = useParams<{id:string}>();

const [activity , setActivity] = useState({
    id : '',
    title : '',
    category : '',
    description : '',
    date: '',
    city: '',
    venue: ''
});

useEffect(()=>{
    if(id) loadActivity(id).then(activity=> setActivity(activity!))
}, [id, loadActivity])


if(loadingInitial) return<LoadingComponent content="بارگزاری فعالیت"/>
    

    function handleSubmit(){
        if(activity.id.length === 0){
            let newActivity = { 
                ...activity,
                id: uuid()
            }
            createActivity(newActivity).then(()=> navigate(`/activities/${newActivity.id}`))
        }else{
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }

    function handleInputChange(event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement >){
        const {name , value} = event.target;
        setActivity({...activity , [name] : value})
    }


    let activities = generatePath('/activities');

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplate='off'>
                <Form.Input placeholder='عنوان' value={activity.title} name='title' onChange={handleInputChange}/>
                <Form.TextArea placeholder='توضیحات' value={activity.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='دسته بندی' value={activity.category} name='category' onChange={handleInputChange} />
                <Form.Input type='date' placeholder='تاریخ' value={activity.date} name='date' onChange={handleInputChange} />
                <Form.Input placeholder='شهر' value={activity.city} name='city' onChange={handleInputChange} />
                <Form.Input placeholder='منطقه' value={activity.venue} name='venue' onChange={handleInputChange} />
                <Button loading={loading}  floated='right' positive type='submit' content='ارسال' />
                <Button as={Link} to={activities} floated='right' type='button' content='لغو' />
            </Form>
        </Segment>
    )
})