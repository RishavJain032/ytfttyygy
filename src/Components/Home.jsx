import React from 'react'
import Navmenu from './Nav';

const Home = () => {
  return (<>
    <div style={{backgroundColor:"#000",padding:"20px 0px",height : "600px"}}>
        <Navmenu />
        <h1 style={{fontSize:"60px",textAlign:"center",color:"#fff"}}>get the<span style={{color:"blue"}}> right job<br/></span> you deserve</h1>
        <p style={{textAlign:"center",color:"#fff",padding:"20px 0px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, impedit consequatur hic nulla quos aspernatur</p>

    {/* </div> */}
    <div>
        <input type='search' placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job Title or Keyword &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | NewYork,USA'/>
        <div>
    <button style={{backgroundColor : "Blue" ,width : "80px",height : "35px" ,borderRadius : "25px",marginLeft : "-100px",border : "none"}}>Submit</button>

    </div>
    </div>
    </div>
    
    </>
  )
}

export default Home