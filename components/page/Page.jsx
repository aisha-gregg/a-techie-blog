import React from "react";
import styles from "./Page.module.css";

export function Page({ children }) {
  return <main className={styles.page}>{children}</main>;
}
