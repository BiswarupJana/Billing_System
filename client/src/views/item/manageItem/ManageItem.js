import React, { useState } from 'react'

const ManageItem = () => {
  const [edit, setEdit] = useState(false)
  const originalData = [
    {
      itemName: '',
      packing: '',
      supplier: '',
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
        <h1>Manage Item</h1>
        <p>Manage Existing Item</p>
      </div>
      <div>
        <label>Search:</label>
        <input placeholder="By Item Name" />
        <input placeholder="By Supplier Name" />
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <td>SL. No.</td>
              <td>Item Name</td>
              <td>Packing</td>
              <td>Supplier</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {edit ? (
                    <input
                      type="text"
                      value={item.itemName}
                      onChange={(e) => handleInputChange(index, 'itemName', e.target.value)}
                    />
                  ) : (
                    item.itemName
                  )}
                </td>
                <td>
                  {edit ? (
                    <input
                      type="text"
                      value={item.packing}
                      onChange={(e) => handleInputChange(index, 'packing', e.target.value)}
                    />
                  ) : (
                    item.packing
                  )}
                </td>
                <td>
                  {edit ? (
                    <input
                      type="text"
                      value={item.supplier}
                      onChange={(e) => handleInputChange(index, 'supplier', e.target.value)}
                    />
                  ) : (
                    item.supplier
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

export default ManageItem
