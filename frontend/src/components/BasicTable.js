import React from 'react';
import PropTypes from 'prop-types';

import './BasicTable.scss';

/**
 * "Get" specifies a generic return
 * @param {*} object data element; see typing in the PropTypes
 */
const getTableHeaders = (object = {}) => {
  return Object.keys(object);
}

/**
 * "render" specifies JSX in the return 
 * @param {*} row data element
 */
const renderRows = (row = {}) => {

  let stars = "";
  let i = 0;
  for(i = 0; i < row.rating; i++){
      stars = stars + "⭐ "
  }
  return (
    <tr key={row.id}>
      {Object.values(row).map(
        (value, i) => <td key={i}>{value}</td>
      )}
    <td>{stars}</td>
    </tr>
  )
}

const BasicTable = ({ data }) => {
  return (
    <table className="basic-table">
      <tbody>
        <tr>
          {getTableHeaders(data[0]).map(
            headerName => <th key={headerName}>{headerName}</th>
            )}
            <th key="stars">Stars</th>
        </tr>
        {data.map(renderRows)}
        
      </tbody>
    </table>
  )
}

export default BasicTable;

/**
 * Much more substantial example of typing properties. If the data does not align to the type, an error will occur.
 */
BasicTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string,
      budget: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      type: PropTypes.string
    })
  )
};

BasicTable.defaultProps = {
  data: []
};
