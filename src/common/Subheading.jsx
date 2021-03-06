import styled from 'styled-components';

const Header = styled.h2`
  display: inline-block;
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 1rem;

  font-family: Raleway;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19;
  color: #171717;
  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 62rem) {
    display: block;
    text-align: center;
    border: none;
    margin-bottom: 1.5rem;
  }
}
`;
export default Header;
