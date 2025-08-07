'use client';

import React from 'react';
import RenascenceMap from '@/components/renascence/ui/RenascenceMap';
import { RenascenceHeader } from '@/components/renascence/ui/RenascenceHeader';
import { RenascenceComplementaryAreas } from '@/components/renascence/ui/RenascenceComplementaryAreas';
import { useAreasState } from '@/hooks/useAreasState';
import { RenascenceConstructionStatus } from '@/components/renascence/ui/RenascenceConstructionStatus';
import { RenascenceLocationmap } from '@/components/renascence/ui/RenascenceLocationmap';
import { RenascenceFooter } from '@/components/renascence/ui/RenascenceFooter';

const Page = () => {
  const areasState = useAreasState();
  return (
    <>
      <RenascenceHeader />
      <RenascenceMap />
      <RenascenceComplementaryAreas {...areasState} />
      <RenascenceConstructionStatus />
      <RenascenceLocationmap />
      <RenascenceFooter />
    </>
  );
};

export default Page;
