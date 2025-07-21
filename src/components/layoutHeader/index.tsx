import { memo } from 'react';
import DarkSwitch from '../darkSwitch';
import GithubIcon from '../githubIcon';
import LogoBlock from '../logoBlock';
import Image from 'next/image';

export default memo(function Header() {
  return (
    <header className="z-50">
      <div className="mx-auto flex h-24 items-center px-5 sm:px-20">
        <LogoBlock />
        <div className="ml-auto"></div>
        <a href="https://libran.cloveui.asia" target="_blank" className="mr-3 flex items-center gap-2 hover:underline">
          <Image src="/icons/libran.svg" width={12} height={12} alt="" />
          Libran
        </a>
        <div className="mr-3">
          <DarkSwitch />
        </div>
        <GithubIcon />
      </div>
    </header>
  );
});
