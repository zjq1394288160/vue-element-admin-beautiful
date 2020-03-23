import { title } from "@/settings";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${title || "BYUI-2.2"}-${pageTitle}`;
  }
  return `${title || "BYUI-2.2"}`;
}
