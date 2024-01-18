import React from 'react'
import { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import XodimlarModal from './XodimlarModal'
import { addXodim, editXodim, DelUser } from '../../redux/XodimlarReducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Xodimlar = () => {

    const [Active, setActive] = useState(false)
    const [CurrentItem, setCurrentItem] = useState('')
    const [search, setSearch] = useState()

    const OpenModal = () => {
        setActive(prev => !prev)
        setCurrentItem('')
    }

    const dispatch = useDispatch()

    var Xodimlar = useSelector((state) => state.XodimlarReducer.Xodimlar)

    var SubmitForm = (event, values) => {
        if (CurrentItem) {
            dispatch(editXodim({ ...values, id: CurrentItem.id }))
        } else {
            dispatch(addXodim(values))
        }
        setActive(false)
        toast.success('ozgardi')

    }

    var Edit = (item) => {
        setCurrentItem(item)
        setActive(true)
    }


    const Del = (index) => {
        dispatch(DelUser(index))
        toast.success('Muvaffaqqiyatli ochirildi')
    }

    const Searched = () => {
        setSearch()
    }

    return (
        <div className='container'>
            <ToastContainer />
            <h2 className='text-center my-3'>Xodimlar</h2 >
            <div className="row">
                <div className="col-4">
                    <input type="search" value={search} onChange={(e) => Searched(e.target.value)} className='form-control' placeholder='search...' />
                </div>
                <div className="col-8">
                    <button className='btn btn-outline-light px-3 float-end' onClick={OpenModal}>Add</button>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-12">
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Phone</th>
                                <th>Lavozim</th>
                                <th>Levels</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Xodimlar.filter(item => {
                                    if (search === '') {
                                        return item
                                    } else if (item.firstname.toLowerCase().includes(search)) {
                                        return item
                                    }
                                })
                                    .map((item, index) => <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.lavozim}</td>
                                        <td>{item.levels}</td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-info mx-1' onClick={() => Edit(item)}>edit</button>
                                            <button className='btn btn-sm btn-outline-danger' onClick={() => Del(index)}>delete</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                    <XodimlarModal OpenModal={OpenModal} Active={Active} SubmitForm={SubmitForm} currentItem={CurrentItem} />
                </div>
            </div>
        </div>
    )
}

export default Xodimlar