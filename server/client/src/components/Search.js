import React from 'react';

const Search = ({search, searchOnChangeHandler, selectOnChangeHandle, select}) => {
    return (
        <div style={{display:'flex', justifyContent: 'space-between'}}>
            <div className="input-field col s6">
                <input
                    placeholder="Пошук"
                    id="first_name"
                    type="text"
                    className="validate"
                    value={search}
                    onChange={searchOnChangeHandler}
                />
            </div>
            <div className="input-field col s12">
                <select value={select} onChange={selectOnChangeHandle}>
                    <option value="" disabled selected>ПІБ</option>
                    <option value={"fullName"} >ПІБ</option>
                    <option value={'role'} >Роль</option>
                    <option value={'email'} >Пошта</option>
                    <option value={'login'} >Логін</option>
                    <option value={'_id'} >Ідентифікатор</option>
                </select>
                <label>Тип сортування</label>
            </div>
        </div>
    );
};

export default Search;