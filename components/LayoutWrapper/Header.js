import LinkBtn from "../shared/LinkBtn";
import NavLink from "../shared/NavLink";
import GoogleAuth from "../GoogleAuth";
import Router from "next/router";

const Header = () => {
  return (
    <div className="flex justify-between border-b-2">
      <div
        className="p-2 font-semibold text-2xl cursor-pointer "
        onClick={() => {
          Router.reload();
        }}
      >
        wellnessPlus
      </div>
      <div className="flex items-center">
        <NavLink href={`/about`} value={"About"} />
        <NavLink href={`/advice`} value={"Advice"} />
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
