import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <div className={`container-fluid ${styles.body} page`}>
        <div className="row">
          <div className="col-12 text-center">
            This is frist page of my next app
          </div>
        </div>
      </div>
    </main>
  );
}
