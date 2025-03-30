import Header from "./components/Header";
import Mainpages from "./components/Pages/Mainpage/Mainpages";
import AllPages from "./components/Pages/AllPages/AllPages";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Ipad from "./components/Pages/ipad/ipad";
import Iphone from "./components/Pages/Iphone/Iphone";
import Mac from "./components/Pages/Mac/Mac";
import Four04 from "./components/Pages/Four04/Four04";
import Sharedpage from "./components/Pages/Sharedpage/Sharedpage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sharedpage />}>
          <Route path="/" element={<Mainpages />} />
          <Route path="mac" element={<Mac />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="iphone" element={<Iphone />} />
        </Route>
        <Route path="*" element={<Four04 />} />
      </Routes>
    </>
  );
}

export default App;
