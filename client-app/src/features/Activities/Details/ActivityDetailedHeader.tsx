import { observer } from 'mobx-react-lite';
import React from 'react'
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {Activity} from "../../../app/models/activity";

const activityImageStyle = {
    filter: 'brightness(30%)'
};

const activityImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    activity: Activity
}

export default observer (function ActivityDetailedHeader({activity}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${activity.category}.jpg`} fluid style={activityImageStyle}/>
                <Segment style={activityImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={activity.title}
                                    style={{color: 'white'}}
                                />
                                <p>{activity.date}</p>
                                <p>
                                    هاست شده توسط<strong> ادمین</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>پیوستن به فعالیت</Button>
                <Button>لغو حضور</Button>
                <Button color='orange' floated='right'>
                    مدیریت رویداد
                </Button>
            </Segment>
        </Segment.Group>
    )
})