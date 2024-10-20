import { Journal } from "@/types/journal";
import { Work } from "@/types/work";

export function getCardImage(item: Journal | Work): string {
  if ("cardImage" in item && item.cardImage) {
    return item.cardImage.url;
  } else if ("featuredImage" in item && item.featuredImage) {
    return item.featuredImage.url;
  }

  return "";
}

export function getCardImageAlt(item: Journal | Work): string {
  if ("cardImage" in item && item.cardImage) {
    return item.cardImage.alt;
  } else if ("featuredImage" in item && item.featuredImage) {
    return item.featuredImage.alt;
  }

  return "";
}
