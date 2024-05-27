import React from 'react';
import './About.css';

function About() {
  return (
    <div className = "content">
      <div className="about">
        <img src={`${process.env.PUBLIC_URL}/images/Dicky-22-edit.jpg`} alt="Dicky Moore" />
        <div className="text-content">
          <h1>About Bearcraft</h1>
          <p>
            Fabrefactions: the processes of creating works of art. Also, the beautiful and strange new album by Bearcraft, the Bristol-based collective led by Essex-born musician/producer Dicky Moore.
          </p>
          <p>
            Over ten tracks, Fabrefactions moves upriver along the Thames, from Margate, through Leigh-on-Sea and into the capital of England. That journey is mapped out in gorgeous organic electronics, overheard ghost stories and half-remembered urban myths. Here are tales of runaways, banshees, estuary witches, acid trips and seafront car-cruising, set to sounds that evoke bankside industry, underground dancehalls and the ambient push and pull of the shoreline.
          </p>
          <p>
            Bearcraft is a collective led by Dicky Moore. Dicky is one quarter of Dream Themes, was guitarist for Frank Sidebottom’s Oh Blimey Big Band and plays for Scritti Politti.
          </p>
          <p>
            Fabrefactions was written whilst staring out the window of a council flat in Dalston after a diagnosis of acute hearing loss; recorded in the corner of an artist’s studio in London Fields before being mixed next to the motorway in Bristol (over a period of ten years). Fabrefactions was recorded with Joe Reeves (Shit Disco, Age of Consent) and mixed by Ali Chant (Gruff Rhys, PJ Harvey, This Is The Kit); all music played and programmed by Dicky Moore. All vocals by Dicky and artist/musician Sam Sally.
          </p>
          <p>
            Fabrefactions is the follow up to 2010’s Yestreen:
          </p>
          <blockquote>
            <p>“So many hooks that you instantly stop everything you are doing and prepare for the onslaught of brilliant electro”</p>
            <b>The 405</b>
          </blockquote>
          <blockquote>
            <p>“Yestreen is an escapism album. You may find yourself captured and held in this sorcerer's fortress before you even know it.”</p>
            <b>Bearded</b>
          </blockquote>
          <blockquote>
            <p>“Infinity catchy… Cure-like… a fully realised and strangely satisfying pop record. Impressive.”</p>
            <b>The Digital Fix</b>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default About;
