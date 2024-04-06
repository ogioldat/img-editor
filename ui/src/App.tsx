import './App.css'
import { useWasm } from './use-wasm'
import ImageEditor from './ImageEditor'

function App() {
  const wasm = useWasm()
  return (
    <>
      <div>
        Edit your image
      </div>
      {
        !!wasm ? <ImageEditor wasm={wasm} /> : <div>Loading wasm</div>
      }
    </>
  )
}

export default App
