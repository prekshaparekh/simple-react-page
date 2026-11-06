import { useState } from 'react'
import initCat from './assets/initcat.jpeg'
import okCat from './assets/okcat.png'
import afterCat from './assets/aftercat.jpg'
import './App.css'

const content = {
  initial: { img: initCat,text1:'I am sorry please dont hate me :(', text2: 'are you still mad at me ?' },
  stillMad: { img: afterCat,text1:'I am so sorry please reconsider', text2: 'I will never do this mistake again' },
  notMad: { img: okCat,text1:'thank you, I love you so much <3' , text2: 'you are the last person I want mad 🥲' },
}

function App() {
  const [status, setStatus] = useState('initial')
  const current = content[status]

  return (
    <>
      <section id="center">
        <div>
          <h1>{current.text1}</h1>
        </div>
        <div className="hero">
          <img src={current.img} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>{current.text2}</h1>
        </div>
        <button
          type="button"
          className="no"
          onClick={() => setStatus('notMad')}
        >
          NO
        </button>
        <button
          type="button"
          className="Yes"
          onClick={() => setStatus('stillMad')}
        >
         YES
        </button>
      </section>

        </>
  )
}

export default App
