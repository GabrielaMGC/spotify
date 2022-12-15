import React from "react"
import "./Login.css"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=ee6ccf20944741ac848d681f7fecebaf&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center fundo"
    >
      <a className="btn btn-success btn-lg botao" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  )
}
