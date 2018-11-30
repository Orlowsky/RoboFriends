import React from 'react';



const Scroll = (props) =>{ // wszystko co owija to jego propsy

    return (
        <div style={{overflowY: 'scroll', border:'1px solid black', height:'800px'}}>
        {props.children}
        </div>
    )
}

export default Scroll;