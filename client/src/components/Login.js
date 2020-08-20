import React, {useState} from 'react'
import {Modal,Button,Form,Popover,OverlayTrigger} from "react-bootstrap"
import { useHistory } from "react-router-dom";
import axios from "axios"

export default function Login() {

    const [modDisplay, setModDisplay] = useState(true)
    const [popDisplay, setPopDisplay] = useState(false)
    const history = useHistory();

    function login(){
        if(document.getElementById("username").value){
            setModDisplay(false)
            var username = new FormData();
            username.set('username', document.getElementById("username").value);
            axios({
                method:"POST",
                url:process.env.REACT_APP_POST_USERNAME,
                data:username
            }).then(history.push("/chat"))
        }
        else{
            setPopDisplay(true)
        }
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3"><strong>Warning</strong></Popover.Title>
          <Popover.Content>
              <p>Please enter a username.</p>
          </Popover.Content>
        </Popover>
    );
    
    return (
        <div>
            <Modal show={modDisplay} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Welcome to Chat App</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Control id="username" name="username" type="text" placeholder="Enter Username" />
                </Modal.Body>
                
                <Modal.Footer>
                    <OverlayTrigger show={popDisplay} trigger="click" placement="bottom" overlay={popover}>
                        <Button style={{backgroundColor:"#183a37"}} onClick={login} block>Login</Button>
                    </OverlayTrigger>
                </Modal.Footer>
            </Modal>
        </div>
    )
}