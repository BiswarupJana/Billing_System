import React, { useState } from 'react'

const ManageSupplier = () => {
  const [edit, setEdit] = useState(false)
  const originalData = [
    {
      id: '2',
      name: 'test',
      email: 'text@gmail.com',
      contactNumber: '1234567890',
      address: 'test',
    },
  ]
  const [data, setData] = useState([...originalData])

  const editHandler = () => {
    setEdit(true)
  }
  const deleteHandler = () => {}
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
        <div>
          <h1>Manage Supplier</h1>
          <p>Manage Existing Supplier</p>
        </div>
        <div>
          <label>Search</label>
          <input placeholder="Search Supplier" />
          <input placeholder="Contact Number" />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>SL</td>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Contac Number</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>
                    {edit ? (
                      <input
                        value={item.name}
                        onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    {edit ? (
                      <input
                        value={item.email}
                        onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                      />
                    ) : (
                      item.email
                    )}
                  </td>
                  <td>
                    {edit ? (
                      <input
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
                        value={item.address}
                        onChange={(e) => handleInputChange(index, 'address', e.target.value)}
                      />
                    ) : (
                      item.address
                    )}
                  </td>
                  <td>
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
      </div>
    </>
  )
}

export default ManageSupplier
