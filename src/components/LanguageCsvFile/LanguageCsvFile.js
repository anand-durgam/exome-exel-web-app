

import './LanguageCsvFile.css'
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'

const LanguageCsvFile = () => {

    const [file, setFile] = useState();

    // //////////////////////////////////////////////////
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        window.location.reload()
    }

    // //////////////////////////////////////////////////
    const [failurePopup, setFailurePopup] = useState(false);

    const onCloseFailureView = () => {
        setFailurePopup(false)
    }

    // const [csvData, setCsvData] = useState(null)
    const [fileSelected, setFileSelected] = useState(false)
  
    const fileReader = new FileReader();
  
    const handleOnChange = (e) => {
      setFile(e.target.files[0]);
      setFileSelected(true)
    };
  
    const csvFileToArray = string => {
      const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

      const langArray = csvRows.map(item => item)
      langArray.pop()

        function postLanguagesAPI(item){
            // console.log(item)

            //   API for POST Method

            let data = [{
                label: item,
                value: item
            }];
            
            let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data)
            };
            
            fetch("http://10.0.0.237:3003/languages/create3", options)
            // .then(function(response) {
            //     return response.json();
            // })
            // .then(function(jsonData) {
            //     console.log(jsonData);
            // });

        }

      langArray.map(item => postLanguagesAPI(item))
      
    };
  
    const handleOnSubmit = (e) => {
      e.preventDefault();

      if(fileSelected === false){
        setFailurePopup(true)
      }
      else{
        if (file) {
            fileReader.onload = function (event) {
              const text = event.target.result;
              csvFileToArray(text);
            };
      
            fileReader.readAsText(file);
          }
            setShow(true);
      }
      

    };
  
  
    return (
      <div className='import-file-container'>

        <form>
          <input
            type={"file"}
            id={"csvFileInput"}
            accept={".csv"}
            onChange={handleOnChange}
          />
  
          <button
            onClick={(e) => {
              handleOnSubmit(e);
            }}
          >
            Import File
          </button>
        </form>
  
        <br />

        {/* Popup Modal using react bootstrap for submitting file successfully */}
        <Modal  show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Exome Life Sciences Private Limited</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your Records has been successfully updated</Modal.Body>
            <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>
                Close
            </button>
            </Modal.Footer>
            </Modal>
        {/*  ///////////////////////////  */}

        {/* Popup Modal using react bootstrap for failing to submit a file */}
        <Modal  show={failurePopup} onHide={onCloseFailureView}>
            <Modal.Header closeButton>
            <Modal.Title>Exome Life Sciences Private Limited Says</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please select a File</Modal.Body>
            <Modal.Footer>
            <button variant="secondary" onClick={onCloseFailureView}>
                Close
            </button>
            </Modal.Footer>
            </Modal>
        {/*  ///////////////////////////  */}

      </div>
    )
}

export default LanguageCsvFile