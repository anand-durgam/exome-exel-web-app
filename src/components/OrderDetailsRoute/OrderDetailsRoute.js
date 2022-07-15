
import './OrderDetailsRoute.css'
import LanguageDropDown from '../LanguageDropDown/LanguageDropDown'
import { useSelector } from 'react-redux'
import {useEffect , useState} from 'react'
import Table from 'react-bootstrap/Table';
import OrderDetailsCsvFile from '../OrderDetailsCsvFile/OrderDetailsCsvFile';
import OrderDetailsList from '../OrderDetailsList/OrderDetailsList';
import Modal from 'react-bootstrap/Modal'

const OrderDetailsRoute = () => {
    
    const {languageName} = useSelector(state => state.elsplReducer)
    const [orderDetailsData , setOrderDetailsData] = useState([])

    ///////////////////////////////////////////
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        window.location.reload()
    }

    ///////////////////////////////////////////

    let deleteSelectedArray = []

    const onDeleteSelected = () => {
        // console.log(deleteSelectedArray)

        const url = `http://10.0.0.237:3003/contactdetailsmultidelete`

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

    const getOrderDetailsAPI = async() => {

        // //////////////////////////////////////////////////

        const url = `http://10.0.0.237:3003/Contactdetails/language/${languageName}`

        const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          };

        const response = await fetch(url, options)
        const responseData = await response.json()
        setOrderDetailsData(responseData.data)
    }

    useEffect(() => {

        getOrderDetailsAPI()

    }, [languageName] )

    
    return(
        <>
        <div className='import-and-dropdown-container'>
            <OrderDetailsCsvFile/>
            <LanguageDropDown />
        </div>

        <div className='delete-selected-container'>
            <button className='delete-selected-btn' onClick={onDeleteSelected}>Delete Selected</button>
        </div>

            <Table className='crop-recommendation-table' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Headquarters Name</th>
                        <th>Headquarters Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetailsData.map(item => (
                        <OrderDetailsList deleteSelectedArray={deleteSelectedArray} key={item.id} item={item} />
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

export default OrderDetailsRoute

