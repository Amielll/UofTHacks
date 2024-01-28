import Header from "./Header"
import boombox from './boombox.png';

export default function Home() {

  return <>
   <Header focus="chatbot"></Header>
            <div className='header-container'>
            <p className='header'>Hi, I'm {' '} </p> <p className='header' style={{color: '#E7D7AB', marginLeft: '-3rem'}}> BoomBot!</p>
            </div>
            <div className='subheader-container'>
                <div className='subheader-elem'>I’m an AI BoomBox powered with Cohere!</div>
                <div className='subheader-elem'>Here to chat with you about music, and generate nostalgic Spotify playlists according to your tastes!</div>
            </div>

            <div class="image-container"><img src={boombox} alt="boombox" className="boombox chat"/></div>

            <div className='prompt-container'>
                <input className='prompt-text' placeholder='Enter your prompt here.'/>
            </div>

            <div class="corner-border top-right"></div>
            <div class="corner-border bottom-left"></div>
  </>
}