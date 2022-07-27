import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import 'react-loading-skeleton/dist/skeleton.css'



const App = () => {
  return (
    <SkeletonTheme baseColor="#ccc" highlightColor="#444">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:userId" element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  )
}

export default App