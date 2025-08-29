export interface Block {
  id: string;
  name: string;
  available: boolean;
  overviewImage?: { id: string; url: string };
  lots: Lot[];
  clickableAreas: ClickableLot[];
}

export interface Lot {
  id: string;
  number: string;
  available: boolean;
  images: ImageData[];
  isClickable: boolean;
  coordinates: Coordinates;
}

export interface Coordinates {
  type: string;
  id: string;
  title: string;
  shape: string;
  coords: string;
}

export interface ImageData {
  id: string;
  title: string;
  description: string;
  url: string;
  url3d?: string;
}

export interface SiteData {
  overview: {
    id: string;
    title: string;
    description: string;
    url: string;
  };
  blocks: Block[];
}

export interface SiteDataNew {
  overview: {
    id: string;
    title: string;
    description: string;
    url: string;
    clickableAreas: ClickableBlock[];
  };
  blocks: Block[];
}

export interface ClickableBlock {
  blockId: string;
  title: string;
  shape: string;
  coords: string;
}

export interface ClickableLot {
  lotId: string;
  title: string;
  shape: string;
  coords: string;
}

export type NavigationLayer = 'overview' | 'blocks' | 'lots' | 'details';
