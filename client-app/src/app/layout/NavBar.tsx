import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';


export default function NavBar(){

const{activityStore} = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight : '10px'}}/>
                    پارسی گرام
                </Menu.Item>
                <Menu.Item name='فعالیت های اخیر' />
                <Menu.Item>
                    <Button onClick={()=> activityStore.openForm()} positive content='ایجاد فعالیت'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}