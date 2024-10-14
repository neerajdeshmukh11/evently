// pages/_app.js
import { ClerkProvider } from '@clerk/nextjs';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
