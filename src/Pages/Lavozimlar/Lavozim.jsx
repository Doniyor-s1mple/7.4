import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LavozimModal from './LavozimModal'
import { addLavozim, editLavozim, DeletLavozim } from '../../redux/LavozimReducer'

const Lavozim = () => {
  const Lavozim = useSelector((state) => state.LavozimReducer.Lavozim)
  const dispatch = useDispatch()

  const [Active, setActive] = useState(false)
  const [currentItem, setCurrentItem] = useState('')

  const OpenModal = () => {
    setActive(prev => !prev)
  }

  const Submitform = (event, values) => {
    if (currentItem) {
      dispatch(editLavozim({ ...values, id: currentItem.id }))
    } else {
      dispatch(addLavozim(values))
    }
    setActive(false)
  }

  const Edit = (item) => {
    setCurrentItem(item)
    setActive(true)
  }

  const Del = (index) => {
    dispatch(DeletLavozim(index))
  }


  return (
    <div className='container'>
      <h2 className='text-center'>Lavozimlar</h2>
      <div className="row">
        <div className="col-3">
          <input type="search" placeholder='search...' className='form-control' />
        </div>
        <div className="col-9">
          <button className='btn btn-outline-light float-end' onClick={OpenModal}>Add</button>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-12">
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>No</th>
                <th>Nomi</th>
                <th>Maosh</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                Lavozim.map((item, index) => <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.nomi}</td>
                  <td>{item.maosh}</td>
                  <td>
                    <button className='btn btn-outline-info btn-sm' onClick={() => Edit(item)}>edit</button>
                    <button className='btn btn-outline-danger btn-sm mx-2' onClick={() => Del(index)}>delete</button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
          <LavozimModal OpenModal={OpenModal} Active={Active} Submitform={Submitform} currentItem={currentItem} />
        </div>
      </div>
    </div>
  )
}

export default Lavozim