import React, { useEffect }  from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import colorNames from 'colornames';


const Voice = ({ setColorValue, colorValue, setHexValue, setRightColorValue }) => {
    
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  useEffect(() => {

    const func = (value) => {

      setColorValue(value)
      setRightColorValue(true)
      setHexValue(colorNames(value))


    }


    const noSpace = transcript.split(" ").slice(-2).join("")
    

    const space = transcript.split(" ")[transcript.split(" ").length - 1];

    colorNames(noSpace) !== undefined ? func(noSpace) : func(space) ;

    if(colorNames(space) === undefined) setColorValue("");
    
  }, [transcript])
  // transcript is the text of the voice
  // resetTranscript is the clear out the transcript

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <div>
    <span style={{fontSize : "50%"}} onClick={startListening}>Allow Audio</span>

    </div>
  )
}
export default Voice