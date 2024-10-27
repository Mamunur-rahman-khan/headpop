import React from 'react'

const Heading = ({className,text}) => {
  
  // console.log(text.split('#')[1]);
  text.split(' ').map(item=>{

    // console.log(item.includes('#'));

    if(item.includes('#')){
      let move = item.split('')
      move.pop()
      move.shift()
      console.log(move.join(''));
    }
    
  })

  return (
    <h1 className={`${className}`}>
        {text}
    </h1>
  )
}

export default Heading
