import { Message } from "semantic-ui-react";

interface Props{
    error: string[] | null;
     
}

export default function ValidationErrors({error} : Props){
    return(
        <Message error>
            {error && (
            <Message.List>
                {error.map((err:any, i)=>(
                    <Message.Item key={i}>
                        {err}
                    </Message.Item>
                ))}
            </Message.List>)}
        </Message>
    )
} 