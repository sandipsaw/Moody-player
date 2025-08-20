import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import axios from "axios"

const FaceDetection = ({setmusics}) => {
  const videoRef = useRef();


  // Start webcam stream
  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Camera error: ", err));
  };

  // Load models
  const loadModels = async () => {
    await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
    await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
    await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    startVideo();
  };

  // Detect faces every frame
     async function detectNow(){
     const detections = await faceapi.detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceLandmarks()
      .withFaceExpressions();

      
        let mostprobableExpression = 0
      let _mood = ''

          if(!detections || detections.length === 0){
            console.log("Face not found");
            
          }

        for(const expression of Object.keys(detections[0].expressions)){
          // console.log("moods",mood);
          if(detections[0].expressions[expression]>mostprobableExpression){
            mostprobableExpression=detections[0].expressions[expression]
            _mood = expression
          }

        }
        console.log(_mood);

        await axios.get(`http://localhost:3000/songs?mood=${_mood}`).then(response =>{
          console.log(response.data.song);

          setmusics(response.data.song)
          
        })

        
           
  }

     

  useEffect(() => {
    loadModels();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <video
        ref={videoRef}
        autoPlay
        muted

        className="rounded-xl shadow-lg"
        style={{ width: "640px", height: "480px" }}
      />
          <button
          onClick={detectNow}
          >Detect Face </button>  
    </div>
  );
};

export default FaceDetection;
