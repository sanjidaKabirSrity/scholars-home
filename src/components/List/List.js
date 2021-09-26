import React from 'react';
import './List.css';

const List = (props) => {
    const {list} = props;
    const total = list.reduce((pre, curr) => pre + curr.salary ,0)
    return (
            <div className="summary-list">
                <h3 className="selected-h3">Selected Teachers Summary</h3>
                <div>
                    <h3><i className="fas fa-user"></i> Selected: <span className="quantity">{list.length}</span></h3>
                    <h3><i className="fas fa-dollar-sign"></i> Total Salary: <span className="quantity">{total} $</span></h3>
                </div>
                <div>
                    {
                        list.map(li => {
                            return(
                                <div className="list-show">
                                    <img src={li.img} alt="man" />
                                    <h4>{li.name}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    );
};

export default List;