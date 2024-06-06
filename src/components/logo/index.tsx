import { FC } from "react";
import headerLogo from "../../branding/svg/transparent.svg";

const HeaderLogo: FC<Record<string, unknown>> = ({ ...props }) => {
  return <img src={headerLogo} height={115} {...props} />;
};

export default HeaderLogo;
