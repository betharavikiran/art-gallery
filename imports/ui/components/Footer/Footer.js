import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import './Footer.scss';

const Footer = () => (
  <div className="Footer">
    <div className="module-small bg-dark">
      <div className="container">
        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <div className="widget">
                <h5 className="widget-title font-alt">About Art Gallery</h5>
                <p>A collection of Fine art work.</p>
                <p>Phone: +1 234 567 89 10</p>Fax: +1 234 567 89 10
                            <p>Email:<Link to="/">info@artgallery.com</Link></p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="widget">
                <h5 className="widget-title font-alt">Categories</h5>
                <ul className="icon-list">
                  <li><Link to="/">Painting</Link></li>
                  <li><Link to="/">Pottery</Link></li>
                  <li><Link to="/">Sculpture</Link></li>
                  <li><Link to="/">Architecture</Link></li>
                  <li><Link to="/">Conceptual art</Link>></li>
                </ul>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="widget">
                <h5 className="widget-title font-alt">Artists</h5>
                <ul className="icon-list">
                  <li><Link to="/">Jack Doe</Link></li>
                  <li><Link to="/">Amanda Jake</Link></li>
                  <li><Link to="/">Tom Peterson</Link></li>
                  <li><Link to="/">Mike Wilson</Link></li>
                  <li><Link to="/">Brett Matter</Link></li>
                </ul>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="widget">
                <h5 className="widget-title font-alt">Popular Art Works</h5>
                <ul className="widget-posts">
                  <li className="clearfix">
                    <div className="widget-posts-image"><Link to="/"><img src="img/footer/rp-1.jpg" alt="Post Thumbnail" /></Link></div>
                    <div className="widget-posts-body">
                      <div className="widget-posts-title"><Link to="/">Designer Desk Essentials</Link></div>
                      <div className="widget-posts-meta">The Huge Pot</div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="widget-posts-image"><Link to="/"><img src="img/footer/rp-2.jpg" alt="Post Thumbnail" /></Link></div>
                    <div className="widget-posts-body">
                      <div className="widget-posts-title"><Link to="/">Realistic Business Card Mockup</Link></div>
                      <div className="widget-posts-meta">15 February</div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
    <hr className="divider-d" />
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p className="copyright font-alt">&copy; 2017 &nbsp;<a href="/">Art Gallery</a>, All Rights Reserved</p>
          </div>
          <div className="col-sm-6">
            <div className="footer-social-links"><a href="#"><i className="fa fa-facebook" /></a><a href="#"><i className="fa fa-twitter" /></a><a href="#"><i className="fa fa-dribbble" /></a><a href="#"><i className="fa fa-skype" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

Footer.propTypes = {};

export default Footer;
