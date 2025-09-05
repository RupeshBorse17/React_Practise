import React, { useContext } from 'react'

import { themecontext } from '../App'

const ChildC = () => {

    // const user = useContext(usercontext)
    const {theme,settheme} = useContext(themecontext);

    function handleclick(){
        if(theme == 'light'){
            settheme('dark');
        }
        else{
            settheme('light');
        }
    }
  return (
    <div>
      
      <button onClick={handleclick}>
        change theme
      </button>
    </div>
  )
}

export default ChildC
