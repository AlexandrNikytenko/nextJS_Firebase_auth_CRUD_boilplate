import "../styles/global.css";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={100}
        height={10}
        showOnShallow={true}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <style jsx global>
        {`
          body {
            font-family: "Didact Gothic", "Playfair Display", sans-serif;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
