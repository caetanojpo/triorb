export type Areas = {
  title: string;
  image: string;
  description?: string;
};

export const mainAreas: Areas[] = [
  {
    title: 'Portaria',
    image: '/api/proxy?id=1mIiFZGTqqUBLfM8KQwGy2adidq-7j8AQ',
    description:
      'Guarita 24 horas; Entrada de moradores e visitantes; Entrada de serviço; Delivery room; Estacionamento.',
  },
  {
    title: 'Área de Lazer',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
    description:
      'A área de lazer do Residencial Renascence II é projetada para oferecer conforto, diversão e bem-estar, será\n' +
      'dividida em três setores principais - lazer e convivência, esportes e movimento e bosque e diversão.',
  },
  {
    title: 'Bosque',
    image: '/api/proxy?id=1dVeRuIZYYn6JCZkdJ8FP-MTTvxcR6ee8',
    description: 'Bosque encantador, playground e gazebos de descanso.',
  },
];

export const esporteAreas: Areas[] = [
  {
    title: 'Academia Moderna',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
  },
  {
    title: 'Campo de Futebol',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
  },
  {
    title: 'Quadra de Tênis',
    image: '/api/proxy?id=1wk8wsBb9tmiOthZCj_tJ8y9P5VHHEQS4',
  },
  {
    title: 'Quadra Poliesportiva',
    image: '/api/proxy?id=1xnzM-70lRfkwWNT-VjFlSeytCGREpqnL',
  },
  {
    title: 'Quadra de Beach Tennis',
    image: '/api/proxy?id=1uVmF3S92eYeU4L4h8Ld-jwQSFZGIizSX',
  },
  {
    title: 'Banheiro e Vestiário',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
  },
];
export const lazerArea: Areas[] = [
  {
    title: 'Piscina',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
  },
  {
    title: 'Sauna',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
  },
  {
    title: 'Beauty Care',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
  },
  {
    title: 'Sala de Jogos',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
  },
  {
    title: 'Salão de Festa',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
  },
  {
    title: 'Lounge Externo',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
  },
  {
    title: 'Churrasqueira',
    image: '/api/proxy?id=1wFlBOggwNSahyI3w83Rz3L6JGCU9F2gG',
  },
];

export enum SubAreaEnum {
  ESPORTE = 'ESPORTE E MOVIMENTO',
  LAZER = 'LAZER E CONVIVENCIA',
}
