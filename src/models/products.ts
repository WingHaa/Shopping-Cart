import type { StaticImageData } from "next/image"
type ImageLink = string | StaticImageData;

export interface KeycapKits {
  id: string;
  name: string;
  set: string;
  price: number;
  img: StaticImageData;
}

export interface KeycapSet {
  id: string;
  name: string;
  card: ImageLink;
  preview: StaticImageData[];
  kits: KeycapKits[]
}