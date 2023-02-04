import Tooltip from "./lib";

/**
 * Tooltip Demo
 */
const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `
  <h1>Next-Tooltip</h1>
  <a href="https://github.com/meta-explore/next-tooltip" target="_blank">Next-tooltip Github</a>
`;

const tooltip = new Tooltip();

const items: HTMLCollectionOf<any> = document.getElementsByClassName("item");

Array.from(items).forEach((item) => {
  tooltip.onHover(item, "Some text", {
    placement: item.dataset.placement,
  });
});
