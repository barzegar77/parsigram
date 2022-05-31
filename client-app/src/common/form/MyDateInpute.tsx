import {  useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker , {ReactDatePickerProps} from 'react-datepicker';
import { StringMappingType } from "typescript";
import { values } from "mobx";


export default function MyDateInput(props : Partial<ReactDatePickerProps>){
    const[field,meta,helper] = useField(props.name!);
    return(
        <Form.Field error={meta.touched && !!meta.error}>
<DatePicker
{...field}
{...props}
selected={(field.value && new Date(field.value)) || null}
onChange={value => helper.setValue(value)}
/>
{meta.touched && meta.error?(
    <Label basic color="red">{meta.error}</Label>
): null}
        </Form.Field>
    )
}