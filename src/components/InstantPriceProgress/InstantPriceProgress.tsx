import React from 'react';

import './InstantPriceProgress.scss';

export default (props: any) => {
  const getProgress = (step: number) => {
    // console.log(step);
    // console.log(step * 15);
    return step * 15 + '%';

    return '10%';
  };

  return (
    <div className="instant-quote__progress">
      <div
        className="instant-quote__progress__filled"
        style={{ width: getProgress(props.step) }}
      ></div>
    </div>
  );
};
