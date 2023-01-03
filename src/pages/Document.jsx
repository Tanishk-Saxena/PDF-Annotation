import React, { useEffect, useState } from 'react';
import Annotations from '../components/Annotations';
import Row from '../components/Row';

const Document = ({doc}) => {

    const url = `https://arxiv.org/pdf/2212.${doc}.pdf`;
    const embedded_url = `https://docs.google.com/viewer?url=${url}&embedded=true`;
    const titleModeObject = {color: 'rgba(231, 103, 57, 0.428)', strokeColor: 'rgba(255, 68, 0, 0.728)', btnClass: 'title'};
    const authorModeObject = {color: 'rgba(49, 166, 49, 0.41)', strokeColor: 'rgba(0, 128, 0, 0.71)', btnClass: 'author'};
    const [mode, setMode] = useState(null);
    const [modeObject, setModeObject] = useState({});
    const localAnnotationsArray = JSON.parse(localStorage.getItem(doc));
    const [annotations, setAnnotations] = useState(localAnnotationsArray?localAnnotationsArray:[]);

    useEffect(() => {
      const fetchPDF = async (url) => {
        const res = await fetch(url);
      }
      fetchPDF(url);
    }, []);

    useEffect(()=>{
      if(mode === 'titleMode'){
        setModeObject(titleModeObject);
      }else if(mode === 'authorMode'){
        setModeObject(authorModeObject);
      }else{
        setModeObject({});
      }
    }, [mode]);

    useEffect(()=>{
      localStorage.setItem(doc, JSON.stringify(annotations));
    }, [annotations]);
    
    const handleReset = () => {
      setAnnotations([]);
    }

  return (
    <div className="container">
      <div className="left heading">
        <h3>Labels</h3>
        <hr />
        <button id="title-btn" className='title heading-btn' onClick={()=>{let titleBtn = document.getElementById('title-btn'); let authorBtn = document.getElementById('author-btn'); if(mode === 'titleMode'){setMode(null); titleBtn.classList.remove('title-active');}else{setMode('titleMode'); titleBtn.classList.add('title-active'); authorBtn.classList.remove('author-active');}}}>Title</button>
        <button id="author-btn" className='author heading-btn' onClick={()=>{let titleBtn = document.getElementById('title-btn'); let authorBtn = document.getElementById('author-btn'); if(mode === 'authorMode'){setMode(null); authorBtn.classList.remove('author-active');}else{setMode('authorMode'); authorBtn.classList.add('author-active'); titleBtn.classList.remove('title-active');}}}>Author</button>
      </div>
      <div className="left content">
        <h3 className='annotations-title'>Annotations</h3>
        <button disabled={annotations.length > 0 ? false : true} className="reset" onClick={handleReset}>Clear all</button>
        <hr />
        {annotations && annotations.map((annotation)=>{
          return (<Row key={annotation.key} details={annotation} annotations={annotations} setAnnotations={setAnnotations} />);
        })}
      </div>
      <div className="right pdf">
        <div className="annotations" style={{height: "94vh", width: "100%"}}>
          <Annotations mode={mode} modeObject={modeObject} annotations={annotations} setAnnotations={setAnnotations}/>
        </div>
        <iframe src={embedded_url} frameBorder="0" style={{height: "100%", width: "100%"}}></iframe>
      </div>
    </div>
  )
}

export default Document