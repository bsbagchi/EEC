import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  image: any;
  title: string;
  description: string;
  path: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, path }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-52 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6 flex-grow bg-white">
        <CardTitle className="text-xl font-semibold mb-2 text-gray-800">{title}</CardTitle>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardContent>
      <CardFooter className="px-6 py-4 bg-primary text-white border-t-0 mt-auto">
        <Link href={path} className="flex justify-between items-center w-full">
          <span className="font-medium">Learn More</span>
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
