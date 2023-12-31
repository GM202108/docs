import React from "react";
import type { Props } from "@theme/Footer/Copyright";

import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SocialMediaLink = ({ Icon, title, href }) => {
  return (
    <IconButton
      component="a"
      href={href}
      style={{ color: "white" }}
      target="__blank"
      title={title}
    >
      <Icon />
    </IconButton>
  );
};

const BottomLink = ({ children, ...props }) => (
  <a style={{ color: "white", marginRight: "2em" }} {...props}>
    {children}
  </a>
);

export default function FooterCopyright({ copyright }: Props): JSX.Element {
  return (
    <div className="footer__bottom__content">
      <div className="footer__social">
        <SocialMediaLink
          Icon={GitHub}
          href="#"
          title="Github"
        />
        <SocialMediaLink
          Icon={Twitter}
          href="https://twitter.com/Fourieringint"
          title="@fourieringint"
        />
        <SocialMediaLink
          Icon={LinkedIn}
          href="https://www.linkedin.com/company/fourier-analytics/"
          title="Fourier Analytics LinkedIn"
        />
      </div>
      <div
        className="footer__copyright"
        // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: copyright,
        }}
      />
      <div className="footer__auxiliary">
        <BottomLink href="#">Terms</BottomLink>
        <BottomLink href="#">Privacy</BottomLink>
        <BottomLink href="#">Status</BottomLink>
      </div>
    </div>
  );
}
