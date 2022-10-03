import SideBar from "./SideBar";
import Style from "../styles/components/layout.module.css";

interface IChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: IChildren) => {
  return (
    <div className={Style.layout}>
      <div className={Style.sidebar}>
        <SideBar />
      </div>
      <div className={Style.children}>{children}</div>
    </div>
  );
};

export default Layout;
