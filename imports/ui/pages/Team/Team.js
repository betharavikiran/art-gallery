import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import data from './data';

import './Team.scss';
import './../../stylesheets/style.css';
import PropTypes from 'prop-types';


const Team = () => (
  <section className="module" id="team">
    <div className="container">
      <Grid>
        <Row>
          <Col sm={6} smOffset={3} >
            <h2 className="module-title font-alt">Meet Our Team</h2>
            <div className="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
          </Col>
        </Row>
        <Row>
          <h4 className="module-subtitle font-alt team-group">Advisors</h4>
        </Row>
        <Row>
          <div className="team-members">
            {data.advisors.map(tm => (
              <TeamMemberEntry key={tm.profileSlug} {...tm} />
                    ))}
          </div>
        </Row>
        <Row>
          <h4 className="module-subtitle font-alt team-group">Artists</h4>
        </Row>
        <Row>
          <div className="team-members">
            {data.artists.map(tm => (
              <TeamMemberEntry key={tm.profileSlug} {...tm} />
                ))}
          </div>
        </Row>
        <Row>
          <h4 className="module-subtitle font-alt team-group">Technology</h4>
        </Row>
        <Row>
          <div className="team-members">
            {data.technologists.map(tm => (
              <TeamMemberEntry key={tm.profileSlug} {...tm} />
                ))}
          </div>
        </Row>
      </Grid>
    </div>
  </section>
);

const TeamMemberEntry = ({
  profileSlug, displayName, jobDescription, pictureUrl, salutation, message, facebookUsername, twitterUserName, linkedinUserName,
}) => (
  <div className="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" onClick="wow fadeInUp">
    <div className="team-item">
      <div className="team-image"><img className="img-responsive img-circle" src={pictureUrl} alt="Member" />
        <div className="team-detail">
          <h5 className="font-alt">{salutation}</h5>
          <p className="font-serif">{message}</p>
          <div className="team-social">
            <a href={facebookUsername}><i className="fa fa-facebook" /></a>
            <a href={twitterUserName}><i className="fa fa-twitter" /></a>
            <a href={linkedinUserName}><i className="fa fa-linkedin" /></a>
          </div>
        </div>
      </div>
      <div className="team-descr font-alt">
        <div className="team-name">{displayName}</div>
        <div className="team-role">{jobDescription}</div>
      </div>
    </div>
  </div>
);


TeamMemberEntry.propTypes = {
  displayName: PropTypes.string.isRequired,
  jobDescription: PropTypes.string,
  pictureUrl: PropTypes.string.isRequired,
  salutation: PropTypes.string,
  message: PropTypes.string,
  profileSlug: PropTypes.string.isRequired,
  facebookUsername: PropTypes.string,
  twitterUserName: PropTypes.string,
  linkedinUserName: PropTypes.string,
};

TeamMemberEntry.defaultProps = {
  jobDescription: '',
  salutation: 'Hi Every One',
  message: 'Very nice to meet you',
  facebookUsername: '',
  twitterUserName: '',
  linkedinUserName: '',
};

export default Team;
