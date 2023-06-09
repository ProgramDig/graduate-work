import React from 'react';
import Table from "../../components/Table/Table";


const AdminPage = () => {

    return (
        <div className={"container"} style={{minHeight: "65vh", marginBottom:15}}>
            <h1 className={"center title"}>Адмін панель</h1>
            <Table/>
            <div style={{marginBottom: 15, color:"white"}}>d</div>
        </div>
    );
};

export default AdminPage;