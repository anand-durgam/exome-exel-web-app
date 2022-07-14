import {MdDelete} from 'react-icons/md'
import Modal from 'react-bootstrap/Modal'
import { useState } from "react";

const CropRecommendationList = (props) => {
    const {item} = props

    // //////////////////////////////////////////////////
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        window.location.reload()
    }

    const onDeleteId = () => {
        // console.log("id value   " + item.id)

        const url = `http://10.0.0.237:3003/recommendations/${item.id}`

        let options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
        };
        
        fetch(url, options)
          // .then(function(response) {
          //   return response.json();
          // })
          // .then(function(jsonData) {
          //   console.log(jsonData);
          // });
          setShow(true)
    }

    
    return(
        <>
        <tr key={item.id}>
        <td><input type="checkbox" className='delete-check-box' /></td>
            <td>{item.id}</td>
            <td>{item.value}</td>
            <td>{item.time_of_application}</td>
            <td>{item.recommendation}</td>
            <td className='delete-button'><MdDelete onClick={onDeleteId}/></td>
        </tr>
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

export default CropRecommendationList