import {Photo} from './photo.model';

export interface Product {
  id: number;
  name: string;
  designation: string;
  description: string;
  price: number;
  sales?: number;
  quantity: number;
  available: boolean;
  photos: Photo[];
  categoryId: number;
}
