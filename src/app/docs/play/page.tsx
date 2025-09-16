'use client';
import { memo } from 'react';

const Play = () => {
  return <iframe className="h-full w-full" loading="lazy" src="https://play.jhub.space" title="play"></iframe>;
};

export default memo(Play);
