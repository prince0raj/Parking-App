import React from "react";
import Createlist from "./Createlist";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Home = () => {
    const [modal, setmodal] = useState(false);
    const [list, setlist] = useState([]);
    useEffect(() => {
        let arr = localStorage.getItem("parking-list");
        console.log(arr);
        if (arr!==[]) {
            let obj = JSON.parse(arr);
            console.log(obj);
            setlist(obj);
        }
    }, []);
    const toggle = () => {
        setmodal(!modal);
    }
   



    const createlist = (taskobj) => {
        let templist = list;
        templist.push(taskobj);
        localStorage.setItem("parking-list", JSON.stringify(templist));
        setlist(templist);
        setmodal(false);
    }
    
    const deletehandel = (i) => {
        // console.log(i);
        // console.log("from delete");
        let templist = list;
        templist.splice(i,1);
        // console.log("from splice");
        // console.log(templist);
        localStorage.setItem("parking-list", JSON.stringify(templist));
        setlist(templist);
        window.location.reload();
    }
    const updatelistarray=(obj,ind)=>{
        let templist = list;
        templist[ind]=obj;
        localStorage.setItem("parking-list", JSON.stringify(templist));
        setlist(templist);
        window.location.reload();
    }
    return (<>
        <section id="home">
            <div className="head">
                <h2>Parking details</h2>
                <button className="btn btn-primary" onClick={() => {
                    setmodal(true);
                }}>Add Details</button>
            </div>
            <div className="carlist">
                {list && list.map((obj, ind) => <Card key={ind} index={ind} name={obj.name} number={obj.Number} checkin={obj.checkin} checkout={obj.checkout} delete={deletehandel} taskobj={obj} updatelistarray={updatelistarray} />)}
            </div>
            <div className="pop">
                <Createlist toggle={toggle} modal={modal} save={createlist} />
            </div>
        </section>
    </>)
}

export default Home;