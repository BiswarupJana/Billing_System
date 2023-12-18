import React, { useState } from 'react'

const ManageItemStock = () => {
  const [edit, setEdit] = useState(false)
  const originalData = [
    {
      itemName: 'Item 1',
      packing: 'Packing 1',
      batchId: 'Batch 1',
      supplier: 'Supplier 1',
      qty: '10',
      mrp: '20',
    },
  ]
  const [data, setData] = useState([...originalData])
  const editHandler = () => {
    setEdit(true)
  }
  const updateHandler = () => {
    setEdit(false)
  }
  const cancelHandle = () => {
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
        <h1>Manage Item Stock</h1>
        <p>Manage Existing Item Stock</p>
      </div>
      <div>
        <div>
          <label>Search:</label>
          <input placeholder="By Item Name" />
          <input placeholder="By Supplier Name" />
        </div>
        <div>
          <button> Stock</button>
          <button>Out of Stock</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>SL.</td>
                <td>Item Name</td>
                <td>Packing</td>
                <td>Batch ID</td>
                <td>Supplier</td>
                <td>Qty.</td>
                <td>M.R.P.</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.itemName}</td>
                  <td>{item.packing}</td>
                  <td>
                    {edit ? (
                      <input
                        value={item.batchId}
                        onChange={(e) => handleInputChange(index, 'batchId', e.target.value)}
                      />
                    ) : (
                      item.batchId
                    )}
                  </td>
                  <td>{item.supplier}</td>
                  <td>
                    {edit ? (
                      <input
                        value={item.qty}
                        onChange={(e) => handleInputChange(index, 'qty', e.target.value)}
                      />
                    ) : (
                      item.qty
                    )}
                  </td>
                  <td>
                    {edit ? (
                      <input
                        value={item.mrp}
                        onChange={(e) => handleInputChange(index, 'mrp', e.target.value)}
                      />
                    ) : (
                      item.mrp
                    )}
                  </td>
                  <td>
                    <div>
                      {!edit && <button onClick={editHandler}>edit</button>}
                      {edit && <button onClick={updateHandler}>|</button>}
                      {edit && <button onClick={cancelHandle}>X</button>}
                    </div>
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

export default ManageItemStock
