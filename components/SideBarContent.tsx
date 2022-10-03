import Link from "next/link";

import style from "../styles/components/sidebarcontent.module.css";

interface IHome {
  home: string;
  homeIcon: any;
  route?: any;
}
const SideBarContent = ({ home, homeIcon, route }: IHome) => {
  return (
    <div className={style.sidebar_content}>
      <div className={style.aside_icon}>{homeIcon}</div>
      <Link href={route}>
        <a className={style.link_route}>{home}</a>
      </Link>
    </div>
  );
};

export default SideBarContent;
