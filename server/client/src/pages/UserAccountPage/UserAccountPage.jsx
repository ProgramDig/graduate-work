import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../components/Modal/Modal";
import {useHttp} from "../../hooks/http.hook";
import {setUser} from "../../redux/userSlice";
import {useMessage} from "../../hooks/message.hook";
import classes from "./UserAccountPage.module.scss"
import InfoModal from "../../components/InfoModal/InfoModal";
import InfoChart from "../../components/InfoChart/InfoChart";
const UserAccountPage = () => {
    const dispatch = useDispatch()
    const {request} = useHttp()
    const message = useMessage()

    const user = useSelector(state => state.user)
    const {_id, email, login, fullName, password, role, isActivated, link} = user

    useEffect(() => {
        window.M.AutoInit()
    }, [])

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
                <h4 className="title">Особистий кабінет</h4>
            </div>

            <div className="row">
                <div className="col s4 center-align">
                    <img style={{borderRadius: '50%'}}
                         src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                         width={'250'} alt="user image"
                    />
                    <div className={classes.infoItem}><strong>{fullName}</strong></div>
                </div>

                <div className="col s8 ">
                    <div className={classes.infoItem}><strong>Прізвище:</strong> {fullName.split(" ")[0]}</div>
                    <div className={classes.infoItem}><strong>Ім'я:</strong> {fullName.split(" ")[1]}</div>
                    <div className={classes.infoItem}><strong>Логін:</strong> {login}</div>
                    <div className={classes.infoItem}><strong>Пошта:</strong> {email}</div>
                    <div className={classes.infoItem}><strong>Роль:</strong> {role}</div>

                    <div className={classes.btnBlock + " row"}>
                        <button
                            data-target="modal1"
                            className={'col s5 btn modal-trigger blue darken-1 '}
                            style={{marginRight: 30}}
                        >
                            Змінити особисті дані
                        </button>
                        <button
                            data-target="modal2"
                            className={'col s5 btn modal-trigger blue darken-1 us-btn '}
                            style={{marginRight: 30}}
                        >
                            Інформація для користувача
                        </button>
                    </div>

                    <InfoModal/>
                    <Modal thisUser={user} updateUserHandler={updateHandler}/>
                </div>


                <div className={"row"}>
                    <div className={"col s12"}>
                        <h4 className={"title center"}>Активінсть використання</h4>
                        <InfoChart/>
                    </div>


                    <div className="col s12">
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
                            className={'col s2 btn blue darken-1 center'}
                        >
                            Змінити пароль
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAccountPage;