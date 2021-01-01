import {Photo} from './photo.model';

export interface Product {
  id: number;
  name: string;
  designation?: string;
  description?: string;
  price?: number;
  quantity?: number;
  available?: boolean;
  photos: Photo[];
  categoryId: number;
}
