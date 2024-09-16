import { useState } from 'react'
import axios from 'axios'
function App() {
  const [Images, setImages] = useState([])
  const GetImage = async () => {
    try {
      const responce = await axios.get("https://picsum.photos/v2/list")
      const data = responce.data;
      setImages(data);
    } catch (error) {
      console.error("Faild to fetching Image...");
    }
  }
  return (
    <>
      <div className="p-10">
        <button onClick={() => {
          GetImage()
        }} className='p-4 bg-green-800 rounded-md text-white'>Get Images</button>
        <div className="p-10">
          {Images.map((elm, i) => {
            return <img width={300} height={300} className='m-10 rounded-md inline-block' src={elm.download_url} alt="img" />
            
          })}
        </div>
      </div>
    </>
  )
}

export default App
