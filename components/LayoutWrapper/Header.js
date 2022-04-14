import LinkBtn from "../shared/LinkBtn";
import NavLink from "../shared/NavLink";
import GoogleAuth from "../GoogleAuth";
import Router from "next/router";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.header}>
      <div
        className="p-4 font-semibold text-2xl cursor-pointer "
        onClick={() => {
          Router.reload();
        }}
      >
        wellnessPlus
      </div>
      <div className="flex items-center">
        <NavLink href={`/about`} value={"About"} />
        <NavLink href={`/Programs`} value={"Programs"} />
        <NavLink href={`/contact`} value={"Contact"} />

        <LinkBtn
          value={"Login"}
          onHandleClick={() => {
            GoogleAuth();
          }}
        />
        <LinkBtn value={"Signup"} />
      </div>
    </div>
  );
};

export default Header;
