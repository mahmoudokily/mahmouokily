import "../styles/globals.css";
import { AppWrapper } from "../common/context";
function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
