import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';


export default function NavBar(){


    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight : '10px'}}/>
                    پارسی گرام
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='فعالیت های اخیر' />
                <Menu.Item as={NavLink} to='/createActivity'>
                    <Button positive content='ایجاد فعالیت'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}