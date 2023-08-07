import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import WindowIcon from "@mui/icons-material/Window";
import SettingsIcon from "@mui/icons-material/Settings";

import { readUserData } from "../firebase/readUserData";
import { useUser } from "../firebase/useUser";
import { setUserData } from "../store/userDataSlice";

import styles from "../styles/MainLayout.module.scss";


export function MainLayout({ children, title }) {
  const { user, logout } = useUser();
  const dispatch = useDispatch();

  useEffect(async () => {
    if (user) {
      const fetchUserData = await readUserData(
        user,
        process.env.NEXT_PUBLIC_FIREBASE_USER_DATA
      );
      if (fetchUserData) {
        dispatch(setUserData({ ...fetchUserData.data }));
      }
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Boilplate | {title}</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.header_links}>
          <Link href={"/"}>
            <a className={styles.header_link}>Home</a>
          </Link>
          <Link href={"/settings"}>
            <a className={styles.header_link}>Settings</a>
          </Link>
        </div>
        {user && <div className={styles.header_link}>Hello, {user.name}!</div>}
        <Button
          sx={{
            widht: "28px",
            fontSize: "10px",
            padding: "2px",
            backgroundColor: "#CD447D",
            color: "#fff",
          }}
          variant="outlined"
          onClick={() => logout()}
        >
          Log Out
        </Button>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footer_nav}>
          <Link href={"/"}>
            <a className={styles.footer_link}>
              <WindowIcon sx={{ color: "black" }} />
            </a>
          </Link>
          <Link href={"/settings"}>
            <a className={styles.footer_link}>
              <SettingsIcon sx={{ color: "black" }} />
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
}
