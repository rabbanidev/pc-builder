import store from "@/rtk/app/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
};

export default App;
