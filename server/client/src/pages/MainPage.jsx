import React from 'react';

const MainPage = () => {
    const obj = localStorage.getItem('user')
    const json = JSON.parse(obj)
    return (
        <div className={"container"} style={{minHeight: "65vh"}}>
            <h1>main</h1>
            <div>
                {json.role}
            </div>
        </div>
    );
};

export default MainPage;