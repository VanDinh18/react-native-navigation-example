import {en} from 'languages';

export interface Note {
  id: string;
  title: string;
  body: string;
}

export interface Book {
  id: string;
  name: string;
}

export interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: any;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
}

export enum EPosition {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export interface IFoodItem {
  id: number;
  image: any;
}

export type IResource = typeof en;
