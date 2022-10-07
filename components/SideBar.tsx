import styles from "../styles/components/sidebar.module.css";
import { GrHomeRounded } from "react-icons/gr";
import { MdHomeFilled } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { BiLibrary } from "react-icons/bi";
import { MdPlaylistAdd } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <h1>Dotify.</h1>
      <div className={styles.sidebar_top_wrapper}>
        <Link href="">
          <div className={styles.sidebar_btns}>
            <div className={styles.home_logo}>
              <MdHomeFilled />
            </div>
            <p className={styles.logo_text}>Home</p>
          </div>
        </Link>
        <Link href="">
          <div className={styles.sidebar_btns}>
            <div className={styles.home_logo}>
              <FiSearch />
            </div>
            <p className={styles.logo_text}>Search</p>
          </div>
        </Link>
        <Link href="">
          <div className={styles.sidebar_btns}>
            <div className={styles.home_logo}>
              <VscLibrary />
            </div>
            <p className={styles.logo_text}>Your Library</p>
          </div>
        </Link>
      </div>
      <div className={styles.sidebar_middle}>
        <Link href="">
          <div className={styles.sidebar_btns}>
            <div className={styles.home_logo}>
              <MdPlaylistAdd />
            </div>
            <p className={styles.logo_text}>Create Playlist</p>
          </div>
        </Link>
        <Link href="">
          <div className={styles.sidebar_btns}>
            <div className={styles.home_logo}>
              <AiOutlineLike />
            </div>
            <p className={styles.logo_text}>Liked Songs</p>
          </div>
        </Link>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
      </div>
    </div>
  );
};

export default SideBar;
