import React from 'react'


//with JSX
//const Hello = () => {
  //  return (
    //    <div>
            <h1>hello</h1>
      //  </div>
    //)
//}

// without jsx
/*const Hello = () => {
   return React.createElement('div', null, '<h1>', 'haii');
}*/


//props 
const Profile = (props) => {
    
    const style = {
        padding: '10px',
        border: '1px solid green',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
        color: '#4db1e8',
        textAlign: 'center',
        fontFamily: 'sans-serif'
    }
    return (
        <div style={style}>
           
            <h1>{props.title}</h1>
        </div>
    );
   }

export default Profile