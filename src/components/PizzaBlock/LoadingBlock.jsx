import React from 'react';
import ContentLoader from 'react-content-loader';

export const LoadingBlock = () => {
  return (
    <div>
      <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="140" cy="140" r="140" />
        <rect x="0" y="300" rx="6" ry="6" width="284" height="26" />
        <rect x="0" y="333" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="435" rx="2" ry="2" width="116" height="28" />
        <rect x="169" y="434" rx="6" ry="6" width="116" height="28" />
      </ContentLoader>
    </div>
  );
};
