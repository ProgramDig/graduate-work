import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../components/Modal";
import {useHttp} from "../hooks/http.hook";
import {setUser} from "../redux/userSlice";
import {useMessage} from "../hooks/message.hook";

const UserAccountPage = () => {
    const dispatch = useDispatch()
    const {request} = useHttp()
    const message = useMessage()

    const user = useSelector(state => state.user)
    const {_id, email, login, fullName, password, role, isActivated, link} = user

    useEffect(() => {
        window.M.AutoInit()
    },[])

    const updateHandler = async (user) => {
        const response = await request(
            '/api/admin/users',
            'PUT',
            {...user, _id: user._id},
            {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token.accessToken}`}
        )
        if (response.isUpdate) {
            message(response.message)
            dispatch(setUser(user))
        } else {
            message(response.message)
        }
    }

    return (
        <div className={"container row"} style={{minHeight: "65vh"}}>
            <div className="col s12 center-align">
                <h4>Особистий кабінет</h4>
            </div>
            <div className="row">
                <div className="col s4 center-align">
                    <img style={{borderRadius: '50%'}}
                         src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                         width={'250'} alt="user image"
                    />
                    <div>{fullName}</div>
                </div>
                <div className="col s4">
                    <h6>Ваші дані</h6>
                    <div>Прізвище та ім'я: {fullName}</div>
                    <div>Логін: {login}</div>
                    <div>Пошта: {email}</div>
                    <div>Роль: {role}</div>
                    <blockquote style={{borderColor: '#1e88e5'}}>
                        Заміна ПІБ, логіну, пошти або ролі потребує підтвердження модератора.
                    </blockquote>
                    <blockquote style={{borderColor: '#1e88e5'}}>
                        Заміна пошти потребує підтвердження на пошту після підвтеврдження модератора.
                    </blockquote>
                    <blockquote style={{borderColor: '#1e88e5'}}>
                        Заміна паролю не потребує підтердження модератора.
                    </blockquote>
                    <button
                        data-target="modal1"
                        className={'btn modal-trigger blue darken-1'}
                    >
                        Змінити особисті дані
                    </button>
                    <Modal thisUser={user} updateUserHandler={updateHandler}/>
                </div>
                <div className="col s4">
                    <h6>Змінити пароль</h6>
                    <div className="input-field col s12">
                        <input id="old-password" type="password" className="validate"/>
                        <label htmlFor="old-password">Старий пароль</label>
                    </div>

                    <div className="input-field col s12">
                        <input id="new-password" type="password" className="validate"/>
                        <label htmlFor="new-password">Новий пароль</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="re-new-password" type="password" className="validate"/>
                        <label htmlFor="re-new-password">Повтор нового паролю</label>
                    </div>
                    <button
                        className={'btn blue darken-1'}
                    >
                        Змінити пароль
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserAccountPage;