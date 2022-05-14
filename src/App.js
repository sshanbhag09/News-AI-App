import React,{useEffect, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './NewsCards/NewsCards';
import "./App.css"
import { mergeClasses } from '@material-ui/styles';
const  alanKey="NEWS API"

function App() {
  const[newsArticles,setNewsArticles] =useState([]);
  useEffect(()=>{

    alanBtn({
      key:alanKey,
      onCommand:({command,articles})=>{
        setNewsArticles(articles)
      }
    })
  },[])
  return (
    <div className="logoContainer">
      <div className='img_container'>
      <img  src="https://alan.app/static/mobile_meduza.918bc547.png" ></img>
      </div>
      <NewsCards articles={newsArticles}/>
    </div>
  )
}

export default App
