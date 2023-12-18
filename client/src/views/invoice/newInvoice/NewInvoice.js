import React, { useState } from 'react'
import './NewInvoice.css'
import CIcon from '@coreui/icons-react'
import { cilFile, cilDelete, cilNoteAdd, cilPlus } from '@coreui/icons'
import { FcPlus } from 'react-icons/fc'
import SearchComponent from 'src/components/SearchComponent'

const NewInvoice = () => {
  const customerData = [
    {
      name: 'user1',
      address: 'test1',
      invoiceNumer: '1234',
      paymentType: 'Cash Payment',
      date: '2023-01-01',
      contactNumber: '123456789',
      vehicleNumber: '457854',
      gstNumber: '242',
      refferedBy: 'user1223',
    },
    {
      name: 'user2',
      address: 'test2',
      invoiceNumer: '1234',
      paymentType: 'Cash Payment',
      date: '11-09-2023',
      contactNumber: '123456789',
      vehicleNumber: '457854',
      gstNumber: '242',
      refferedBy: 'text123',
    },
  ]

  const itemData = [
    {
      itemName: 'item1',
      hsnNo: 'item1',
      avaQty: '2',
      quantity: '3',
      per: '4',
      rate: '5',
      discount: '6',
      tax: '7',
      total: '8',
    },
    {
      itemName: 'item2',
      hsnNo: 'item2',
      avaQty: 'item2',
      quantity: 'item2',
      per: '2',
      rate: '2',
      discount: '2',
      tax: '2',
      total: '2',
    },
    {
      itemName: 'item3',
      hsnNo: '3',
      avaQty: '3',
      quantity: '3',
      per: '3',
      rate: '3',
      discount: '3',
      tax: '3',
      total: '3',
    },
  ]
  const [initialCustomerData, setInitialCustomerData] = useState({
    name: '',
    address: '',
    invoiceNumer: '',
    paymentType: '',
    date: '',
    contactNumber: '',
    vehicleNumber: '',
    gstNumber: '',
    refferedBy: '',
  })

  const [tableData, setTableData] = useState([
    {
      itemName: '',
      hsnNo: '',
      avaQty: '',
      quantity: '',
      per: '',
      rate: '',
      discount: '',
      tax: '',
      total: '',
    },
  ])
  const handleOptionSelect = (selectedItem) => {
    setInitialCustomerData(selectedItem)
  }

  const handleItemOptionSelect = (selectedItem, rowIndex) => {
    const updatedTableData = [...tableData]
    // Assuming rowIndex is the index of the row being updated
    updatedTableData[rowIndex] = {
      ...updatedTableData[rowIndex],
      hsnNo: selectedItem.hsnNo,
      avaQty: selectedItem.avaQty,
      quantity: selectedItem.quantity,
      per: selectedItem.per,
      rate: selectedItem.rate,
      discount: selectedItem.discount,
      tax: selectedItem.tax,
      total: selectedItem.total,
      // Add other properties as needed
    }
    setTableData(updatedTableData)
  }

  const handleInputChange = (fieldName, value) => {
    setInitialCustomerData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }

  const handleItemInputChange = (rowIndex, fieldName, value) => {
    const updatedTableData = [...tableData]
    updatedTableData[rowIndex] = {
      ...updatedTableData[rowIndex],
      [fieldName]: value,
    }
    setTableData(updatedTableData)
  }

  const handleAddRow = () => {
    setTableData([
      ...tableData,
      {
        itemName: '',
        hsnNo: '',
        avaQty: '',
        quantity: '',
        per: '',
        rate: '',
        discount: '',
        tax: '',
        total: '',
      },
    ])
  }

  const handleDeleteRow = (index) => {
    if (tableData.length > 1) {
      const updatedTableData = [...tableData]
      updatedTableData.splice(index, 1)
      setTableData(updatedTableData)
    }
  }

  const handleSave = (e) => {
    e.preventDefault()
    const formData = {
      customerData: initialCustomerData,
      itemData: tableData,
      // Add other form data as needed
    }
    console.log(formData)
    // Add logic to save the data to your backend or perform other actions
  }
  return (
    <>
      <div className="body_div">
        <div className="div_head">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CIcon icon={cilNoteAdd} style={{ height: '3%', width: '3%' }} />
            <h1>New Invoice</h1>
          </div>
          <p>Create a new Invoice</p>
        </div>

        <div className="div_form">
          <form>
            <div className="responsive-div">
              <div className="inputdiv">
                <label>Customer Name:</label>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <SearchComponent
                    data={customerData}
                    onSelect={handleOptionSelect}
                    onChange={(value) => handleInputChange('name', value)}
                    displayKey="name"
                    style={{ width: '50px' }}
                  />
                  <button className="newCustomerBtn">New Customer</button>
                </div>
              </div>
              <div className="inputdiv">
                <label>Address:</label>
                <input
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  value={initialCustomerData.address}
                  disabled
                />
              </div>
              <div className="inputdiv">
                <label>Invoice Number:</label>
                <input
                  onChange={(e) => handleInputChange('invoiceNumer', e.target.value)}
                  value={initialCustomerData.invoiceNumer}
                  disabled
                />
              </div>
              <div className="inputdiv">
                <label>Payment Type:</label>
                <select
                  value={initialCustomerData.paymentType}
                  onChange={(e) => handleInputChange('paymentType', e.target.value)}
                >
                  <option value="Card Payment">Card Payment</option>
                  <option value="Cash Payment">Cash Payment</option>
                  <option value="Net Banking">Net Banking</option>
                </select>
              </div>
              <div className="inputdiv">
                <label>Date:</label>
                <input
                  type="date"
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  value={initialCustomerData.date}
                />
              </div>
              <div className="inputdiv">
                <label>Contact Number:</label>
                <input
                  onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                  value={initialCustomerData.contactNumber}
                  disabled
                />
              </div>
              <div className="inputdiv">
                <label>Vehicle Number:</label>
                <input
                  onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
                  value={initialCustomerData.vehicleNumber}
                  disabled
                />
              </div>
              <div className="inputdiv">
                <label>GST Number:</label>
                <input
                  onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                  value={initialCustomerData.gstNumber}
                  disabled
                />
              </div>
              <div className="inputdiv">
                <label>Referred By:</label>
                <input
                  onChange={(e) => handleInputChange('refferedBy', e.target.value)}
                  value={initialCustomerData.refferedBy}
                />
              </div>
            </div>
            <div className="responsive-table">
              <table>
                <thead>
                  <tr>
                    <td>Item Name</td>
                    <td>HSN No.</td>
                    <td>Ava.Qty.</td>
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
                      <td>
                        <SearchComponent
                          data={itemData}
                          onSelect={(selectedItem) => handleItemOptionSelect(selectedItem, index)}
                          onChange={(value) => handleItemInputChange(index, 'itemName', value)}
                          displayKey="itemName"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="hsnNo"
                          value={item.hsnNo || ''}
                          disabled
                          onChange={(e) => handleItemInputChange(index, 'hsnNo', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="avaQty"
                          value={item.avaQty || ''}
                          disabled
                          onChange={(e) => handleItemInputChange(index, 'avaQty', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="quantity"
                          value={item.quantity || ''}
                          onChange={(e) => handleItemInputChange(index, 'quantity', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="per"
                          value={item.per || ''}
                          disabled
                          onChange={(e) => handleItemInputChange(index, 'per', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="rate"
                          value={item.rate || ''}
                          disabled
                          onChange={(e) => handleItemInputChange(index, 'rate', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="discount"
                          value={item.discount || ''}
                          disabled
                          onChange={(e) => handleItemInputChange(index, 'discount', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="tax"
                          value={item.tax || ''}
                          disabled
                          onChange={(e) => handleItemInputChange(index, 'tax', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="total"
                          value={item.total || ''}
                          disabled
                          onChange={(e) => handleItemInputChange(index, 'total', e.target.value)}
                        />
                      </td>

                      <td>
                        <FcPlus
                          onClick={() => handleAddRow()}
                          style={{ width: '50%', fontSize: '40px' }}
                        />

                        {tableData.length > 1 && (
                          <CIcon
                            icon={cilDelete}
                            onClick={() => handleDeleteRow(index)}
                            style={{ color: 'red', width: '50%', fontSize: '50px' }}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="responsive-div">
              <div className="inputdiv">
                <label>Sub Total Amount:</label>
                <input />
              </div>
              <div className="inputdiv">
                <label>Total Discount:</label>
                <input />
              </div>
              <div className="inputdiv">
                <label>Total Tax:</label>
                <input />
              </div>
              <div className="inputdiv">
                <label>Net Total:</label>
                <input />
              </div>
            </div>
            <div className="responsive-div">
              <div className="inputdiv">
                <label>Paid Amount :</label>
                <input />
              </div>
              <div className="inputdiv">
                <label>Change :</label>
                <input />
              </div>
            </div>
            <div className="submit_btm">
              <button type="submit" onClick={handleSave}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewInvoice
