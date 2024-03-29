import React, {useEffect, useState} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import {useMessage} from "../../../hooks/message.hook";
import {useNavigate} from "react-router-dom";
import CheckBoxes from "../../../components/CheckBoxes/CheckBoxes";
import classes from "../AuthPage/AuthPage.module.scss";
import logo from "../../../assets/lens_black_24dp.svg";

const RegPage = () => {

    const message = useMessage()
    const navigate = useNavigate()
    const {loading, request, error, clearError} = useHttp()
    const [checkBoxVal, setCheckBoxVal] = useState('TEACHER')

    const [form, setForm] = useState({
        email: '',
        login: '',
        password: '',
        rePassword: '',
        fullName: '',
        role: checkBoxVal
    })

    const setFormRoleHandler = (value) => {
      setForm({...form, role: value})
    }

    const setCheckBoxValHandler = (value) => {
        setCheckBoxVal(value)
    }

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registrationHandler = async () => {
        try {
            const data = await request('api/auth/registration', 'POST', {...form})
            message(data.message)
            navigate('/auth')
        } catch (e) {}
    }

    return (
        <div style={{backgroundColor: "#2e3e50"}}>
            <div className="row container" >
                <div className="col s6 offset-s3">

                    <h1 className={"center " + classes.title}  style={{marginTop: "40px"}}>
                        <span style={{color:"#F2546D"}}>Digital</span>load
                        <img width={60} src={logo} alt="logo"/>
                    </h1>

                    <div className={"card " + classes.myCard}>
                        <div className="card-content white-text">
                            <span className="card-title center"><strong>Реєстрація</strong></span>
                            <div>
                                <div className="input-field">
                                    <input
                                        id="fullName"
                                        type="text"
                                        name="fullName"
                                        onChange={changeHandler}
                                        className="yellow-input"
                                    />
                                    <label htmlFor="fullName">ПІБ</label>
                                </div>
                                <div className="input-field">
                                    <input
                                        id="email"
                                        type="text"
                                        name="email"
                                        onChange={changeHandler}
                                        className="yellow-input"
                                    />
                                    <label htmlFor="email">Пошта</label>
                                </div>
                                <div className="input-field">
                                    <input
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
                                        id="password"
                                        type="password"
                                        name="password"
                                        onChange={changeHandler}
                                        className="yellow-input"
                                    />
                                    <label htmlFor="password">Пароль</label>
                                </div>
                                <div className="input-field">
                                    <input
                                        id="rePassword"
                                        type="password"
                                        name="rePassword"
                                        onChange={changeHandler}
                                        className="yellow-input"
                                    />
                                    <label htmlFor="rePassword">Підтвердження паролю</label>
                                </div>
                                <CheckBoxes
                                    setCheckBoxVal={setCheckBoxValHandler}
                                    setForm={setFormRoleHandler}
                                    color={'fff'}
                                />
                            </div>
                        </div>
                        <div className={"card-action " + classes.bnt_block}>
                            <button
                                className={"btn white black-text"}
                                onClick={registrationHandler}
                                style={{marginRight: 10}}
                                disabled={loading}
                            >
                                Зареєструватись
                            </button>
                            <button
                                className={"btn black-text"}
                                style={{backgroundColor: "#F2546D"}}
                                onClick={() => {
                                    navigate('/auth')
                                }}
                                disabled={loading}
                            >
                                Вхід
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegPage;