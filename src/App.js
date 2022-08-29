import React,{useEffect, useRef, useState} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './NewsCards/NewsCards';
import "./App.css"
import { mergeClasses } from '@material-ui/styles';

const  alanKey="e63211bab92dd6c593505e56c9fe94662e956eca572e1d8b807a3e2338fdd0dc/stage"
function useStateReference(value) {
  const ref = useRef(value);
  const [, forceRender] = useState(false);

  function updateState(newState) {
    if (!Object.is(ref.current, newState)) {
      ref.current = newState;
      forceRender(s => !s);
    }
  }

  return [ref, updateState];
}
function App() {
  const [count, setCount] = useStateReference({});
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
