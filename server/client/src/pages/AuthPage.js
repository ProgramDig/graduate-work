import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/authContext";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {
    const auth = useContext(AuthContext)

    const message = useMessage()
    const navigate = useNavigate()
    const {loading, request, error, clearError} = useHttp()

    const [form, setForm] = useState({
        nickname: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    },[error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request('api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId, data.role)
            message(data.message)
        } catch (e) {}
    }
    return (
        <div>
            <div className="row">
                <div className="col s6 offset-s3">
                    <h1>Якийсь текст</h1>
                    <div className="card blue darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Авторизація</span>
                            <div>
                                <div className="input-field">
                                    <input
                                        id="nickname"
                                        type="text"
                                        name="nickname"
                                        onChange={changeHandler}
                                        className="yellow-input"
                                    />
                                    <label htmlFor="nickname">Логін або пошта</label>
                                </div>
                                <div className="input-field">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        onChange={changeHandler}
                                        className="yellow-input"
                                    />
                                    <label htmlFor="password">Пароль</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button
                                className={"btn yellow darken-4"}
                                style={{marginRight: 10}}
                                onClick={loginHandler}
                                disabled={loading}
                            >
                                Увійти
                            </button>
                            <button
                                className={"btn gray lighten-1 black-text"}
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