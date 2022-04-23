import React from "react";
import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters(){
    return(
        <>
        <Menu vertical size="large" style={{width:'100%'}}>
            <Header icon="filter" attached color="teal" content='فیلترها' />
            <Menu.Item content='همه فعالیت ها'/>
            <Menu.Item content='شرکت کردم'/>
            <Menu.Item content='میزبانی کردم'/>
        </Menu>
        <Header />
        <Calendar />
        </>
    )
}