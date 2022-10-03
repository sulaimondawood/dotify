import styles from "../styles/page/sidebar.module.css";

import SideBarContent from "./SideBarContent";
import { FaPlayCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
const SideBar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        DO <span className={styles.logo_text}>tify</span>
      </div>
      <input type="text" className={styles.search} />
      <div className={styles.left}>
        <SideBarContent route="/" home="Home" homeIcon={<FiSearch />} />
        <SideBarContent route="/" home="Previous" homeIcon={<FiSearch />} />
        <SideBarContent route="/" home="Top PlayList" homeIcon={<FiSearch />} />
        <SideBarContent route="/" home="Home" homeIcon={<FiSearch />} />
      </div>
    </aside>
  );
};

export default SideBar;
