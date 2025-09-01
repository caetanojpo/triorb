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
    image: '/renascence/ambientes/academia.jpg',
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
    image: '/renascence/ambientes/academia.jpg',
  },
  {
    title: 'Campo de Futebol',
    image: '/renascence/ambientes/futebol.jpg',
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
    image: '/renascence/ambientes/vestiario.jpg',
  },
];
export const lazerArea: Areas[] = [
  {
    title: 'Piscina',
    image: '/renascence/ambientes/piscina.jpg',
  },
  {
    title: 'Sauna',
    image: '/renascence/ambientes/sauna.jpg',
  },
  {
    title: 'Beauty Care',
    image: '/renascence/ambientes/beauty.jpg',
  },
  {
    title: 'Sala de Jogos',
    image: '/renascence/ambientes/jogos.jpg',
  },
  {
    title: 'Salão de Festa',
    image: '/renascence/ambientes/festa.jpg',
  },
  {
    title: 'Lounge Externo',
    image: '/renascence/ambientes/lounge.jpg',
  },
  {
    title: 'Churrasqueira',
    image: '/renascence/ambientes/churrasqueira.jpg',
  },
];

export enum SubAreaEnum {
  ESPORTE = 'ESPORTE E MOVIMENTO',
  LAZER = 'LAZER E CONVIVENCIA',
}
