import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Teachers from '../Teachers/Teachers';
import './Main.css';

const Main = () => {
    const [teachers, setTeachers] = useState([]);
    const [list , setList] = useState([]);

    useEffect(()=>{
        fetch("./teachersData.json").then(res => res.json()).then(data => setTeachers(data))
    } ,[])

    const handleAddToList = teacher =>{
        const newList = [...list, teacher];
        setList(newList)
    }

    return (
    <div className="main-div">
        <div className="available-box">
            <h3 className="available">Available <span>Teachers</span></h3>
        </div>
        <div className = 'main-container' > 
            <div className = 'list-summary' >
                <List list={list}/>
            </div >
            <div className = 'teachers' > 
                {
                    teachers.map(teacher => <Teachers key={teacher.id} teacher={teacher} handleAddToList={handleAddToList}/>)
                }
            </div> 
        </div>
    </div>
    );
};

export default Main;