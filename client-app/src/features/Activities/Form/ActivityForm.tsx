import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";


export default observer( function ActivityForm(){

const{activityStore} =useStore();
const{selectedActivity,closeForm, createActivity, updateActivity, loading} = activityStore;

    const initialState = selectedActivity ?? {
        id : '',
        title : '',
        category : '',
        description : '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity , setActivity] = useState(initialState);

    function handleSubmit(){
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement >){
        const {name , value} = event.target;
        setActivity({...activity , [name] : value})
    }

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
                <Button onClick={closeForm} floated='right' type='button' content='لغو' />
            </Form>
        </Segment>
    )
})