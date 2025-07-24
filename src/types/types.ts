export interface Block {
    id: string;
    name: string;
    available: boolean;
    position: { x: number; y: number };
    overviewImage?: { id: string, url: string };
    lots: Lot[]
}

export interface Lot {
    id: string;
    number: string;
    available: boolean;
    position: { x: number; y: number };
    images: ImageData[]
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


export type NavigationLayer = 'overview' | 'blocks' | 'lots' | 'details';