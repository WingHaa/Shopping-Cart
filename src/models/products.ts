import type { StaticImageData } from "next/image"
type ImageLink = string | StaticImageData;

interface KeycapKits {
  id: number;
  name: string;
  price: number;
  img: ImageLink;
}

export interface KeycapSet {
  id: number;
  set: string;
  card: ImageLink;
  preview: ImageLink[];
  kits: KeycapKits[];
}