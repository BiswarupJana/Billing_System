import React from 'react'

const AddSupplier = () => {
  return (
    <>
      <div>
        <div>
          <h1>Add Supplier</h1>
          <p>Add New Supplier</p>
        </div>
        <div>
          <form>
            <div>
              <div>
                <label>Supplier Name:</label>
                <input placeholder="Name" />
              </div>
              <div>
                <label>Supplier Email:</label>
                <input placeholder="Email" type="email" />
              </div>
              <div>
                <label>Supplier Address:</label>
                <input placeholder="Name" />
              </div>
              <div>
                <label>Supplier Name:</label>
                <input placeholder="Name" />
              </div>
              <div>
                <label>Supplier Name:</label>
                <input placeholder="Name" />
              </div>
              <div>
                <label>Supplier Name:</label>
                <input placeholder="Name" />
              </div>
            </div>
            <div>
              <button>Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddSupplier
