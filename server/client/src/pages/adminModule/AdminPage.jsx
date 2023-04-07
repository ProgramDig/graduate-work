import React from 'react';
import Table from "../../components/Table";


const AdminPage = () => {

    return (
        <div className={"container"} style={{minHeight: "65vh"}}>
            <h1>Адмін панель</h1>
            <Table/>
        </div>
    );
};

export default AdminPage;