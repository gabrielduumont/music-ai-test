import { getBackgroundImageUrl } from '@app/utils/getBackgroundImageUrl';
import styles from './styles.module.scss';

type PageContentProps = {
  children: React.ReactElement | React.ReactElement[];
  backgroundImgUrl?: string;
};

export default function PageContent({
  children,
  backgroundImgUrl,
}: PageContentProps) {
  return (
    <div
      className={
        backgroundImgUrl ? styles['container-no-padding'] : styles.container
      }
      data-background={!!backgroundImgUrl}
      style={{
        backgroundImage: getBackgroundImageUrl(backgroundImgUrl),
      }}
    >
      {backgroundImgUrl ? (
        <div className={styles['background-overlay']}>
          <>{children}</>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
