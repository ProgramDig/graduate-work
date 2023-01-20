import React, {useEffect, useState} from 'react';
import {BsFillTrashFill} from "react-icons/bs";
import {BiPencil} from "react-icons/bi";
import {MdOutgoingMail} from "react-icons/md";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import Loader from "./Loader";
import Search from "./Search";


const Table = () => {
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
        window.M.AutoInit()
    }, [])

    const refreshHandler = async () => {
        const data = await request(
            '/api/admin/users',
            'GET',
            null,
            {"Authorization": `Bearer ${token}`})
        setForm(data)
        setFilterFrom(data)
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
            const newForm = [...form.filter(user => user._id !== id)]
            console.log('form -', newForm)
            setForm(newForm)
            setFilterFrom(newForm)
        }
    }


    const [select, setSelect] = useState('')

    const selectOnChangeHandle = (event) => {
        setSelect(event.target.value)
    }

    const [search, setSearch] = useState('')
    const [filteredForm, setFilterFrom] = useState(form)

    const searchOnChangeHandler = (event) => {
        const query = event.target.value;
        setSearch(query)
        let updateForm = [...form]
        updateForm = updateForm.filter((user) => {
            switch (select){
                case '_id':
                    return user._id.toLowerCase().indexOf(query.toLowerCase()) !== -1
                case 'login':
                    return user.login.toLowerCase().indexOf(query.toLowerCase()) !== -1
                case 'role':
                    return user.role.toLowerCase().indexOf(query.toLowerCase()) !== -1
                case 'email':
                    return user.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
                default:
                    return user.fullName.toLowerCase().indexOf(query.toLowerCase()) !== -1
            }
        })
        setFilterFrom(updateForm)
    }

    return (
        <>
            <button
                className={'btn blue darken-1'}
                onClick={refreshHandler}
                disabled={loading}
            >
                Оновити
            </button>
            <Loader loading={loading}/>
            <Search
                select={select}
                search={search}
                searchOnChangeHandler={searchOnChangeHandler}
                selectOnChangeHandle={selectOnChangeHandle}
            />

            <div className={'Table'}>
                <table>
                    <thead>
                    <tr>
                        <th>Ідентифікатор</th>
                        <th>ПІБ</th>
                        <th>Роль</th>
                        <th>Пошта</th>
                        <th>Логін</th>
                        <th>Активація</th>
                        <th>Функції</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredForm?.map((user) => {
                            return (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
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
        </>
    );
};

export default Table;