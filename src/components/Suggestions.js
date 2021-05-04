import React from 'react'
// Creating the search result by fetching the result object and using it's keys
const Suggestions = (props) => {
  //console.log(props.results[0]);
  const options = props.results.map(r => (
    <li className='text-center'>
        <ul>
            <li>{r[Object.keys(r)[0]]}<span><strong></strong></span></li>
        </ul>       
    </li>
  ))
  return <ul>{options}</ul>
}
export default Suggestions