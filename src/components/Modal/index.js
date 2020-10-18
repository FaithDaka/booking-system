import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
// import ReactDOM from "react-dom";

const Moddal = ({ children, title, show, close }) => {

  const modal = (
    <> 
      <Modal 
      show={show}
      scrollable="true"
      dialogClassName="center"
      backdrop="true">
        <Modal.Header>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size="lg" onClick={close}>Close Modal</Button>
        </Modal.Footer>
      </Modal>
    </>

  );

  return modal;
};

export default Moddal;