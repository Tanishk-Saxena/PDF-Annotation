import React, { useEffect } from 'react'

const Document = ({doc}) => {

    const url = `https://arxiv.org/pdf/2212.${doc}.pdf`;

    useEffect(() => {
      const fetchPDF = async (url) => {
        const res = await fetch(url);
        console.log(res);
      }
      fetchPDF(url);
    }, [])
    

  return (
    <div className="container">
      <div className="left heading">
        <h3>Labels</h3>
        <hr />
        <button className='title heading-btn'>Title</button>
        <button className='author heading-btn'>Author</button>
      </div>
      <div className="left content">
        <h3>Boxes</h3>
        <hr />
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
        <p>Hello There!</p>
      </div>
      <div className="right pdf">
        <h3>PDF Here</h3>
      </div>
    </div>
  )
}

export default Document