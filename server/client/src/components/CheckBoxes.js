import React, {useState} from 'react';

const CheckBoxes = ({setCheckBoxVal, setForm}) => {

    const [checkedTeach, setCheckedTeach] = useState(true)
    const [checkedHead, setCheckedHead] = useState(false)
    const [checkedEmployer, setCheckedEmployer] = useState(false)

    const handleChangeCheckedTeach = (event) => {
        setCheckedTeach(true)
        setCheckedEmployer(false)
        setCheckedHead(false)

        setCheckBoxVal(event.target.value)
        setForm(event.target.value)
    }

    const handleChangeCheckedHead = (event) => {
        setCheckedHead(true)
        setCheckedTeach(false)
        setCheckedEmployer(false)

        setCheckBoxVal(event.target.value)
        setForm(event.target.value)
    }

    const handleChangeCheckedEmployer = (event) => {
        setCheckedEmployer(true)
        setCheckedTeach(false)
        setCheckedHead(false)

        setCheckBoxVal(event.target.value)
        setForm(event.target.value)
    }

    return (
        <div className={''}>
            <p>
                <label>
                    <input type="checkbox" className="filled-in"
                           name={'role'}
                           value={'TEACHER'}
                           checked={checkedTeach}
                           onChange={handleChangeCheckedTeach}/>
                    <span style={{color: '#fff'}}>Викладач</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" className="filled-in"
                           name={'role'}
                           value={'DEPARTMENT_HEAD'}
                           checked={checkedHead}
                           onChange={handleChangeCheckedHead}/>
                    <span style={{color: '#fff'}}>Начальник кафедри</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" className="filled-in"
                           name={'role'}
                           value={'SCIENTIFIC_EMPLOYER'}
                           checked={checkedEmployer}
                           onChange={handleChangeCheckedEmployer}/>
                    <span style={{color: '#fff'}}>Представник навчального відділу</span>
                </label>
            </p>
        </div>
    );
};

export default CheckBoxes;