import { TryData } from "../../util/content/Try";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const Try = () => {
    const {title,para,para1,title1,para2} = TryData;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   
    <div className="bg-black text-white flex justify-center items-center">
    <div className=" py-20 w-[600px] h-[700px]">
    <h1>{title}</h1>
    <p>{para}</p>
        <div className="bg-gray-700 w-[600px] h-[100px] flex justify-center items-center px-5 rounded-md">
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response =  response.json())
            .then(json = console.log(json))
        </div>
        <>
      <Button variant="primary " className="my-3" onClick={handleShow}>
        Run Script
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Run Script</Modal.Title>
        </Modal.Header>
        <Modal.Body >{
            <div className="bg-gray-800 text-white">
            <p>"userId": 1,</p>
            <p>"id": 1,</p>
            <p>"title": "delectus aut autem",</p>
            <p>"completed": false`</p>
            </div>  
        }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    <p>{para1}</p>
    <div>
        <h1 className="py-5">{title1}</h1>
        <p>{para2}</p>
    </div>
    </div>

    
    </div>
    
  );
}

export default Try;
