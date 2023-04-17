import React, { useState, useEffect } from 'react'
import './gallery.css';
import {AiOutlineClose}from "react-icons/ai";


export default function Gallery() {
    // const {items} = props;
   
    const [model , setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [details , setDetails] = useState('');
    const [author , setAuthor] = useState('');
    const getImg = (imgSrc, details, Photographer) => {
        // console.warn(imgSrc);
        setTempImgSrc(imgSrc);
        setDetails(details);
        setAuthor(Photographer);
        setModel(true);
    }


    const [people, setPeople] = useState([]);
  const getData = () => {
    fetch("photo.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setPeople(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
    return (
        <>
    {/* {console.warn(items)} */}
      <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc}  alt="btn" />
            <div className='absolute bottom-10 left-15 px-20 bg-slate-600 p-4 text-2xl shadow-2xl'>
              <p className=' text-white mx-auto'>{details}</p>
              <p className='text-white mx-auto'>{author}</p>
            </div>
            <div >
                <p className='text-white'>adf</p>
            </div>
            <AiOutlineClose onClick={()=> setModel(false)}/>
      </div>
       <div className='gallery'>
           { people.map((item,index) => (
               
                    <div>
                          <div className='pics' key={index} onClick={()=> getImg(item.imgSrc, item.details, item.Photographer)}>
                            <img src={item.imgSrc} alt='gallery' style={{width:'100%'}}/>
                          </div>
                         
                    </div>
                    
              
            ))}
       </div>
     

        {/* <DataContext.Consumer>
            {({ items }) => (
                <ul>
                    {items.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
            )}
        </DataContext.Consumer> */}
    </>
    
  );
}
