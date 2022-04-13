import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
