import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

const ActivatePage = () => {
    const {request, error, clearError} = useHttp()
    const message = useMessage()
    const params = useParams()

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const activate = async () => {
        const data =await request(
            '/api/activate/' + params.link,
            'GET',
            null,
            {}
        )
        message(data.message)
    }

    return (
        <div className={"container"} style={{minHeight: "65vh"}}>
            <h1>Активація акаунта</h1>
            <h5><Link to={'auth'} onClick={activate}>Aктивувати</Link></h5>
        </div>
    );
};

export default ActivatePage;