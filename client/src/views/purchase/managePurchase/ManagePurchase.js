import React, { useState } from 'react'

const ManagePurchase = () => {
  const [edit, setEdit] = useState(false)
  const originalData = [
    {
      voucharNo: '',
      supplierName: '',
      invoiceNumber: '',
      purchaseDate: '',
      totalAmmount: '',
      paymentStatus: '',
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
  const printHandler = () => {}
  return (
    <>
      <div>
        <div>
          <h1>Manage Purchase</h1>
          <p>Mange Existing Purchase</p>
        </div>
        <div>
          <div>
            <label>Search:</label>
            <input placeholder="By Voucher Number" />
            <input placeholder="By Supplier Name" />
            <input placeholder="By Invoice" />
          </div>
          <div>
            <label>By Purchase Date:</label>
            <input type="date" />
            <select>
              <option>PAID</option>
              <option>DUE</option>
            </select>
          </div>
          <button>Refresh</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>SL.</td>
                <td>Vouchar Number</td>
                <td>Supplier Name</td>
                <td>Invoice Number</td>
                <td>Purchase Date</td>
                <td>Total Amount</td>
                <td>Payment Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    {edit ? (
                      <input
                        type="date"
                        value={item.purchaseDate}
                        onChange={(e) => handleInputChange(index, 'purchaseDate', e.target.value)}
                      />
                    ) : (
                      item.purchaseDate
                    )}
                  </td>
                  <td></td>
                  <td>
                    {edit ? (
                      <select
                        value={item.paymentStatus}
                        onChange={(e) => handleInputChange(index, 'paymentStatus', e.target.value)}
                      >
                        <option value="due">DUE</option>
                        <option value="paid">Paid</option>
                      </select>
                    ) : (
                      item.paymentStatus
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
                        <button onClick={printHandler}>Print</button>
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

export default ManagePurchase
