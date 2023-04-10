import React from 'react';
import Table from "../../components/Table/Table";


const AdminPage = () => {

    return (
        <div className={"container"} style={{minHeight: "65vh"}}>
            <h1 className={"center title"}>Адмін панель</h1>
            <Table/>
        </div>
    );
};

export default AdminPage;