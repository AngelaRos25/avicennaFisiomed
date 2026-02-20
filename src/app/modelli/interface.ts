export interface ChiSiamoData {
  image: string;
  workTitle: string;
  nome: string;
  p: string;
}


export interface CosaFacciamoData {
  image: string;
  title: string;
  priority?: boolean;
}

export interface menuServizi {
  title: string;
  list: menuServiziList[];
}

export interface menuServiziList{
  id: string;
  titleServizio: string,
}

export interface DettagliServizio {
  id: string;
  title: string;
  image: string;
  description: string;
  utils: ListaUtile[];
  p: string;
}

export interface ListaUtile {
  icon: string;
  text: string;
}