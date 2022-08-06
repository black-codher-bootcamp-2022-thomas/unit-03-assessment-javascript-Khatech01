import { dates } from "./data.js";

/* ------> Correct data I thought  <------ */

const timeline = document.querySelector(".timeline");

function getCard(index) {
  const { date, title, image, fullDescription } = dates[index];

  // Create tags for modal ok
  const modalContainer = document.createElement("div"); // all mutliple variables "content" in one place for the modal = button
  const modalDate = document.createElement("span");
  const modalTitle = document.createElement("h2");
  const modalFullDescription = document.createElement("p");
  const modalImage = document.createElement("img");
  const modalCloseButton = document.createElement("span");

  // Set ID elements ok
  modalContainer.setAttribute("id", "modal-container");
  modalDate.setAttribute("id","modal-date");
  modalTitle.setAttribute ("id", "modal-title");
  modalFullDescription.setAttribute("id", "modal-full-description");
  modalCloseButton.setAttribute("id", "modal-close-button");
  modalImage.setAttribute("id", "modal-image");
  modalImage.setAttribute("src", image);
  modalImage.setAttribute("alt", title);

  // Identify text from "DATA.JS" to each variable
  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const fullDescriptionText = document.createTextNode(fullDescription);

  // Append each new variables to tags created previously
  modalDate.appendChild(dateText);
  modalTitle.appendChild(titleText);
  modalFullDescription.appendChild(fullDescriptionText);
  modalContainer.appendChild(modalDate);
  modalContainer.appendChild(modalTitle);
  modalContainer.appendChild(modalFullDescription);
  modalContainer.appendChild(modalImage);

  // Closing button event
  modalCloseButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      timeline.removeChild(modalContainer);
    },
    false
  );

  modalContainer.style.display = "flex";
  timeline.prepend(modalContainer);
}

dates.map(({ date, title, summary }, index) => {
  const timelineItem = document.createElement("div");
  const timelineItemTitle = document.createElement("h2");
  const timelineItemDate = document.createElement("span");
  const timelineItemSummary = document.createElement("p");
  const timelineItemMoreInfoButton = document.createElement("button");
  const circle = document.createElement("div"); // date on the vertical bar timeline

  const titleText = document.createTextNode(title);
  const dateText = document.createTextNode(date);
  const summaryText = document.createTextNode(summary);
  const timelineItemMoreInfoText = document.createTextNode("More infos");

  timelineItem.setAttribute("class", "timeline-item");
  timelineItemTitle.setAttribute("class", "timeline-item-title");
  timelineItemDate.setAttribute("class", "timeline-item-date");
  timelineItemSummary.setAttribute("class", "timeline-item-summary");
  timelineItemMoreInfoButton.setAttribute("data-index", index);
  circle.setAttribute("class", "timeline-circle");

  
  timelineItemTitle.appendChild(titleText);
  timelineItemDate.appendChild(dateText);
  timelineItemSummary.appendChild(summaryText);
  timelineItemMoreInfoButton.appendChild(timelineItemMoreInfoText);
  // circle.appendChild(dateText);

  timelineItem.appendChild(timelineItemTitle);
  timelineItem.appendChild(timelineItemDate);
  timelineItem.appendChild(timelineItemSummary);
  timelineItem.appendChild(timelineItemMoreInfoButton);
  timelineItem.appendChild(circle);


  timelineItemMoreInfoButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      const index = e.target.getAttribute("data-index");
      if (index) getCard(index);
    },
    false
  );

  timeline.appendChild(timelineItem);
});
