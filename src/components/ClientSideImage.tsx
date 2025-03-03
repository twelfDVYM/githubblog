// src/components/ClientSideImage.tsx
'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface ClientSideImageProps extends ImageProps {
  alt: string; // Make alt prop required
}

const ClientSideImage: React.FC<ClientSideImageProps> = (props) => {
  const { onError, alt, ...rest } = props;

  return (
    <Image
      alt={alt}
      {...rest}
      onError={(e) => {
        if (onError) {
          onError(e);
        } else {
          e.currentTarget.src = 'https://drakensbergmassage.co.za/wp-content/uploads/2024/12/DBMLogoWeb-200h.png';
          console.error('Failed to load image:', props.src);
        }
      }}
    />
  );
};

export default ClientSideImage;
