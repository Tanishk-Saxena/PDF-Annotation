import React from 'react';
import deleteIcon from '../images/delete-cross.svg';

const Row = ({details, annotations, setAnnotations}) => {
  const {x, y, height, width, btnClass} = details;
  
  const handleDelete = () => {
    const newAnnotationsArray = annotations.filter((annotation)=>(annotation.key !== details.key));
    setAnnotations(newAnnotationsArray);
  }

  return (
    <div className='row-container'>
      <span className='row-span'>x: {x},</span>
      <span className='row-span'>y: {y},</span>
      <span className='row-span'>height: {height}</span>
      <span className='row-span'>width: {width}</span>
      <button disabled className={btnClass+' row-btn'}>{btnClass.charAt(0).toUpperCase() + btnClass.slice(1)}</button>
      <img className='row-img' src={deleteIcon} alt="Delete" onClick={handleDelete} />
    </div>
  )
}

export default Row