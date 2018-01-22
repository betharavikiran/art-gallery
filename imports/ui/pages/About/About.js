import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import './../../stylesheets/style.css';

const About = () => (
  <div className="main">
    <section className="module bg-dark-60 about-page-header" data-background="assets/images/about_bg.jpg">
      <div className="container">
        <Grid>
          <Row>
            <Col sm={6} smOffset={3}>
              <h2 className="module-title font-alt">Art work by Creative Minds</h2>
              <div className="module-subtitle font-serif">A future crypto economy where best creations are transacted over crypto currency.</div>
            </Col>
          </Row>
          <VideoPlayer className="video-player" videoId="ptZ5onC-_SA" start="35" />
        </Grid>
      </div>
    </section>
    <section className="module">
      <div className="container">
        <Grid>
          <Row>
            <Col sm={6}>
              <h5 className="font-alt">Block-chain backed Art Gallery</h5><br />
              <p>Artisians exchange their creative work via crypto currency.</p>
              <p>Investors will have an opportunity to fund their imaginative work and bring it to life..</p>
            </Col>
            <Col sm={6}>
              <h6 className="font-alt"><span className="icon-tools-2" /> Creative Work
              </h6>
              <div className="progress">
                <div className="progress-bar pb-dark" aria-valuenow="60" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt" /></div>
              </div>
              <h6 className="font-alt"><span className="icon-strategy" /> Block-chain Economy
              </h6>
              <div className="progress">
                <div className="progress-bar pb-dark" aria-valuenow="80" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt" /></div>
              </div>
              <h6 className="font-alt"><span className="icon-target" /> Funding flexibility
              </h6>
              <div className="progress">
                <div className="progress-bar pb-dark" aria-valuenow="50" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt" /></div>
              </div>
              <h6 className="font-alt"><span className="icon-camera" /> Cluster of Artists
              </h6>
              <div className="progress">
                <div className="progress-bar pb-dark" aria-valuenow="90" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt" /></div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
  </div>
);

export default About;
