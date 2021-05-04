import React from 'react'
// Creating the search result by fetching the result object and using it's keys
const Suggestions = (props) => {
  //console.log(props.results[0]);
  const options = props.results.map(r => (
      <ul className="searchResultListParent">
          <li className="searchResultList">{r[Object.keys(r)[0]]}<span><strong></strong></span></li>
      </ul>       
  ))
  return <ul>{options}</ul>
}
export default Suggestions