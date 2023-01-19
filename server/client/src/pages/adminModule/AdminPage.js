import React, {useEffect, useState} from 'react';
import {useHttp} from "../../hooks/http.hook";
import {BsFillTrashFill} from "react-icons/bs";
import {BiPencil} from "react-icons/bi";
import {MdOutgoingMail} from "react-icons/md";
import {useMessage} from "../../hooks/message.hook";

const AdminPage = () => {
    const {loading, request, error, clearError} = useHttp()
    const message = useMessage()
    const [form, setForm] = useState(null)
    const json = JSON.parse(localStorage.getItem('user'))
    const token = json.token.accessToken

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        refreshHandler()
    }, [])

    const refreshHandler = async () => {
        const data = await request(
            '/api/admin/users',
            'GET',
            null,
            {"Authorization": `Bearer ${token}`})
        setForm(data)
    }

    const deleteHandler = async (id) => {
        const data = await request(
            '/api/admin/users',
            'DELETE',
            {id},
            {"Authorization": `Bearer ${token}`}
        )
        if (data.isDelete) {
            message(data.message)
            setForm(form.filter(user => user.id !== id))
        }
    }

    return (
        <div>
            <h1>Адмін панель</h1>
            <button
                className={'btn blue darken-1'}
                onClick={refreshHandler}
                disabled={loading}
            >Оновити
            </button>
            {
                loading ?
                    <>
                        <div className="progress">
                            <div className="indeterminate blue darken-1" style={{width: '100%'}}></div>
                        </div>
                    </>
                    :
                    <></>
            }
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
                                <tr key={user.id}>
                                    {/*<td>{user._id}</td>*/}
                                    <td>{user.fullName}</td>
                                    <td>{user.role}</td>
                                    <td>{user.email}</td>
                                    <td>{user.login}</td>
                                    <td>{user.isActivated ? 'Активовано' : 'Не активовано'}</td>
                                    <td style={{display: 'flex'}}>
                                        <button
                                            disabled={user.role === 'ADMIN'}
                                            className={'btn red darken-1'}
                                            style={{marginRight: 5}}
                                            onClick={() => deleteHandler(user._id)}
                                        >
                                            <BsFillTrashFill/>
                                        </button>
                                        <button
                                            disabled={user.role === 'ADMIN'}
                                            className={'btn blue darken-1'}
                                            style={{marginRight: 5}}
                                        >
                                            <BiPencil/>
                                        </button>
                                        <button
                                            disabled={user.role === 'ADMIN'}
                                            className={'btn green darken-2'}
                                        >
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