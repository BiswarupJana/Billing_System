import React, { useState } from 'react'
import './AddPurchase.css'
const AddPurchase = () => {
  const currentDate = new Date().toISOString().split('T')[0]
  const initialRow = {
    itemName: '',
    hsnNo: '',
    avaQty: '',
    quantiy: '',
    per: '',
    Rate: '',
    discount: '',
    tax: '',
    total: '',
  }

  const [tableData, setTableData] = useState([initialRow])

  const handleAddRow = () => {
    setTableData([...tableData, initialRow])
  }

  const handleDeleteRow = (index) => {
    if (tableData.length > 1) {
      const updatedTableData = [...tableData]
      updatedTableData.splice(index, 1)
      setTableData(updatedTableData)
    }
  }

  const handleInputChange = (index, fieldName, value) => {
    const updatedTableData = [...tableData]
    updatedTableData[index][fieldName] = value
    setTableData(updatedTableData)
  }
  return (
    <>
      <div>
        <div>
          <h1>Add Purchase</h1>
          <p>Add New Purchase</p>
        </div>
        <div>
          <form>
            <div>
              <div>
                <label>Supplier:</label>
                <input placeholder="Supplier Name" />
              </div>
              <div>
                <label>Invoice Number:</label>
                <input placeholder="Invoice Number" />
              </div>
              <div>
                <label>Voucher Number:</label>
                <input placeholder="Voucher Number" />
              </div>
              <div>
                <label>Payment Type:</label>
                <select>
                  <option>Cash Payment</option>
                  <option>Net Banking</option>
                  <option>Payment Due</option>
                </select>
              </div>
              <div>
                <label>Date:</label>
                <input type="date" defaultValue={currentDate} />
              </div>
              <div>
                <label>Vehicle Number:</label>
                <input placeholder="Vehicle Number" />
              </div>
              <div>
                <label>GST Number:</label>
                <input placeholder="GST Number" />
              </div>
              <button>+Add New Supplier</button>
            </div>
            <div className="responsive-table-container">
              <table>
                <thead>
                  <tr>
                    <td>Item Name</td>
                    <td>HSN No.</td>
                    <td>Ava. Qty.</td>
                    <td>Quantity</td>
                    <td>Per </td>
                    <td>Rate</td>
                    <td>Discount(%)</td>
                    <td>Tax(%)</td>
                    <td>Total</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index}>
                      {/* Input fields for each table column */}
                      {Object.keys(initialRow).map((fieldName) => (
                        <td key={fieldName}>
                          <input
                            type="text"
                            name={fieldName}
                            value={item[fieldName]}
                            style={{ maxWidth: '100px' }}
                            onChange={(e) => handleInputChange(index, fieldName, e.target.value)}
                          />
                        </td>
                      ))}

                      <td>
                        <button type="button" onClick={() => handleAddRow()}>
                          +
                        </button>
                        {tableData.length > 1 && (
                          <button type="button" onClick={() => handleDeleteRow(index)}>
                            -
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="responsive-div">
              <div className="inputdiv">
                <label>Total Amount :</label>
                <input />
              </div>
              <div className="inputdiv">
                <label>Total Tax :</label>
                <input />
              </div>
              <div className="inputdiv">
                <label>Grand Total :</label>
                <input />
              </div>
              <div className="inputdiv">
                <label>Net Total:</label>
                <input />
              </div>
            </div>
            <button type="submit"> Add</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddPurchase
