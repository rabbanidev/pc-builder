import store from "@/rtk/app/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(
        <>
          <Toaster />
          <Component {...pageProps} />
        </>
      )}
    </Provider>
  );
};

export default App;
