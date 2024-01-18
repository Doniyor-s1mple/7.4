import { current } from '@reduxjs/toolkit'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import React from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'

const LavozimModal = ({ OpenModal, Active, Submitform, currentItem }) => {


    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <Modal isOpen={Active} toggle={OpenModal}>
                        <ModalHeader className='bg-dark'>Add Lavozim</ModalHeader>
                        <ModalBody className='bg-dark'>
                            <AvForm id='form' onValidSubmit={Submitform} model={currentItem}>
                                <AvField type='text' name='nomi' label='Nomi' required />
                                <AvField type='text' name='maosh' label='Maosh' required />
                            </AvForm>
                        </ModalBody>
                        <ModalFooter className='bg-dark'>
                            <Button color='outline-info btn-sm' form='form'>save</Button>
                            <Button color='outline-danger btn-sm mx-2' onClick={OpenModal}>cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default LavozimModal