import React, { useState } from 'react'
import classes from './ManageInvoice.module.css'
const ManageInvoice = () => {
  const initialData = [
    {
      invoiceNo: '1234',
      customerName: '2',
      refferedBy: '3',
      date: '2023-01-01',
      totalAmount: '4',
      totalTax: '5',
      sgst: '6',
      cgst: '7',
      netTotal: '8',
    },
    {
      invoiceNo: '2',
      customerName: '2',
      refferedBy: '3',
      date: '2023-01-01',
      totalAmount: '4',
      totalTax: '5',
      sgst: '6',
      cgst: '7',
      netTotal: '8',
    },
    {
      invoiceNo: '010123400',
      customerName: '2',
      refferedBy: '3',
      date: '2023-01-01',
      totalAmount: '4',
      totalTax: '5',
      sgst: '6',
      cgst: '7',
      netTotal: '8',
    },
    {
      invoiceNo: '3',
      customerName: '2',
      refferedBy: '3',
      date: '2023-01-01',
      totalAmount: '4',
      totalTax: '5',
      sgst: '6',
      cgst: '7',
      netTotal: '8',
    },
    {
      invoiceNo: '4',
      customerName: '2',
      refferedBy: '3',
      date: '2023-01-01',
      totalAmount: '4',
      totalTax: '5',
      sgst: '6',
      cgst: '7',
      netTotal: '8',
    },
  ]

  const [tableData, setTableData] = useState([...initialData])
  const [selectedType, setSelectedType] = useState('')
  const [selectedValue, setSelectedValue] = useState('')

  const selectHandler = (e) => {
    const selectedOption = e.target.value
    const selectedType = e.target.selectedOptions[0].getAttribute('type')

    if (selectedOption !== '') {
      setSelectedType(selectedType)
      setSelectedValue(selectedOption)
    }
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value

    // Check if selectedValue is not an empty string
    if (selectedValue !== '') {
      // Use a regular expression for flexible matching
      const regex = new RegExp(inputValue, 'i')

      // Filter data based on selected type and input value
      const filteredData = initialData.filter((item) => regex.test(item[selectedValue]))
      setTableData(filteredData)
    } else {
      // If selectedValue is empty, set the original data
      setTableData([...initialData])
    }
  }

  const handleRefresh = () => {
    setTableData([...initialData])
    setSelectedType('')
    setSelectedValue('')
    const selectElement = document.getElementById('your-select-id')
    if (selectElement) {
      selectElement.value = ''
    }
  }

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' }
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options)
    return formattedDate
  }

  return (
    <div className={classes.div_total}>
      <div className={classes.div_nav}>
        <div className={classes.div_head}>
          <h1 style={{ color: 'rgb(37, 23, 226)' }}>Manage Invoice</h1>
          <p style={{ color: 'rgb(23, 104, 226)' }}>Manage Existing Invoice</p>
        </div>
        <div>
          <div>
            <select
              name=""
              id="your-select-id"
              onChange={selectHandler}
              defaultValue=""
              style={{ color: 'rgb(23, 104, 226)' }}
            >
              <option value="" disabled>
                Select The Option
              </option>
              <option type="text" value="invoiceNo">
                By Invoice Number
              </option>
              <option type="text" value="customerName">
                By Customer Name
              </option>
              <option type="date" value="date">
                By Invoice Date
              </option>
            </select>
            {selectedValue && <input type={selectedType} onChange={handleInputChange} />}
          </div>
          <div className={classes.refresh_div}>
            <button onClick={handleRefresh}>Refresh</button>
          </div>
        </div>
      </div>
      <div className={classes.div_body}>
        <table>
          <thead>
            <tr>
              <td>SL.</td>
              <td>Invoice No.</td>
              <td>Customer Name</td>
              <td>Referred By</td>
              <td>Date</td>
              <td>Total Amount</td>
              <td>Total Tax</td>
              <td>SGST</td>
              <td>CGST</td>
              <td>Net Total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.invoiceNo}</td>
                <td>{item.customerName}</td>
                <td>{item.refferedBy}</td>
                <td>{formatDate(item.date)}</td>
                <td>{item.totalAmount}</td>
                <td>{item.totalTax}</td>
                <td>{item.sgst}</td>
                <td>{item.cgst}</td>
                <td>{item.netTotal}</td>
                <td>
                  <button>Print</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageInvoice
