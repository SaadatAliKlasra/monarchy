import React from 'react';

import { Box, Card } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

import goNext from '../../pages/InstantPrice/goNext';
import './CardRadioInput.scss';

export default (props: any) => {
  let classNames = 'FancyInput FancyInput--Image FancyInput--Radio';

  if (props.fillFull) {
    classNames += ' FancyInput--FillFullOnSelected';
  }

  if (props.roofingImage) {
    classNames += ' FancyInput--RoofingImages';
  }

  if (props.roofingImageQuestionMark) {
    classNames += ' FancyInput--RoofingImagesQuestionMark';
  }

  if (props.forcedAirPowerImagesQuestionMark) {
    classNames += ' FancyInput--ForcedAirPowerImagesQuestionMark';
  }

  if (props.forcedAirPowerImages) {
    classNames += ' FancyInput--ForcedAirPowerImages';
  }

  return (
    <label htmlFor={props.for} className={classNames}>
      <input
        id={props.id}
        name={props.name}
        value={props.value}
        type={props.checkbox ? 'checkbox' : 'radio'}
        checked={props.checked}
        onChange={() => {
          if (props.onClick) {
            props.onClick();
          }

          // goNext();
        }}
      />

      <Card className={`card`}>
        <div>
          {props.fillFull && (
            <div className="FancyInput--FillFullBackground"></div>
          )}

          {props.imgSrc && <img className="img-initial" src={props.imgSrc} />}
          {props.imgSrcSelected && (
            <img className="img-selected" src={props.imgSrcSelected} />
          )}

          <div className="FancyInput__Text">
            <Box>
              <p className="title">{props.title}</p>
              {props.subtitle && <p className="subtitle">{props.subtitle}</p>}
            </Box>

            {!props.roofingImage && (
              <Box>
                <div className="FancyInput__Text__checkmark">
                  <DoneIcon />
                </div>
              </Box>
            )}
          </div>
        </div>
      </Card>
    </label>
  );
};
