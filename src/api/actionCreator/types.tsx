export type ElementType = {
  title: string
  id: number
  body: string
}

export type R = {
  [index: number]: ElementType
  map(arg0: (el: ElementType, i: number) => void): import('react').ReactNode
}

export type QueryFn = {
  id: never
  length: number
  filter(arg0: (el: ElementType) => void): R
  map(arg0: (el: ElementType, i: number) => void): import('react').ReactNode
  element: ElementType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slice: any
}
