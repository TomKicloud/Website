import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "../components/navbar";
import App from "next/app";
import { SWRConfig } from "swr";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider enableSystem={true} attribute="class">
        <NavBar></NavBar>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
