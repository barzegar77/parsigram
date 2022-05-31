import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams , useNavigate, Link, generatePath } from "react-router-dom";
import { Button, FormField, Header, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../common/form/MyTextInput";
import MyTextArea from "../../../common/form/MyTextArea";
import MySelectInput from "../../../common/form/MySelectInput";
import { categoryOptions } from "../../../common/options/categoryOptions";
import MyDateInput from "../../../common/form/MyDateInpute";
import { Activity } from "../../../app/models/activity";
import {v4 as uuid} from 'uuid';


export default observer( function ActivityForm(){
const navigate = useNavigate();
const{activityStore} =useStore();
const{selectedActivity, createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
const{id} = useParams<{id:string}>();

const [activity , setActivity] = useState<Activity>({
    id : '',
    title : '',
    category : '',
    description : '',
    date: null,
    city: '',
    venue: ''
});

const validationSchema = Yup.object({
    title : Yup.string().required("عنوان فعالیت اجباری است"),
    category : Yup.string().required("دسته فعالیت اجباری است"),
    description : Yup.string().required("توضیحات فعالیت اجباری است"),
    date : Yup.string().required("تاریخ فعالیت اجباری است"),
    city : Yup.string().required("شهر فعالیت اجباری است"),
    venue : Yup.string().required("منطقه فعالیت اجباری است")


})

useEffect(()=>{
    if(id) loadActivity(id).then(activity=> setActivity(activity!))
}, [id, loadActivity])


if(loadingInitial) return<LoadingComponent content="بارگزاری فعالیت"/>
    

    function handleFormSubmit(activity : Activity){
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



    let activities = generatePath('/activities');

    return(
        <Segment clearing>
            <Formik 
            validationSchema={validationSchema}
            enableReinitialize 
            initialValues={activity} 
            onSubmit={ values => handleFormSubmit(values)}>
                {({handleSubmit}) =>
                    <Form className='ui fluid form' onSubmit={handleSubmit}>
                        <Header content='جزییات فعالیت' sub color='teal'/>
                    <MyTextInput placeholder='عنوان' name='title'/>
                       <MyTextArea rows={3} placeholder='توضیحات'  name='description' />
                       <MySelectInput options={categoryOptions} placeholder='دسته بندی' name='category' />
                       <MyDateInput 
                       placeholderText='تاریخ' 
                       name='date'
                       showTimeSelect
                       timeCaption="time"
                       dateFormat='MMMM d, yyyy h:mm aa' 
                       />
                                               <Header content='جزییات مکان' sub color='teal'/>
                       <MyTextInput placeholder='شهر' name='city'  />
                       <MyTextInput placeholder='منطقه'  name='venue' />
                       <Button loading={loading}  floated='right' positive type='submit' content='ارسال' />
                       <Button as={Link} to={activities} floated='right' type='button' content='لغو' />
                   </Form>
                }
                </Formik>
     
        </Segment>
    )
})