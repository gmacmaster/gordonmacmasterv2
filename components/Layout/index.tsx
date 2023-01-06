import styles from "../../styles/Home.module.css";
import Footer from "./footer";
import Header from "./header";

interface ILayoutProps {
  children?: any;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.main}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
