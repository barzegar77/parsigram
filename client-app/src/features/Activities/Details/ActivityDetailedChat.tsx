import { observer } from 'mobx-react-lite'
import React from 'react'
import {Segment, Header, Comment, Form, Button} from 'semantic-ui-react'

export default observer(function ActivityDetailedChat() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{border: 'none'}}
            >
                <Header>درباره این رویداد گپ بزنید</Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>علی</Comment.Author>
                            <Comment.Metadata>
                                <div>امروز 5:34 ب.ظ</div>
                            </Comment.Metadata>
                            <Comment.Text>چقدر هنری!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>پاسخ</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>رضا محمدی</Comment.Author>
                            <Comment.Metadata>
                                <div>5 روز پیش</div>
                            </Comment.Metadata>
                            <Comment.Text>رفیق، این فوق العاده است. خیلی ممنون</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>پاسخ</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea/>
                        <Button
                            content='ایجاد پاسخ'
                            labelPosition='left'
                            icon='edit'
                            primary
                        />
                    </Form>
                </Comment.Group>
            </Segment>
        </>

    )
})