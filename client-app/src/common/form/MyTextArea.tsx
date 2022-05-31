import {  useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";
import { StringMappingType } from "typescript";

interface Props{
    placeholder : string;
    name: string;
    rows: number;
    lable?: string;
}

export default function MyTextArea(props : Props){
    const[field,meta] = useField(props.name);
    return(
        <Form.Field error={meta.touched && !!meta.error}>
<label>{props.lable}</label>
<textarea {...field} {...props}></textarea>
{meta.touched && meta.error?(
    <Label basic color="red">{meta.error}</Label>
): null}
        </Form.Field>
    )
}