import Modal from 'react-bootstrap/Modal'

const ModalBootstrap = () => {
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