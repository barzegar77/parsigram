import { Container, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";

export default function ServerError(){
    const{commonStore} = useStore();
    return(
        <Container>
            <Header as='h1' content='ارور سرور'/>
            <Header sub as='h5' color="red" content={commonStore.error?.message} />
            <Segment>
                <Header as='h4' content='ردیابی استک'/>
                <code style={{marginTop:'10px'}}>
                    {commonStore.error?.details}
                </code>
            </Segment>
        </Container>

    )
}