import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  console.log(Component);

  return <Component {...pageProps} />;
}
