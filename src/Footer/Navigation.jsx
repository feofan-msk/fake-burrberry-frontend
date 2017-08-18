import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  display: none;
  @media screen and (min-width: 48rem) {
    display: block;
  }
`;
const Title = styled.h4`
  @media screen and (min-width: 48rem) {
    margin: 0 0 1rem 0;
    padding: 0;
    font-family: Raleway;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.875rem;
    text-transform: uppercase;
    color: #171717;
  }
`;
const Link = styled.a`
  @media screen and (min-width: 48rem) {
    display: block;
    margin-bottom: 0.75rem;
    font-family: Raleway;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #999999;
    text-decoration: none;
  }
`;
const Image = styled.img`
  @media screen and (min-width: 48rem) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
const UnderlinedLink = styled.a`
  @media screen and (min-width: 48rem) {
    font-family: Raleway;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1rem;
    color: #171717;
    border-bottom: 1px solid #171717;
  }
`;

export default () =>
  (<Navigation>
    <div className="row">
      <div className="col-md-3">
        <Title>customer service</Title>
        <nav>
          <Link href="#">Contact Us</Link>
          <Link href="#">Payment</Link>
          <Link href="#">Shipping</Link>
          <Link href="#">Returns</Link>
          <Link href="#">Faqs</Link>
          <Link href="#">Live Chat</Link>
          <Link href="#">The Burberry App</Link>
          <Link href="#">Store Locator</Link>
        </nav>
      </div>

      <div className="col-md-3">
        <Title>our company</Title>
        <nav>
          <Link href="#">Our History</Link>
          <Link href="#">Burberry Group Pic</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Corporate Responsibility</Link>
          <Link href="#">Site Map</Link>
        </nav>
      </div>

      <div className="col-md-3">
        <Title>legal &amp; cookies</Title>
        <nav>
          <Link href="#">Terms &amp; Conditions</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Accessibility Statement</Link>
          <Link href="#">Japan Only - SCTL indications</Link>
        </nav>
      </div>
      <div className="col-md-3">
        <Image
          src="http://assets.burberry.com/is/image/Burberryltd/933f04c94a361dfd816c77528ec0e7286921051b.jpg?$BBY_V2_BASIC$&wid=474"
          alt="Store"
        />
        <UnderlinedLink>Find a store</UnderlinedLink>
      </div>
    </div>
  </Navigation>);
