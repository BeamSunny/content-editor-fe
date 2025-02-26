export enum ESort {
  Asc = 'asc',
  Desc = 'desc',
}
export type TSort = ESort | null // ascending น้อยไปมาก , descending จากมากไปน้อย

export enum EFilterType {
  String = 'STRING',
  DropDawn = 'DROP_DAWN',
  DateRange = 'DATE_RANGE',
  MinMax = 'MIN_MAX',
}
