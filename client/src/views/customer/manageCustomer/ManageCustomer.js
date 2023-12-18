import React, { useState } from 'react'

const ManageCustomer = () => {
  const [edit, setEdit] = useState(false)
  const originalData = [
    {
      customerId: '',
      customerName: '',
      contactNumber: '',
      address: '',
    },
  ]

  const [data, setData] = useState([...originalData])
  const editHandler = () => {
    setEdit(true)
  }
  const deleteHandler = () => {
    setData(originalData)
  }
  const updateHandler = () => {
    setEdit(false)
  }
  const cencilHandler = () => {
    setEdit(false)
    setData(originalData)
  }
  const handleInputChange = (index, key, value) => {
    const newData = [...data]
    newData[index][key] = value
    setData(newData)
  }
  return (
    <>
      <div>
        <h1>Manage Customer</h1>
        <p>Manage Existing Customer</p>
      </div>
      <div>
        <label> Search:</label>
        <input />
        <input />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>SL.</td>
              <td>Customer ID</td>
              <td>Customer Name</td>
              <td>Contact Number</td>
              <td>Address</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.customerId}</td>
                <td>
                  {edit ? (
                    <input
                      type="text"
                      value={item.customerName}
                      onChange={(e) => handleInputChange(index, 'customerName', e.target.value)}
                    />
                  ) : (
                    item.customerName
                  )}
                </td>
                <td>
                  {edit ? (
                    <input
                      type="number"
                      value={item.contactNumber}
                      onChange={(e) => handleInputChange(index, 'contactNumber', e.target.value)}
                    />
                  ) : (
                    item.contactNumber
                  )}
                </td>
                <td>
                  {edit ? (
                    <input
                      type="address"
                      value={item.address}
                      onChange={(e) => handleInputChange(index, 'address', e.target.value)}
                    />
                  ) : (
                    item.address
                  )}
                </td>
                <td>
                  {' '}
                  {edit ? (
                    <div>
                      <button onClick={updateHandler}>upD</button>
                      <button onClick={cencilHandler}>X</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={editHandler}>edit</button>
                      <button onClick={deleteHandler}>Del</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ManageCustomer
