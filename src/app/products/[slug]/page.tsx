import { notFound } from 'next/navigation';
import AlphaAlith from '@/components/products/AlphaAlith';
import Froska from '@/components/products/Froska';
import Safeline from '@/components/products/Safeline';
import VelixProtocol from '@/components/products/VelixProtocol';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;

  // Map slugs to components
  switch (slug) {
    case 'alpha-alith':
      return <AlphaAlith />;
    case 'froska':
      return <Froska />;
    case 'safeline':
      return <Safeline />;
    case 'velix-protocol':
      return <VelixProtocol />;
    default:
      notFound();
  }
}