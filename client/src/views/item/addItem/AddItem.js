import React from 'react'

const AddItem = () => {
  return (
    <>
      <div>
        <h1>Add Item</h1>
        <p>Add New Item</p>
      </div>
      <div>
        <form>
          <div>
            <div>
              <label>Item Name</label>
              <input placeholder="Item Name" />
            </div>
            <div>
              <label>Packing:</label>
              <input placeholder="Packing" />
            </div>
            <div>
              <label>HSN No.</label>
              <input placeholder="HSN No." />
            </div>
            <div>
              <label>Avail Qty.:</label>
              <input placeholder="Avil Qty" />
            </div>
            <div>
              <label>MRP</label>
              <input placeholder="MRP" />
            </div>
            <div>
              <label>Supplier</label>
              <input placeholder="Supplier Name" />
            </div>
            <button>+ Add New Supplier</button>
          </div>
          <button>ADD</button>
        </form>
      </div>
    </>
  )
}

export default AddItem
