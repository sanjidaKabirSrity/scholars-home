import React from 'react';
import './Teachers.css';

const Teachers = (props) => {
    const {img, name, teacher, university, teaching, salary} = props.teacher;
    return (
        <div className="teachers-container">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="teacher-box-body">
                <h2 className="name">{name}</h2>
                <p className="teacher">{teacher}</p>
                <small className="university">{university}</small>
                <p>Teaching {teaching}</p>
                <h4 className="salary">Salary {salary}$</h4>
                <button className="select-btn" onClick={()=>props.handleAddToList(props.teacher)}><i className="fas fa-check"></i> Select</button>
            </div>
        </div>
    );
};

export default Teachers;