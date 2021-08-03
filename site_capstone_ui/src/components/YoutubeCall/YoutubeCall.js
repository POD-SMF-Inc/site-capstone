import React, { Component } from 'react'
import YouTube from 'react-youtube'

class ReactYoutube extends React.Component {

    
//     videoOnReady(event) {
//         // access to player in all event handlers via event.target
//         //event.target.pauseVideo();
//         const player = event.target
//         //player.playVideoAt(50)
//         player.pauseVideo();
//         console.log(event.target)
//         console.log("state: " , player.getPlayerState())
//     }

//     videoOnPlay(event) {
//       // access to player in all event handlers via event.target
//       //event.target.pauseVideo();
//       const player = event.target
//       //player.playVideoAt(50)
//       player.playVideo();
//       console.log(event.target)
//       console.log("state2: " , player.getPlayerState())
//   }

//   videoOnPause(event) {
//     // access to player in all event handlers via event.target
//     //event.target.pauseVideo();
//     const player = event.target
//     //player.playVideoAt(50)
//     player.pauseVideo();
//     console.log(event.target)
//     console.log("state3: " , player.getPlayerState())
// }


//     render() {
//         const opts = {
//           height: '390',//390
//           width: '540',//640
//           playerVars: {
//             // https://developers.google.com/youtube/player_parameters
//             autoplay: 1,
//           },
//         };
//         const { videoId } = this.props
//         return (
//         <YouTube 
//         videoId={ videoId } 
//         opts={opts} 
//         onReady={this.videoOnReady} 
//         onPlay={this.videoOnPlay}
//         onPause={this.videoOnPause}/>)
//       }   
}
export default ReactYoutube