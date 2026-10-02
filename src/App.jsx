import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hello from "./pages/Hello";
import Hi from "./pages/Hi";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/wow/woo/hi" element={<Hi />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
