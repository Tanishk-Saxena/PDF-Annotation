import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div className="heading">
        <h3>Documents</h3>
        <hr />
        <ul className='dash'>
            <li><Link to="/document1">Sample Document 1.pdf</Link></li>
            <li><Link to="/document2">Sample Document 2.pdf</Link></li>
            <li><Link to="/document3">Sample Document 3.pdf</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home