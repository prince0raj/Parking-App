import React, { useState } from "react";
import { MdDelete} from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import Edit from "./Edit";

const Card = (prop) => {
    const [modal,setmodal]=useState(false);
    const toggle=()=>{
        setmodal(!modal);
    }
    const updatelist=(obj)=>{
        prop.updatelistarray(obj,prop.index);
    }
    return (<>
        <section id="card">
            <div className="Card">
            <div className="c_head">
                <h2>{prop.number}</h2>
            </div>
            <div className="c_tittle">
                <p>{prop.name}</p>
                <p className="time">{`Check-in : ${prop.checkin} -- check-out : ${prop.checkout}`}</p>
            </div>
            <div className="c_icons">
                <MdDelete onClick={()=>{
                prop.delete(prop.index);
            }}/> <BiEdit onClick={()=>{
                setmodal(true);
            }} /></div>
            </div>
        <Edit modal={modal} toggle={toggle} updatelist={updatelist} taskobj={prop.taskobj} />
        </section>
    </>)
}

export default Card;