import React from "react";
import {
  Container,
  Content,
  BgImg,
  CTA,
  CTALogoOne,
  SignUp,
  Description,
  CTALogoTwo
} from "./styles/LoginElements";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg'></CTALogoOne>
          <SignUp>GET ALL THERE</SignUp>
          <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney + subscription. As of 01/01/24, the price of Disney + and The Disney Bundle will increase by $1.</Description>
          <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
        <BgImg />
      </Content>
    </Container>
  );
};

export default Login;
