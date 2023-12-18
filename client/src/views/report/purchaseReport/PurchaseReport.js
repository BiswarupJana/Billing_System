import React from 'react'

const PurchaseReport = () => {
  let totalPurchase = 0
  const data = [
    {
      purchaseDate: '',
      voucherNumber: '',
      invoiceNumber: '',
      customerName: '',
      totalAmount: '3.22',
    },
    {
      purchaseDate: '',
      voucherNumber: '',
      invoiceNumber: '',
      customerName: '',
      totalAmount: '1.33',
    },
  ]
  return (
    <>
      <div>
        <div>
          <h1>Purchase Reports</h1>
          <p>Showing Purchase Reports</p>
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
                <td>Purchase Date</td>
                <td>Voucher Number</td>
                <td>Invoice Number</td>
                <td>Customer Name</td>
                <td>Total Amount</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const parsedAmount = parseFloat(item.totalAmount)
                totalPurchase += parsedAmount

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.purchaseDate}</td>
                    <td>{item.voucherNumber}</td>
                    <td>{item.invoiceNumber}</td>
                    <td>{item.customerName}</td>
                    <td>{item.totalAmount}</td>
                  </tr>
                )
              })}
              <tr>
                <tb>Total Purchases =</tb>
                <tb>{totalPurchase.toFixed(2)}</tb>
              </tr>
            </tbody>
          </table>
        </div>
        <button>Print</button>
      </div>
    </>
  )
}

export default PurchaseReport
