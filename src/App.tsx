import { useState } from 'react'
import './App.css';
import { Image } from './components/Image'
import { Video } from './components/Video'

function App() {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    const topVideo = document.querySelector('#video') as HTMLElement;
    if (topVideo.getBoundingClientRect().top < window.innerHeight) {
      setPlay(true)
    }
  }

  window.addEventListener('scroll', handlePlay)

  return (
    <div className="App">
      <header>
        Play video
      </header>
      <div className="Content">
        <span>
          Projeto criado com base no video de Mario Souto sobre o <a href="https://youtu.be/ql0-0_taZpk">Lazy Load de Imagens</a>. 
          Contudo, o foco será o play do video, que será iniciado ao chegar no componente identificado pelo id.
        </span>
        <Image alt="nasa 1" src="https://fotospublicas.com/wp-content/uploads/2021/08/ksc-20210829-ph-kls01_0024_orig_1041x-682x1024.jpeg" />
        <Image alt="nasa 2" src="https://fotospublicas.com/wp-content/uploads/2021/08/51354072982_2f1cd1254b_o.jpg" />
        <Image alt="nasa 3" src="https://fotospublicas.com/wp-content/uploads/2021/09/51509561970_aba574ae91_o.jpg" />
        <Image alt="nasa 4" src="https://fotospublicas.com/wp-content/uploads/2021/08/51353834309_fccc4a3f24_k-683x1024.jpg" />
        <Video 
          id="video" 
          autoPlay={play} 
          loop={play}
          src="https://static.videezy.com/system/resources/previews/000/037/467/original/earth.mp4"
          type="video/mp4"
        />
        <Image alt="nasa 5" src="https://fotospublicas.com/wp-content/uploads/2020/07/50065375713_7bddc9a82d_k1-1024x683.jpg" />
      </div>
      <footer>
        &copy; Lorena Lima
      </footer>
    </div>
  );
}

export default App;
