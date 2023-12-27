import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { UserProfile } from './Home/UserProfile';
import '../App.css'
import { Link } from 'react-router-dom';

export const Section = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section>
      <FontAwesomeIcon
        className="user-icon"
        icon={faCircleUser}
        style={{ color: "#585050", cursor: "pointer" }}
        onClick={openModal}
      />

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title >Perfil de Supervisor</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <UserProfile />
        </Modal.Body>
        <Modal.Footer>
          
          <Link to={"/login"}>
        <button className="btn btn-secondary" onClick={closeModal}>
            Cerrar Sesion
          </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
