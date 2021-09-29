
import './App.scss';
import Contact from './components/ContactDrop/contactDrop';
import Container from './components/Container/container';
import Header from './components/Header/header';
import Drawer from './components/Navigation/Drawer/drawer';
import MenuToggle from './components/Navigation/MenuToggle/menuToggle';
import Pages from './components/Pages/pages';

function App() {
  return (
    <div className='App container-fluid'>
      <Drawer/>
      <MenuToggle/>
     <Container>
       <Header/>
       <Contact/>
       <Pages/>
     </Container>
    </div>
  );
}

export default App;
