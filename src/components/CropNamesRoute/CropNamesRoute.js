import './CropNamesRoute.css'
import LanguageDropDown from '../LanguageDropDown/LanguageDropDown'
import { useSelector } from 'react-redux'
import {useEffect , useState} from 'react'
import Table from 'react-bootstrap/Table';
import CropNamesCsvFile from '../CropNamesCsvFile/CropNamesCsvFile';
import Modal from 'react-bootstrap/Modal'

import CropList from '../CropList/CropList';

const CropNamesRoute = () => {
    
    const {languageName} = useSelector(state => state.elsplReducer)
    const [cropsData , setCropsData] = useState([])

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
 
         const url = `http://10.0.0.237:3003/cropnamesmultidelete`
 
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
 

   
    useEffect(() => {

        const getCropsAPI = async() => {

            const url = `http://10.0.0.237:3003/crops/${languageName}`

            const options = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                },
              };

            const response = await fetch(url, options)
            const responseData = await response.json()
            setCropsData(responseData.data)
        }
        getCropsAPI()

      }, [languageName] )
    return(
        <>
        <div className='import-and-dropdown-container'>
            <CropNamesCsvFile />
            <LanguageDropDown />
        </div>

        <div className='delete-selected-container'>
            <button className='delete-selected-btn' onClick={onDeleteSelected}>Delete Selected</button>
        </div>

            <Table className='crops-table' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Crop Name</th>
                    </tr>
                </thead>
                <tbody>
                    {cropsData.map(item => (
                        <CropList deleteSelectedArray={deleteSelectedArray} key={item.id} item={item} />
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

export default CropNamesRoute