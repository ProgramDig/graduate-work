import React, {useState} from 'react';
import CheckBoxes from "./CheckBoxes";

const Modal = () => {
    const [checkBoxVal, setCheckBoxVal] = useState('TEACHER')
    const [updateUser, setUpdateUser] = useState({
        _id: 0, fullName: '', email: '', login: '', role: checkBoxVal
    })
    const setFormRoleHandler = (value) => {
        setUpdateUser({...updateUser, role: value})
    }

    const setCheckBoxValHandler = (value) => {
        setCheckBoxVal(value)
    }
    return (
        <div>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input  id="fullName" type="text" className="validate"/>
                                    <label htmlFor="fullName">ПІБ</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="login" type="text" className="validate"/>
                                    <label htmlFor="login">Логін</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate"/>
                                    <label htmlFor="email">Пошта</label>
                                </div>
                            </div>
                            <CheckBoxes
                                setCheckBoxVal={setCheckBoxValHandler}
                                setForm={setFormRoleHandler}
                                color={'#000000'}
                            />
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="modal-close waves-effect waves-green btn-flat">Відміна</button>
                    <button className="modal-close waves-effect waves-green btn-flat">Оновити</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;