import React from 'react'

// const Heading = ({className,text}) => {
  
//   // console.log(text.split('#')[1]);
//   text.split(' ').map(item=>{

//     // console.log(item.includes('#'));

//     if(item.includes('#')){
//       let move = item.split('')
//       move.pop()
//       move.shift()
//       console.log(move.join(''));
//     }
    
//   })

//   return (
//     <h1 className={`${className}`}>
//         {text}
//     </h1>
//   )
// }

// const Heading = ({text}) =>{
//   let move = text.replace('#','<span class="text-tomato">').replace('#','</span>');

//   return <h1 dangerouslySetInnerHTML={{__html:move}}></h1>;
// }

function Heading ({text}){
  let pattern= /#([^#]+)#/g;
  let move= text.replace(pattern,'<span class="text-tomato">$1</span>');

  return <h1 dangerouslySetInnerHTML={{__html:move}} />
}

export default Heading
