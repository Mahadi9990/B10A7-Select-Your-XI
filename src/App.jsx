import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./page/Main";

export default function App() {
  const [coin, setcoin] = useState(50000000);
  return (
    <div>
      <Navbar coin={coin} />
        <Main/>
    </div>
  )
}
