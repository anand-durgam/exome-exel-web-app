
import './LanguagesRoute.css'
import LanguagesList from '../LanguagesList/LanguagesList'
import Table from 'react-bootstrap/Table';
import LanguageCsvFile from '../LanguageCsvFile/LanguageCsvFile';
import Modal from 'react-bootstrap/Modal'

import {useEffect , useState } from 'react'

const LanguagesRoute = () => {

    const [languagesData , setLanguagesData] = useState([])

    ///////////////////////////////////////////
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        window.location.reload()
    }

    ///////////////////////////////////////////////////////

    let deleteSelectedArray = []

    const onDeleteSelected = () => {
        // console.log(deleteSelectedArray)

        const url = `http://10.0.0.237:3003/languagesmultidelete`

        let options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ids: deleteSelectedArray
        })
        };
        
        fetch(url, options)
        //   .then(function(response) {
        //     return response.json();
        //   })
        //   .then(function(jsonData) {
        //     console.log(jsonData);
        //   });
        setShow(true);
    }

    // //////////////////////////////////////////////////////////////////////////////

    const getLanguagesAPI = async() => {
        const url = "http://10.0.0.237:3003/languagename"
        const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          };

        const response = await fetch(url, options)
        const responseData = await response.json()
        const languagesArray = responseData.data

        setLanguagesData(languagesArray)
        
    }

    useEffect(() => {

        getLanguagesAPI()

      } , [] )


    return(
        <>
            <LanguageCsvFile />
            <div className='delete-selected-container'>
                <button className='delete-selected-btn' onClick={onDeleteSelected}>Delete Selected</button>
            </div>
            <Table className='languages-table' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Language Name</th>
                    </tr>
                </thead>
                <tbody>
                    {languagesData.map(item => (
                    <LanguagesList deleteSelectedArray={deleteSelectedArray} itemData={item} key={item.id} />
                    ))}
                </tbody>
            </Table>

            <Modal  show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Exome Life Sciences Private Limited Says</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your record has been successfully deleted</Modal.Body>
            <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>
                Close
            </button>
            </Modal.Footer>
            </Modal>
        </>
    )
}


export default LanguagesRoute