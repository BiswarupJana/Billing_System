import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import './AddCustomer.css'
import { cilNoteAdd, cilPeople } from '@coreui/icons'
import SearchComponent from 'src/components/SearchComponent'

const AddCustomer = () => {
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

  const handleInputChange = (fieldName, value) => {
    setInitialCustomerData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    const formData = {
      customerData: initialCustomerData,

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
            <CIcon icon={cilPeople} style={{ height: '3%', width: '3%' }} />
            <h1> Add Customer</h1>
          </div>
          <p>Add New Customer</p>
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
                </div>
              </div>
              <div className="inputdiv">
                <label>Contact Number:</label>
                <input
                  onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                  value={initialCustomerData.contactNumber}
                />
              </div>
              <div className="inputdiv">
                <label>Address:</label>
                <input
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  value={initialCustomerData.address}
                />
              </div>

              <div className="inputdiv">
                <label>Vehicle Number:</label>
                <input
                  onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
                  value={initialCustomerData.vehicleNumber}
                />
              </div>
              <div className="inputdiv">
                <label>GST Number:</label>
                <input
                  onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                  value={initialCustomerData.gstNumber}
                />
              </div>
            </div>

            <div className="submit_btm">
              <button type="submit" onClick={handleSave}>
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddCustomer
