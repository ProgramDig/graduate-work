import React from 'react';
import CheckBoxes from "../components/CheckBoxes";

const UserAccountPage = () => {
    return (
        <div>

            <h4 style={{textAlign:'center'}}>Особистий кабінет</h4>
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