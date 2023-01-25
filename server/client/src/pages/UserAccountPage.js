import React from 'react';
import CheckBoxes from "../components/CheckBoxes";

const UserAccountPage = () => {
    return (
        <div className={'row'}>
            <div className="col s12 center-align">
                <h4>Особистий кабінет</h4>
            </div>
            <div className="row">
                <div className="col s4 center-align">
                    <img style={{borderRadius: '50%'}} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" width={'250'} alt="user image"/>
                    <div>Admin</div>
                </div>
                <div className="col s8">
                    <div>
                        Name: Anokhin Dmytro
                    </div>
                    <div>
                        login: login
                    </div>
                    <div>
                        email: email
                    </div>
                </div>
            </div>

            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                // value={fullName}
                                className="validate"
                                // onChange={changeFullNameHandler}
                            />
                            <label htmlFor="fullName" className="active">ПІБ</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="login"
                                name="login"
                                type="text"
                                // value={login}
                                className="validate"
                                // onChange={changeLoginNameHandler}
                            />
                            <label htmlFor="login" className="active">Логін</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                // value={email}
                                className="validate"
                                // onChange={changeEmailNameHandler}
                            />
                            <label htmlFor="email" className="active">Пошта</label>
                        </div>
                    </div>
                    {/*<CheckBoxes*/}
                    {/*    checkBoxVal={checkBoxVal}*/}
                    {/*    setCheckBoxVal={setCheckBoxValHandler}*/}
                    {/*    setForm={setFormRoleHandler}*/}
                    {/*    color={'#000000'}*/}
                    {/*/>*/}
                </form>
            </div>
        </div>
    );
};

export default UserAccountPage;