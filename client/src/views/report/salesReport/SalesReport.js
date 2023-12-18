import React from 'react'

const SalesReport = () => {
  let totalSales = 0
  const data = [
    {
      salesDate: '',
      invoiceNumber: '',
      customerName: '',
      totalAmount: '1.22',
    },
    {
      salesDate: '',
      invoiceNumber: '',
      customerName: '',
      totalAmount: '1.33',
    },
  ]
  return (
    <>
      <div>
        <div>
          <h1>Sales Reports</h1>
          <p>Showing Sales Reports</p>
        </div>
        <div>
          <div>
            <label>Start Date:</label>
            <input type="date" />
          </div>
          <div>
            <label>End Date:</label>
            <input type="date" />
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>SL</td>
                <td>Sales Date</td>
                <td>Invoice Number</td>
                <td>Customer Name</td>
                <td>Total Amount</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const parsedAmount = parseFloat(item.totalAmount).toFixed(2)
                totalSales += parseFloat(parsedAmount)
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.salesDate}</td>
                    <td>{item.invoiceNumber}</td>
                    <td>{item.customerName}</td>
                    <td>{item.totalAmount}</td>
                  </tr>
                )
              })}
              <tr>
                <tb>Total Sales =</tb>
                <tb>{totalSales}</tb>
              </tr>
            </tbody>
          </table>
        </div>
        <button>Print</button>
      </div>
    </>
  )
}

export default SalesReport
