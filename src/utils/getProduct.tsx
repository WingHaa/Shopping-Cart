import { KeycapKits } from "src/models/products";
import productDatabase from "src/utils/products-database";

export const getProduct = (
  name: string,
  setName: string
): KeycapKits | undefined => {
  const set = productDatabase.find((set) => set.kits[0].set === setName);
  if (!set) throw new Error("Set not found");
  return set.kits.find((kit) => kit.name === name);
};
