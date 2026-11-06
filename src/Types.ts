export interface IStrapiResponse<T> {
  data: T
  meta?: Meta
}
export const  PERIOD = ["Triassic", "Jurassic", "Cretaceous"] as const;

export type period = (typeof PERIOD)[number]

export const PERIOD_LABELS: Record<period, string> = {
  Triassic: "Триассовый",
  Jurassic: "Юрский",
  Cretaceous: "Меловой"
}
export interface Dinosaur {
  id: number
  documentId: string
  type: string
  description?: string
  family: string
  weight: number
  length: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  age: number
  period?: period
  photo?: Photo
}
export type InputDinosaur = Omit<
  dinosaur,
  "id" | "documentId" | "photo" | "createdAt" | "updatedAt" | "publishedAt"
>

export interface Photo {
  id: number
  documentId: string
  name: string
  alternativeText: any
  caption: any
  focalPoint: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Formats {
  small: Small
  medium: Medium
  thumbnail: Thumbnail
}

export interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Medium {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
