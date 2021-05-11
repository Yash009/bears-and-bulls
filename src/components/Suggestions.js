import React from 'react'
// Creating the search result by fetching the result object and using it's keys
const Suggestions = (props) => {
  const options = props.results.map(r => (
          <li className="searchResultList" onClick={() => console.log(r[Object.keys(r)[0]])}>{r[Object.keys(r)[0]]}<span><strong></strong></span></li>    
  ))
  return <ul className="searchResultListParent">{options}</ul>
}
export default Suggestions