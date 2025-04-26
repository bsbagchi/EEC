import React, { useState } from 'react';
import Image from 'next/image';
import { ImageOff } from 'lucide-react';

interface FallbackImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackClassName?: string;
  fill?: boolean;
}

const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  width = 200,
  height = 200,
  className = '',
  fallbackClassName = '',
  fill = false,
}) => {
  const [error, setError] = useState(false);

  if (error) {
    if (fill) {
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center bg-gray-100 ${fallbackClassName}`}
        >
          <ImageOff className="h-10 w-10 text-gray-400" />
          <span className="sr-only">{alt}</span>
        </div>
      );
    }

    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${fallbackClassName}`}
        style={{ width, height }}
      >
        <ImageOff className="h-10 w-10 text-gray-400" />
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export { FallbackImage };
