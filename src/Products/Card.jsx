import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedNumber, FormattedPlural } from 'react-intl';
import PropTypes from 'prop-types';
import { Link as RouteLink } from 'react-router-dom';

import LikeIcon from '../common/LikeIcon';

const Link = styled(RouteLink)`text-decoration: none;`;
const Card = styled.div`
  display: block;
  margin-bottom: 2rem;
  opacity: ${props => (props.show ? '1' : '0')};
  transition: opacity 0.2s linear;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.01);
    transition: transform 0.2s linear;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Label = styled.p`
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;
const Title = styled.h3`
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #171717;

  margin: 0 0 0.5rem;

  @media screen and (min-width: 48rem) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  @media screen and (min-width: 62rem) {
    font-size: 1rem;
  }
`;
const Colours = styled.div`
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;

  margin-bottom: 0.25rem;
`;
const Price = styled.h5`
  margin: 0;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
}
`;
const Underline = styled.span`border-bottom: 1px solid #171717;`;
const LikeButton = styled.button`
  margin-left: 1rem;
  padding: 0;
  border: 0;
  outline: none;
  background: none;
  cursor: pointer;
`;

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      isImageLoaded: false,
      isActive: false,
      isHovering: false,
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  toggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  handleImageLoaded() {
    this.setState({ isImageLoaded: true });
  }

  handleMouseOver() {
    this.setState({ isHovering: true });
  }

  handleMouseOut() {
    this.setState({ isHovering: false });
  }

  render() {
    const images = this.props.images || [];
    const imageIndex = this.state.isHovering ? 1 : 0;
    return (
      <Card show={this.state.isImageLoaded}>
        <Link to={`${this.props.to}`}>
          <Image
            src={`${images[imageIndex]}?$BBY_V2_ML_3X4$&hei=866&wid=650`}
            alt={this.props.title}
            onLoad={this.handleImageLoaded}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          />
        </Link>
        <InfoWrapper>
          <Link to={`${this.props.to}`}>
            {this.props.label && <Label>{this.props.label}</Label>}

            <Title>{this.props.title}</Title>

            <Colours>
              Available in{' '}
              <Underline>
                {this.props.coloursAmount}{' '}
                <FormattedPlural value={this.props.coloursAmount} one="colour" other="colours" />
              </Underline>
            </Colours>

            <Price>
              <FormattedNumber
                value={this.props.price}
                style="currency" // eslint-disable-line
                currency={this.props.currency}
                minimumFractionDigits="0"
              />
            </Price>
          </Link>

          <LikeButton onClick={this.toggle}>
            <LikeIcon fill={this.state.isActive ? '#171717' : 'none'} />
          </LikeButton>
        </InfoWrapper>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  to: PropTypes.string.isRequired,
  images: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  label: PropTypes.string,
  coloursAmount: PropTypes.number,
  currency: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  label: null,
  coloursAmount: 1,
};

export default ProductCard;
