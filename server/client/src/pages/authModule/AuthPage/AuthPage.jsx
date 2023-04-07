import React, {useContext, useEffect, useState} from 'react';

import {useNavigate} from "react-router-dom";
import {useHttp} from "../../../hooks/http.hook";
import {useMessage} from "../../../hooks/message.hook";
import {AuthContext} from "../../../context/authContext";

import logo from "../../../assets/lens_black_24dp.svg"
import classes from "./AuthPage.module.scss"

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const navigate = useNavigate()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        nickname: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            const response = await request('api/auth/login', 'POST', {...form})
            auth.login(response.token, response.user)
            message(response.message)
        } catch (e) {
        }
    }
    return (
        <div style={{backgroundColor: "#2e3e50"}}>
            <div className="row container" >
                <div className="col s6 offset-s3">

                    <h1 className={"center " + classes.title} style={{marginTop: "60px"}}>
                        <span style={{color:"#F2546D"}}>Digital</span>load
                        <img width={60} src={logo} alt="logo"/>
                    </h1>

                    <div className={"card " + classes.myCard}>

                        <div className="card-content white-text">
                            <span className="card-title center"><strong>Авторизація</strong></span>
                            <form>
                                <div className="input-field">
                                    <input id="nickname" type="text" name="nickname" onChange={changeHandler}
                                           className="yellow-input"/>
                                    <label htmlFor="nickname">Логін або пошта</label>
                                </div>
                                <div className="input-field">
                                    <input id="password" type="password" name="password" onChange={changeHandler}
                                           className="yellow-input"
                                    />
                                    <label htmlFor="password">Пароль</label>
                                </div>
                            </form>
                        </div>

                        <div className={"card-action " + classes.bnt_block}>
                            <button
                                className={"btn white"}
                                style={{marginRight: 10, color: "black"}}
                                onClick={loginHandler}
                                disabled={loading}
                            >
                                Увійти
                            </button>
                            <button
                                className={"btn lighten-1 black-text"}
                                style={{backgroundColor: "#F2546D"}}
                                onClick={() => {
                                    navigate('/reg')
                                }}
                                disabled={loading}
                            >
                                Реєстрація
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;