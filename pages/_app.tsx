import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import '@app/styles/globals.css';
type MuseAIAppProps = {};

export default function MuseAI({
  Component,
  pageProps,
}: AppProps & MuseAIAppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

MuseAI.getInitialProps = async (
  context: AppContext
): Promise<MuseAIAppProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx };
};
