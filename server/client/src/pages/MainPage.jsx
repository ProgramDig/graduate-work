import React from 'react';

const MainPage = () => {
    const obj = localStorage.getItem('user')
    const json = JSON.parse(obj)
    return (
        <div className={"container"} style={{minHeight: "65vh"}}>
            <h1 className={"title"}>Головна </h1>

        </div>
    );
};

export default MainPage;