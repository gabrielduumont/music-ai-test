import styles from './styles.module.scss';

type PageContentProps = {
  children: React.ReactElement | React.ReactElement[];
};

export default function PageContent({ children }: PageContentProps) {
  return (
    <div className={styles.container}>
      <>{children}</>
    </div>
  );
}
