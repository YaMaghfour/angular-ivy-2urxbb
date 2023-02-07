import { Support } from './support.model';
import { User } from './user.model';

export interface PaginationApiModel<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
  support: Support;
}
