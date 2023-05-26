import  NavBar from './scenes/NavBar';
import DotGroup from "./scenes/DotGroup";
import {useState} from 'react';
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px");


  return (
  <div className="app bg-deep-blue">
    <NavBar 
    // isTopOfPage={isTopOfPage}
    seletedPage = {selectedPage} 
    setSelectedPage={setSelectedPage}/>
    <div className='w-5/6 mx-auto md:h-full'>
    {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}

    </div>
  </div>);
 
}

export default App;
