import type { StaticImageData } from "next/image"
type ImageLink = string | StaticImageData;

interface KeycapKits {
  id: string;
  name: string;
  price: number;
  img: StaticImageData;
}

export interface KeycapSet {
  id: string;
  set: string;
  card: ImageLink;
  preview: StaticImageData[];
  kits: KeycapKits[]
}