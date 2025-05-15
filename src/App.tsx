import { makeStyles } from '@fluentui/react-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { darkTheme } from './theme';
import { createDOMRenderer, RendererProvider, FluentProvider } from '@fluentui/react-components';
import Navbar from '@/components/Navbar/Navbar';

// Import pages
import Trade from '@/pages/Trade/Trade';
import Earn from '@/pages/Earn/Earn';
import Bridge from '@/pages/Bridge/Bridge';

// Create a DOM renderer for Fluent UI
const renderer = createDOMRenderer();

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    padding: '0px',
    margin: '0px',
  },
  fluentProvider: {
    height: '100%',
    width: '100%',
    padding: '0px',
    margin: '0px',
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
  }
});

function App() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <RendererProvider renderer={renderer}>
        <FluentProvider theme={darkTheme} className={styles.fluentProvider}>
          <BrowserRouter>
            <Navbar />
            <main className={styles.mainContainer}>
              <Routes>
                <Route path="/" element={
                  <div>
                    <h1>Welcome to Subwayrabbit</h1>
                    {/* Add your home page content here */}
                  </div>
                } />
                <Route path="/trade" element={<Trade />} />
                <Route path="/earn" element={<Earn />} />
                <Route path="/bridge" element={<Bridge />} />
              </Routes>
            </main>
          </BrowserRouter>
        </FluentProvider>
      </RendererProvider>
    </div>
  );
}

export default App;
