import React from 'react';
import Style from './ShimmerEffect.module.scss';

const ShimmerEffect = () => {
  return (
    <div className={Style.shimmer_wrapper}>
      <div className={Style.shimmer}></div>
    </div>
  );
};

export default ShimmerEffect;