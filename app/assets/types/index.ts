export interface CourseInfo {
  pic: string;
  originPrice: number;
  name: string;
  salePrice: number;
  type?: 1; // 1：拼团 2：秒杀 3：其他
}
