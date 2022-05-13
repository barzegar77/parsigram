import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound(){
    return(
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                ما همه جا رو نگاه کردیم ولی چیزی پیدا نکردیم
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary>
                    به فعالیت ها برگرد
                </Button>
            </Segment.Inline>
        </Segment>
    )
}