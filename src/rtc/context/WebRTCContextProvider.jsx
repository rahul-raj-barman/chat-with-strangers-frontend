// import WebRTCContext from "./WebRTCContext";
// import { useEffect, useRef, useState } from "react";
// import io from 'socket.io-client'


// const WebRTCContextProvider = ({children}) => {

//     const [connect, setConnect] = (false)

//     const localVideoRef = useRef(null)
//     const remoteVideoRef = useRef(null)

//     const [localStream, setLocalStream] = useState(null)
//     const [peerConnection, setPeerConnection] = useState(null)

//     let socket;
//     if(connect) socket = io('http://localhost:8000')      

//     const peerConnectionConfig = {
//         iceServers : [{ urls: 'stun:stun.l.google.com:19302' }],
//     }

//     useEffect(() => {
//         navigator.mediaDevices.getUserMedia({video: true, audio: true})
//         .then((stream) => {
//             setLocalStream(stream)
//             if(localVideoRef.current) {
//                 localStream.current.srcObject = stream
//             }

//             const pc = new RTCPeerConnection(peerConnectionConfig)
//             setPeerConnection(pc)

//             stream.getTracks().forEach((track) => {
//                 pc.addTrack(track, stream)
//             })

//             pc.onTrack((event) => {
//                 if(remoteVideoRef.current) {
//                     remoteVideoRef.current.srcObject = event.streams[0]
//                 }
//             })

//             pc.onicecandidate((event) => {
//                 if(event.cadidate) {
//                     socket.emit('candidate', event.candidate);
//                 }
//             })
//         })
//         .catch((error) => console.error('Error accessing media devices.', error));
//     }, [])


//     useEffect(() => {
//         socket.on('offer', async (data) => {
//           if (!peerConnection) return;
//           await peerConnection.setRemoteDescription(new RTCSessionDescription(data));
//           const answer = await peerConnection.createAnswer();
//           await peerConnection.setLocalDescription(answer);
//           socket.emit('answer', answer);
//         });
    
//         socket.on('answer', (data) => {
//           peerConnection.setRemoteDescription(new RTCSessionDescription(data));
//         });
    
//         socket.on('candidate', (candidate) => {
//           peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
//         });
//       }, [peerConnection]);
    
//       const createOffer = async () => {
//         if (!peerConnection) return;
//         const offer = await peerConnection.createOffer();
//         await peerConnection.setLocalDescription(offer);
//         socket.emit('offer', offer);
//       };
    
//       const value = {
//         localVideoRef,
//         remoteVideoRef,
//         createOffer,
//       };
    
//       return (
//         <WebRTCContext.Provider value={value}>
        
//             {children}
      
//       </WebRTCContext.Provider>
//       )
//     }
    
//     export default WebRTCContextProvider