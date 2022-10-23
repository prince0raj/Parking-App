import React, { useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from "react";

const Edit = ({ modal, toggle, updatelist,taskobj }) => {
    // let time=new Date().toLocaleTimeString;
    console.log(taskobj);
    const [checkin, setcheckin] = useState();
    const [checkout, setcheckout] = useState();
    const [name, setname] = useState();
    const [Number, setNumber] = useState();
    const setvalue = (e) => {
        const { value, name } = e.target;
        if (name === "name") {
            setname(value);
        }
        else if (name === "Number") {
            setNumber(value);
        }
        else if (name === "checkin") {
            setcheckin(value);
        }
        else if (name === "checkout") {
            setcheckout(value);
        }
        console.log(value);
    }
    const handelupdate=(e)=>{
        e.preventDefault();
        let listobj={}
        listobj["name"]=name;
        listobj["Number"]=Number;
        listobj["checkin"]=checkin;
        listobj["checkout"]=checkout;
        updatelist(listobj);
    }
    // const handellist=()=>{
    //     let listobj={}
    //     listobj["name"]=name;
    //     listobj["Number"]=Number;
    //     listobj["checkin"]=checkin;
    //     listobj["checkout"]=checkout;
    //     save(listobj);
    // }
    
   useEffect(()=>{
    setname(taskobj.name);
    setNumber(taskobj.Number);
    setcheckin(taskobj.checkin);
    setcheckout(taskobj.checkout);
   },[]);
    return (<>
        <section id="pop_up">
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Update Details</ModalHeader>
                <ModalBody>
                    <form action="">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" value={name} onChange={setvalue} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Number plate</label>
                            <input type="text" name="Number" value={Number} onChange={setvalue} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Checkin-Time</label>
                            <input type="time" min="09:00" max="18:00" onChange={setvalue} className="form-control" name="checkin" value={checkin} />
                        </div>
                        <div className="form-group">
                            <label>Checkout-Time</label>
                            <input type="time" min="09:00" max="18:00" onChange={setvalue} className="form-control" name="checkout" value={checkout} />
                        </div> 
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handelupdate}>Update</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </section>
    </>)
}

export default Edit;