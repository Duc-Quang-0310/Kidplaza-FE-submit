import { ReactNode, FC, Suspense } from "react";

import s from "./AuthLayout.module.css";
import LayoutImg from "../../Image/layout.png";
import MobileBanner from "../../Image/Mobile-banner.png";

interface Props {
  children: ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => (
  <section className={s.AuthSection}>
    <div className={s.FormContainer}>
      <a
        href="https://www.kidsplaza.vn/"
        target="_blank"
        className={s.StickyHeader}
      >
        <img src={MobileBanner} alt="Mobile image" loading="lazy" />
      </a>
      <Suspense fallback={<div />}>{children}</Suspense>
    </div>
    <div className={s.ImageContainer}>
      <img src={LayoutImg} alt="Layout image" />
    </div>
  </section>
);

export default AuthLayout;
