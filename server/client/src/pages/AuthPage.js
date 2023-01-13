import React, {useState} from 'react';

const AuthPage = () => {
    const [form, setForm] = useState({
        login: '', password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
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
                            >
                                Вхід
                            </button>
                            <button
                                className={"btn gray lighten-1 black-text"}
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