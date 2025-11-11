import { memo, useEffect, useMemo } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import CopyBtn from '../copyBtn';

interface ComponentCodePrevProps {
  componentCode?: string;
  codeType?: string;
}

export default memo(function ComponentCodePrev({ componentCode = '', codeType = 'html' }: ComponentCodePrevProps) {
  // 使用useMemo根据codeType直接计算prismClass
  const prismClass = useMemo(() => {
    if (codeType === 'html') return 'language-html';
    else if (codeType === 'vue') return 'language-html';
    else if (codeType === 'jsx') return 'language-jsx';
    return 'language-html'; // 默认值
  }, [codeType]);

  useEffect(() => {
    Prism.highlightAll();
  }, [componentCode]);

  return (
    <div className="relative">
      <pre className="h-[400px] overflow-auto rounded-xs p-4 ring-2 ring-gray-900 lg:h-[600px]">
        <code className={prismClass}>{componentCode}</code>
      </pre>
      <div className="absolute top-4 right-4 z-10">
        <CopyBtn content={componentCode} />
      </div>
    </div>
  );
});
