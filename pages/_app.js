import "../styles/globals.css";
import "../styles/profile.css";
import { ThemeProvider } from "next-themes";
import NavBar from "../components/navbar";
import App from "next/app";

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
