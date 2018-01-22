import React from 'react';

import Testimonials from '../../components/Testimonials/Testimonials';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

import './Index.scss';

const Index = () => (
  <div className="Home">
    <section className="home-section bg-dark-30" id="home" data-background="img/team/1.jpg">
      <VideoPlayer className="video-player" videoId="GRyJ_EqudGM" />
      <div className="titan-caption">
        <div className="caption-content">
          <div className="font-alt mb-30 titan-title-size-1">Crypto meets Creative Minds</div>
          <div className="font-alt mb-40 titan-title-size-4">Artist's digital economy</div><a className="section-scroll btn btn-border-w btn-round" href="#about">White Paper</a>
        </div>
      </div>
      <Testimonials />
    </section>
  </div>
);

export default Index;
