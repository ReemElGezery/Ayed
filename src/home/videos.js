// import React from 'react';
// import { Player } from 'video-react';
// import 'video-react/dist/video-react.css'
// import NavBar from '../NavBar';
// import { useTranslation } from 'react-i18next';
// import Footer from '../home/footer'

// export default props => {
//   const { t, i18n } = useTranslation();

  
//     return (
//       <div >
//         <NavBar></NavBar>
//         <h1 className="headervid">{t('video.1')}</h1>
//         <div  className="flex-container1">
//         <div className="video1">
//       {/* <Player>
     
//         <source src="https://www.youtube.com/watch?v=UJ3FvOcw4lQ" />
//       </Player> */}
     
     
//       </div> 
//       <br></br>
// <div className="video1">
//        <Player>
     
//        <source src="https://www.youtube.com/watch?v=viUWVjKK1cU" />
//      </Player>
//      </div>
//      <div className="video1">
//        <Player>
     
//        <source src="https://www.youtube.com/watch?v=WyIGkhoQJGQ" />
//      </Player>
//      </div>

//      </div>
//      <br></br>
//      <div  className="flex-container1">
//         <div className="video1">
//       <Player>
     
//         <source src="https://www.youtube.com/watch?v=GXTRUGNaw2g" />
//       </Player>
//       </div> 
//       <br></br>
// <div className="video1">
//        <Player>
     
//        <source src="https://www.youtube.com/watch?v=iaVN3yzVSlc" />
//      </Player>
//      </div>
//      <div className="video">
//        <Player>
     
//        <source src="https://www.youtube.com/watch?v=ZLzarOSRTNU" />
//      </Player>
//      </div>

//      </div>
//      <div className="Footer"> 
//      <Footer></Footer>
//      </div>


     
//      </div> 
//     );
//   };


import React from "react";
import ReactPlayer from "react-player"
import NavBar from '../NavBar';
import { useTranslation } from 'react-i18next';
import Footer from '../home/footer'
  

const Video =() =>{
  const { t, i18n } = useTranslation();
  return(

    <div>
       <NavBar></NavBar>
        <h1 className="headervid">{t('video.1')}</h1>
        <div  className="flex-container1">
         
      <iframe
      className="video1"
       title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/wnqBDcX1mH4?autoplay=0`}
       

      />
   

      <iframe
       className="video1" 
       title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
       
        src={`https://youtube.com/embed/viUWVjKK1cU?autoplay=0`}
      />
      <iframe
       className="video1" 
       title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
      
        src={`https://youtube.com/embed/WyIGkhoQJGQ?autoplay=0`}
      />
       </div>
      <br></br>
      <div  className="flex-container1">
      <iframe
       className="video1" 
       title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
       
        src={`https://youtube.com/embed/iaVN3yzVSlc?autoplay=0`}
      />
      <iframe
       className="video1" 
       title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
       
        src={` https://youtube.com/embed/ZLzarOSRTNU?autoplay=0 `}
      />
      <iframe
       className="video1" 
       title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        
        src={`https://youtube.com/embed/GXTRUGNaw2g?autoplay=0`}
      />
</div>













     



     {/* <ReactPlayer className="video1" url="https://www.youtube.com/watch?v=wnqBDcX1mH4" /> */}
    </div>
  )
}
export default Video;