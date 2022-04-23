import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

export default function HomePage(){
    return(
<Segment inverted textAlign="center" vertical className="masthead">
        <Container>
            <Header as='h1' inverted>
                <Image size="massive" src='/assets/logo.png' alt='logo' style={{marginBotton: 12}}/>
                فعالیت ها
            </Header>
            <Header as='h2' inverted content='خوش آمدید'/>
            <Button as={Link} to='/activities' size="huge" inverted>
                مرا به فعالیت ها ببر
                </Button>
        </Container> 
</Segment>
    )
}