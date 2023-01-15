import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/authContext";

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        login: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    },[error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registrationHandler = async () => {
      try {
          const data = await request('api/auth/registration', 'POST', {...form})
          message(data.message)
      } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId, data.roles)
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
                                        placeholder="Введіть логін"
                                        id="login"
                                        type="text"
                                        name="login"
                                        onChange={changeHandler}
                                        className="yellow-input"
                                    />
                                    <label htmlFor="login">Логін</label>
                                </div>
                                <div className="input-field">
                                    <input
                                        placeholder="Введіть пароль"
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
                                Вхід
                            </button>
                            <button
                                className={"btn gray lighten-1 black-text"}
                                onClick={registrationHandler}
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