import Modal from 'react-bootstrap/Modal'

// import { useState } from "react";

const ModalBootstrap = (props) => {
    const {show,handleClose} = props

    // ///////////////////////////////////////////
    // const [show, setShow] = useState(false);

    // const handleClose = () => {
    //     setShow(false);
    //     window.location.reload()
    // }

    // ///////////////////////////////////////////

    return(
        <>
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

export default ModalBootstrap