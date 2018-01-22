import React from 'react';
import { Carousel, Grid, Row, Col } from 'react-bootstrap';

import './Testimonials.scss';
import PropTypes from 'prop-types';


class Testimonials extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    return (
      <Carousel
        activeIndex={this.state.index}
        direction={this.state.direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <div className="container testimonial-container">
            <Grid>
              <Row>
                <Col sm={8} smOffset={2} >
                  <h6 className="text-center">
                                  Our motivation Perfection simplified helps to
                                  craft meaningful experiences for the people around us, This mission inspires us
                                  to jump out of bed each day and guides every aspect of what we
                                  do.
                  </h6>

                </Col>
              </Row>
              <Col>
                <Col sm={2} smOffset={8} >
                  <img alt="" className="signature img-responsive" src="img/testimonials/2.png" />
                </Col>
              </Col>
            </Grid>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container testimonial-container">
            <Grid>
              <Row>
                <Col sm={8} smOffset={2} >
                  <h6 className="text-center">
                                  Our motivation Perfection simplified helps to
                                  craft meaningful experiences for the people around us, This mission inspires us
                                  to jump out of bed each day and guides every aspect of what we
                                  do.
                  </h6>

                </Col>
              </Row>
              <Col>
                <Col sm={2} smOffset={8} >
                  <img alt="" className="signature img-responsive" src="img/testimonials/2.png" />
                </Col>
              </Col>
            </Grid>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container testimonial-container">
            <Grid>
              <Row>
                <Col sm={8} smOffset={2} >
                  <h6 className="text-center">
                                  Our motivation Perfection simplified helps to
                                  craft meaningful experiences for the people around us, This mission inspires us
                                  to jump out of bed each day and guides every aspect of what we
                                  do.
                  </h6>

                </Col>
              </Row>
              <Col>
                <Col sm={2} smOffset={8} >
                  <img alt="" className="signature img-responsive" src="img/testimonials/2.png" />
                </Col>
              </Col>
            </Grid>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

// Todo - should replace testimonial entry with this compoment. currently not rendering for some reason.
const TestimonialEntry = ({
  id, testimonial, signature,
}) => (
  <Carousel.Item>
    <div className="container testimonial-container">
      <Grid>
        <Row>
          <Col sm={8} smOffset={2} >
            <h6 className="text-center">{testimonial}
            </h6>
          </Col>
        </Row>
        <Col>
          <Col sm={2} smOffset={8} >
            <img alt="" className="signature img-responsive" src={signature} />
          </Col>
        </Col>
      </Grid>
    </div>
  </Carousel.Item>
);


TestimonialEntry.propTypes = {
  testimonial: PropTypes.string.isRequired,
  signature: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};


export default Testimonials;
