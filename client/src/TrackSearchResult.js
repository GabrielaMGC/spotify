import React from "react"
import "./Track.css"
import { useEffect, useState } from "react"

export default function TrackSearchResult(props) {
  function handlePlay() {
     props.setClicado(true)
    props.chooseTrack(props.track)
  }

  
  useEffect(()=>{
    props.EnvioEstado(true)
  }) 

  return (
    <div
      className=" formato"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <div className="esquerda">
       <img src={props.track.albumUrl} style={{ height: "75px", width: "75px" }} /> 
      </div>
      <div className="direita">
        <div className="musica">{props.track.title}</div>
        <div className="cantor">{props.track.artist}</div>
      </div>
    </div>
  )
}
