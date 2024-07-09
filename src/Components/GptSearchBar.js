import React from 'react'
import lang from '../Utils/languageconstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const Configkey = useSelector((store) => store.ConfigLang.lang);
  console.log(Configkey + "hello")

  return (
      <div className='pt-[10%] flex justify-center'>
          <form className='w-1/2 bg-black grid grid-cols-12'>
              <input type ="text" className='p-4 m-4 col-span-9' placeholder={lang[Configkey]?.gptSearchPlaceholder}></input>
              <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-black rounded-lg'>{lang[Configkey]?.search}</button>
              
          </form>
    </div>
  )
}

export default GptSearchBar