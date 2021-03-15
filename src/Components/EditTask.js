import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditTask = ({ handleClose, show,editTask,id }) => {
    const [taskModified, setTaskModified] = useState('');
    const handleCloseModal=()=>{
        editTask(id,taskModified);
        handleClose()
    }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Normal text" onChange={(e)=>setTaskModified(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
