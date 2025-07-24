// import {Block, Lot, ImageData} from "@/types/types";
//
// export const blocks: Block[] = [
//     { id: 'A', name: 'Quadra A', available: true, position: { x: 15, y: 60 } },
//     { id: 'B', name: 'Quadra B', available: true, position: { x: 25, y: 60 } },
//     { id: 'C', name: 'Quadra C', available: true, position: { x: 35, y: 60 } },
//     { id: 'D', name: 'Quadra D', available: true, position: { x: 45, y: 60 } },
//     { id: 'E', name: 'Quadra E', available: true, position: { x: 15, y: 75 } },
//     { id: 'F', name: 'Quadra F', available: true, position: { x: 25, y: 75 } },
//     { id: 'G', name: 'Quadra G', available: true, position: { x: 35, y: 75 } },
//     { id: 'H', name: 'Quadra H', available: true, position: { x: 45, y: 75 } },
//     { id: 'I', name: 'Quadra I', available: true, position: { x: 75, y: 75 } },
//     { id: 'J', name: 'Quadra J', available: true, position: { x: 75, y: 60 } },
//     { id: 'K', name: 'Quadra K', available: true, position: { x: 75, y: 45 } },
//     { id: 'L', name: 'Quadra L', available: true, position: { x: 75, y: 30 } },
//     { id: 'M', name: 'Quadra M', available: true, position: { x: 65, y: 20 } },
//     { id: 'N', name: 'Quadra N', available: true, position: { x: 55, y: 15 } },
//     { id: 'O', name: 'Quadra O', available: true, position: { x: 45, y: 25 } },
// ];
//
// export const lotImages: ImageData[] = [
//     {
//         id: 'morning-empty',
//         title: 'Vista Matinal',
//         description: 'Terreno vazio - manhã',
//         url: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
//         url3d: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//         id: 'afternoon-empty',
//         title: 'Vista Vespertina',
//         description: 'Terreno vazio - tarde',
//         url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
//         url3d: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//         id: 'morning-house',
//         title: 'Casa Modelo - Manhã',
//         description: 'Com casa padrão - manhã',
//         url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
//         url3d: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//         id: 'afternoon-house',
//         title: 'Casa Modelo - Tarde',
//         description: 'Com casa padrão - tarde',
//         url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
//         url3d: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
//     }
// ];
//
// export const generateLotsForBlock = (blockId: string): Lot[] => {
//     const lotCount = Math.floor(Math.random() * 8) + 8; // 8-15 lots per block
//     return Array.from({ length: lotCount }, (_, i) => ({
//         id: `${blockId}-${String(i + 1).padStart(2, '0')}`,
//         number: String(i + 1).padStart(2, '0'),
//         available: Math.random() > 0.3, // 70% availability
//         position: {
//             x: 20 + (i % 4) * 15,
//             y: 20 + Math.floor(i / 4) * 15
//         }
//     }));
// };