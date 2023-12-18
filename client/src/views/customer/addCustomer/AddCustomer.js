import React from 'react'

const AddCustomer = () => {
  return (
    <>
      <div>
        <h1>Add Customer</h1>
        <p> Add New Customer</p>
      </div>
      <div>
        <form>
          <div>
            <label>Customer Name:</label>
            <input />
          </div>
          <div>
            <label>Customer Number:</label>
            <input />
          </div>
          <div>
            <label>Address:</label>
            <input />
          </div>
          <div>
            <label>Vehicle Number:</label>
            <input />
          </div>
          <div>
            <label>GST Number:</label>
            <input />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  )
}

export default AddCustomer
