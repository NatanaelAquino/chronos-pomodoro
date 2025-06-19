import styles from './Styles.module.css';
type HeadingProps = {
  children: React.ReactNode;
};
export function Heading(props: HeadingProps) {
    const {children} = props
    return (
    <>
      <h1 className={styles.Heading}> {children}</h1>
    </>
  );
}
