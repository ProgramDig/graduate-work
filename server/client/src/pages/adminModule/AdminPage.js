import React, {useEffect, useState} from 'react';
import {useHttp} from "../../hooks/http.hook";
import {BsFillTrashFill} from "react-icons/bs";
import {BiPencil} from "react-icons/bi";
import {MdOutgoingMail} from "react-icons/md";

const AdminPage = () => {
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState(null)
    const json = JSON.parse(localStorage.getItem('user'))
    const token = json.token.accessToken

    const refreshHandler = async () => {
        const data = await request(
            '/api/admin/users',
            'GET',
            null,
            {"Authorization": `Bearer ${token}`})
        setForm(data)
    }
    console.log('Form - ', form)

    return (
        <div>
            <h1>Адмін панель</h1>
            <button className={'btn blue darken-1'} onClick={refreshHandler}>Оновити</button>
            <div className={'Table'}>
                <table>
                    <thead>
                    <tr>
                        {/*<th>Ідентифікатор</th>*/}
                        <th>ПІБ</th>
                        <th>Роль</th>
                        <th>Пошта</th>
                        <th>Логін</th>
                        <th>Активація</th>
                        <th>Функції</th>
                    </tr>
                    </thead>
                    <tbody>
                    {form &&
                        form.map((user) => {
                            return (
                                <tr>
                                    {/*<td>{user._id}</td>*/}
                                    <td>{user.fullName}</td>
                                    <td>{user.role}</td>
                                    <td>{user.email}</td>
                                    <td>{user.login}</td>
                                    <td>{user.isActivated? 'Активовано': 'Не активовано'}</td>
                                    <td style={{display:'flex'}}>
                                        <button className={'btn red darken-1'} style={{marginRight: 5}}>
                                            <BsFillTrashFill/>
                                        </button>
                                        <button className={'btn blue darken-1'} style={{marginRight: 5}}>
                                            <BiPencil/>
                                        </button>
                                        <button className={'btn green darken-2'}>
                                            <MdOutgoingMail/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;