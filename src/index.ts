import Tooltip from "./lib";

/**
 * Tooltip Demo
 */
const tooltip = new Tooltip();

const items: HTMLCollectionOf<any> = document.getElementsByClassName("item");

Array.from(items).forEach((item) => {
  tooltip.onHover(item, "Some text", {
    placement: item.dataset.placement,
  });
});
