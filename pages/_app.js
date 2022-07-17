import NavBar from '../components/NavBar';
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider> 
  );
}

export default MyApp
