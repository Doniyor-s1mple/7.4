import { AvForm, AvField } from 'availity-reactstrap-validation'
import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap'

const XodimlarModal = ({ OpenModal, Active, SubmitForm, currentItem }) => {

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    {/* Modal for Add */}
                    <Modal isOpen={Active} toggle={OpenModal}>
                        <ModalHeader className='bg-dark'>Add Xodim</ModalHeader>
                        <ModalBody className='bg-dark'>
                            <AvForm id='form' onValidSubmit={SubmitForm} model={currentItem} >
                                <AvField type='text' name='firstname' label='Firstname' required />
                                <AvField type='text' name='lastname' label='Lastname' required />
                                <AvField type='text' name='phone' label='Phone' required />
                                <AvField type='select' name='lavozim' label='Lavozim' required>
                                    <option>Developer</option>
                                    <option>Dizayner</option>
                                    <option>SMM</option>
                                </AvField>
                                <AvField type='select' name='level' label='Level' required>
                                    <option>Junior</option>
                                    <option>Middle</option>
                                    <option>Senior</option>
                                </AvField>

                            </AvForm>
                        </ModalBody>
                        <ModalFooter className='bg-dark'>
                            <Button form='form' color='outline-info btn-sm'>save</Button>
                            <Button color='outline-warning btn-sm' onClick={OpenModal}>cancel</Button>
                        </ModalFooter>
                    </Modal>


                </div>
            </div>

        </div>
    )
}

export default XodimlarModal