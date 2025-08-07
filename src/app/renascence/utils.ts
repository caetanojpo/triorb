export type Areas = {
  title: string;
  image: string;
  description?: string;
};

export const mainAreas: Areas[] = [
  {
    title: 'Portaria',
    image: '',
    description:
      'Guarita 24 horas; Entrada de moradores e visitantes; Entrada de serviço; Delivery room; Estacionamento.',
  },
  {
    title: 'Área de Lazer',
    image: '',
    description:
      'A area de lazer do Residencial Renascence II e a projetada para oferecer conforto, diversao e bem estar, sero divididas em três setores principais - lazer e convivencia, esportes e movimento e bosque e diversao',
  },
  {
    title: 'Bosque',
    image: '',
    description: 'Bosque encantador, playground e gazebos de descanso.',
  },
];

export const esporteAreas: Areas[] = [
  {
    title: 'Academia Moderna',
    image: '',
  },
  {
    title: 'Campo de Futebol',
    image: '',
  },
  {
    title: 'Quadra de Tênis',
    image: '',
  },
  {
    title: 'Quadra Poliesportiva',
    image: '',
  },
  {
    title: 'Quadra de Beach Tennis',
    image: '',
  },
  {
    title: 'Banheiro e Vestiário',
    image: '',
  },
];
export const lazerArea: Areas[] = [
  {
    title: 'Piscina',
    image: '',
  },
  {
    title: 'Sauna',
    image: '',
  },
  {
    title: 'Beauty Care',
    image: '',
  },
  {
    title: 'Sala de Jogos',
    image: '',
  },
  {
    title: 'Salão de Festa',
    image: '',
  },
  {
    title: 'Lounge Externo',
    image: '',
  },
  {
    title: 'Churrasqueira',
    image: '',
  },
];

export enum SubAreaEnum {
  ESPORTE = 'ESPORTE E MOVIMENTO',
  LAZER = 'LAZER E CONVIVENCIA',
}
