
import React, { useState } from 'react';
import {Button, Header, Segment} from "semantic-ui-react";
import axios from 'axios';
import ValidationErrors from './ValidationErrors';

export default function TestErrors() {
    const baseUrl = 'http://localhost:5000/'
    const [errors, setError] = useState(null);

    function handleNotFound() {
        axios.get(baseUrl + 'buggy/not-found').catch(err => console.log(err.response));
    }

    function handleBadRequest() {
        axios.get(baseUrl + 'buggy/bad-request').catch(err => console.log(err.response));
    }

    function handleServerError() {
        axios.get(baseUrl + 'buggy/server-error').catch(err => console.log(err.response));
    }

    function handleUnauthorised() {
        axios.get(baseUrl + 'buggy/unauthorised').catch(err => console.log(err.response));
    }

    function handleBadGuid() {
        axios.get(baseUrl + 'activities/notaguid').catch(err => console.log(err));
    }

    function handleValidationError() {
        axios.post(baseUrl + 'activities', {}).catch(err => setError(err));
    }

    return (
        <>
            <Header as='h1' content='تست ارور کامپوننت' />
            <Segment>
                <Button.Group widths='7'>
                    <Button onClick={handleNotFound} content='یافت نشد' basic primary />
                    <Button onClick={handleBadRequest} content='درخواست بد' basic primary />
                    <Button onClick={handleValidationError} content='ارور اعتبارسنجی' basic primary />
                    <Button onClick={handleServerError} content='ارور سرور' basic primary />
                    <Button onClick={handleUnauthorised} content='غیرمجاز' basic primary />
                    <Button onClick={handleBadGuid} content='راهنمای بد' basic primary />
                </Button.Group>
            </Segment>
            {errors &&
            <ValidationErrors error={errors}/>
            }
        </>
    )
}
