import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { User } from './pages/User.jsx';
import { NotFound } from './pages/NotFound';
import { Alert } from "./components/layout/Alert.jsx";
import { GithubProvider } from './contex/github/GithubContex';
import { AlertProvider } from './contex/alert/AlertContex';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen ">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}
export default App;