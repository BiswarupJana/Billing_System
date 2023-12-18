import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchComponent = ({ data, onSelect, displayKey, type }) => {
  SearchComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelect: PropTypes.func.isRequired,
    displayKey: PropTypes.string.isRequired,
    type: PropTypes.string, // Add this line to validate the 'type' prop
  }
  const [searchInput, setSearchInput] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([])
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleChange = (e) => {
    const input = e.target.value
    setSearchInput(input)

    if (input.length > 0) {
      const filteredData = data.filter((item) =>
        Object.values(item).some(
          (value) => typeof value === 'string' && value.toLowerCase().includes(input.toLowerCase()),
        ),
      )
      setFilteredOptions(filteredData)
    } else {
      setFilteredOptions([])
    }
  }

  const handleOptionSelect = (selectedItem) => {
    setSearchInput(selectedItem[displayKey])
    setFilteredOptions([])
    onSelect(selectedItem)
  }

  return (
    <div style={{ position: 'relative' }}>
      <input type={type} placeholder="Search here" onChange={handleChange} value={searchInput} />

      {filteredOptions.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 1,
            border: '1px solid #ccc',
            backgroundColor: 'white',
          }}
        >
          {filteredOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleOptionSelect(item)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                backgroundColor: index === hoveredIndex ? '#f0f0f0' : 'white',
              }}
            >
              {item[displayKey]}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

SearchComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  displayKey: PropTypes.string.isRequired,
}

export default SearchComponent
