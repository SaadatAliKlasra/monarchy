import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Collapse,
  IconButton,
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import 'waypoints/lib/noframework.waypoints.min.js';

export default () => {
  const [activeListItem, setActiveListItem] = useState(1);

  const renderArrowIconBasedOnState = (listItemNumber: number) => {
    if (listItemNumber === activeListItem) {
      return (
        <IconButton
          style={{
            marginRight: '-8px',
          }}
        >
          <ExpandLess />
        </IconButton>
      );
    }

    return (
      <IconButton
        style={{
          marginRight: '-8px',
        }}
      >
        <ExpandMore />
      </IconButton>
    );
  };

  useEffect(() => {
    document.body.onload = () => {
      //@ts-ignore
      const triggerEls = document.querySelectorAll(
        '.benefit-list-content__item'
      );
      console.log(triggerEls);
      //@ts-ignore
      const waypoints = triggerEls.forEach((e) => {
        console.log(e);
        //@ts-ignore
        // return new waypoint({
        //   element: e,
        //   handler: (direction: string) => {
        //     console.log(e);
        //     if (direction === 'down') {
        //       console.log('Yes');
        //     }
        //   },
        // });
      });
    };
  }, []);

  return (
    <div className="benefit-list-container">
      <div className="benefit-list-items-container">
        <ul className="benefit-list-items">
          <h2
            className={`benefit-list__item__heading ${
              activeListItem === 1 && 'active'
            }`}
            onMouseEnter={() => {
              setActiveListItem(1);
              console.log('yes');
            }}
          >
            All-in-one build experience
          </h2>

          <h2
            className={`benefit-list__item__heading ${
              activeListItem === 2 && 'active'
            }`}
            onMouseEnter={() => {
              setActiveListItem(2);
              console.log('yes');
            }}
          >
            Royally-Certified™
          </h2>

          <h2
            className={`benefit-list__item__heading ${
              activeListItem === 3 && 'active'
            }`}
            onMouseEnter={() => {
              setActiveListItem(3);
              console.log('yes');
            }}
          >
            Quality materials
          </h2>

          <h2
            className={`benefit-list__item__heading ${
              activeListItem === 4 && 'active'
            }`}
            onMouseEnter={() => {
              setActiveListItem(4);
              console.log('yes');
            }}
          >
            Comprehensive warranty
          </h2>

          <h2
            className={`benefit-list__item__heading ${
              activeListItem === 5 && 'active'
            }`}
            onMouseEnter={() => {
              setActiveListItem(5);
              console.log('yes');
            }}
          >
            Transparent pricing
          </h2>

          <h2
            className={`benefit-list__item__heading ${
              activeListItem === 6 && 'active'
            }`}
            onMouseEnter={() => {
              setActiveListItem(6);
              console.log('yes');
            }}
          >
            Price-match guarantee
          </h2>
        </ul>
      </div>

      <div className={`benefit-list-content`}>
        <p
          className={`subtitle-sm fw-m benefit-list-content__item ${
            activeListItem === 1 ? 'active' : ''
          }`}
          data-item="1"
        >
          You deserve the very best — we deliver lasting work completed by
          Ottawa's top roofers and siding craftsmen, and HVAC installers. The
          work we perform and the experience we provide our customers exceeds
          expectations for a superior, all-in-one build experience. Our team
          provides comprehensive roofing, siding, and HVAC services by providing
          you with a Royally-Certified™ Contractor as your one point of
          communication for the entirety of your project. We are dedicated to
          providing the quality craftsmanship our clients expect, from the
          planning and design phases, to completing the job.
        </p>

        <p
          className={`subtitle-sm fw-m benefit-list-content__item ${
            activeListItem === 2 ? 'active' : ''
          }`}
          data-item="2"
        >
          We cut subcontractors out of the building process, completing all of
          our roofing, siding, and HVAC projects entirely in-house. Every detail
          of your project from material selection to construction is completed
          by our experienced and fully licensed Royally-Certified™ Contractors.
          With all aspects of a project completed under our roof, we can assure
          our clients quality building services where our competition can’t. Our
          royal touch ensures that even the smallest detail is up to our highest
          standards.
        </p>

        <p
          className={`subtitle-sm fw-m benefit-list-content__item ${
            activeListItem === 3 ? 'active' : ''
          }`}
          data-item="3"
        >
          Whether it's asphalt shingles, vinyl siding and engineered wood
          siding, or metal roofing, Monarchy provides you with the
          highest-quality materials available from Canadian companies you know
          and trust like CertainTeed, Bakor, IKO, Ideal Roofing, London
          Eco-Metal, Gentek, KWP Engineered Wood Products, and James Hardie.
        </p>

        <p
          className={`subtitle-sm fw-m benefit-list-content__item ${
            activeListItem === 4 ? 'active' : ''
          }`}
          data-item="4"
        >
          We back our work with up to 10 years through a comprehensive
          workmanship warranty — longer than any other roofing and siding
          company in Ottawa. Included on every build we complete, rest assured
          if warranty problems do arise, we’ll work with you and the
          manufacturer to fix any issues quickly at no cost to you. This also
          includes any HVAC equipment.
        </p>

        <p
          className={`subtitle-sm fw-m benefit-list-content__item ${
            activeListItem === 5 ? 'active' : ''
          }`}
          data-item="5"
        >
          Unlike our competitors, we guarantee our pricing upfront and do not
          profit from change orders or hidden fees. Start by getting an instant
          price by answering a few questions about your roofing, siding, or HVAC
          project. You will immediately receive a free, all-inclusive estimate
          with a breakdown of our costs. Our fully licensed Royally-Certified
          Contractor will then meet with you to confirm your price and walk you
          through our process.
        </p>

        <p
          className={`subtitle-sm fw-m benefit-list-content__item ${
            activeListItem === 6 ? 'active' : ''
          }`}
          data-item="6"
        >
          We stand by our pricing and won't be beat by our competitors. If you
          find a better estimate by a reputable roofing, siding, or HVAC company
          in Ottawa, we'll pass along the savings to you.
        </p>
      </div>
    </div>
  );
};
