import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import {format} from 'date-fns';

interface Props{
    activity : Activity;
}

export default function ActivityListItem({activity}: Props){

    const{activityStore} = useStore();
    const{deleteActivity,activitiesByDate, loading} = activityStore;

const[target, setTarget] = useState('');


function handleActivityDelete(e:SyntheticEvent<HTMLButtonElement>, id:string){
    setTarget(e.currentTarget.name);
    deleteActivity(id);
}

    return(

        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png'/>
                        <Item.Content>
                            <Item.Header as={Link} to={activity.id}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>هاست شده توسط ادمین</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock"/>{format(activity.date! , 'dd MMM yyyy h:mm aa')}
                    <Icon name='marker'/>{activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                بیشتر ببینید
            </Segment>
            <Segment>
                <span>{activity.description}</span>
                <Button
                as={Link}
                to={activity.id}
                color='teal'
                floated="right"
                content="جزئیات بیشتر"/>

            </Segment>
        </Segment.Group>
    )
}