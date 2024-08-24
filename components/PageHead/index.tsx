import { APP_TITLE } from '@app/utils/constants/general';
import Head from 'next/head';

type PageHeadProps = {
  title?: string;
};

export default function PageHead({ title }: PageHeadProps) {
  return (
    <Head>
      <title>{title ? `${title} - ${APP_TITLE}` : APP_TITLE}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
