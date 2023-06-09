import React, {useEffect, useState} from 'react';

const TeachPage = () => {
    const doc = [{uri: "http://localhost:5000/files/Рецензія.docx"}];
    const [isActive, setIsActive] = useState(true)
    useEffect(() => {
        if (!isActive) {
            async function send() {
                const res = await fetch("http://localhost:5001/")
                return res
            }

            const res = send()
            if (res) {
                setIsActive(true)
            }
        }
    })
    const [users, setUsers] = useState([
        {
            id:1,
            fullName: "п-к Васильєв Д.О.",
            pathDocument: "http://localhost:5000/files/Рецензія.docx",
            title: "Рецензія.docx",
            isActive: false
        },
        {
            id:2,
            fullName: "м-р Молоко Ф.С.",
            pathDocument: "http://localhost:5000/files/Рецензія.docx",
            title: "Рапорт.docx",
            isActive: false
        },
        {
            id:3,
            fullName: "п/п-к Валин Б.К.",
            pathDocument: "http://localhost:5000/files/Рецензія.docx",
            title: "Заява.docx",
            isActive: false
        },
        {
            id:4,
            fullName: "п/п-к Валин Б.К.",
            pathDocument: "http://localhost:5000/files/Рецензія.docx",
            title: "Рапорт.docx",
            isActive: false
        },
        {
            id:7,
            fullName: "п/п-к Валин Б.К.",
            pathDocument: "http://localhost:5000/files/Рецензія.docx",
            title: "Зобов'язання.docx",
            isActive: false
        },
        {
            id:5,
            fullName: "п-к Білий Б.К.",
            pathDocument: "http://localhost:5000/files/Рецензія.docx",
            title: "Рецензія.docx",
            isActive: false
        },
        {
            id:6,
            fullName: "п/п-к Валин Б.К.",
            pathDocument: "http://localhost:5000/files/Рецензія.docx",
            title: "Відгук.docx",
            isActive: false
        }
    ])

    return (
        <div className={"container"} style={{minHeight: "65vh"}}>
            <div style={{color: "white"}}>
                sdf
            </div>
            <div style={{border: "5px solid #2E3E50", borderRadius: 15, padding: 15, marginBottom: 15}}>
                <table>
                    <thead>
                    <tr>
                        <th>П.І.Б</th>
                        <th>Статус</th>
                        <th>Назва файлу</th>
                        <th>Файл</th>
                        <th>Дії</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users && users.map(user => {
                        return (<tr>
                            <td>{user.fullName}</td>
                            <td>{user.isActive ? (<span>Підписано</span>) : (<span>Непідписано</span>)}</td>
                            <td>{user.title}</td>
                            <td><a href={user.pathDocument}>файл</a></td>
                            <td>
                                <button className={"btn"} disabled={!isActive} value={user.id} onClick={(event) =>{
                                    const id = event.currentTarget.value
                                    const user = users.filter((user) => {
                                        if(user.id === id){
                                            return user
                                        }
                                    })[0]
                                }}>
                                    Підписати
                                </button>
                            </td>
                        </tr>)
                    })}

                    </tbody>
                </table>
            </div>
            <div style={{color: "white"}}>
                sdf
            </div>
        </div>
    );
};

export default TeachPage;