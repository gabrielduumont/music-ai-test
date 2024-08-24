export type GenericTypeWithId<T> = T & {
  id: string;
};

export type SearchOption = GenericTypeWithId<{
  value: string;
}>;
