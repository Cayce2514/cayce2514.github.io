const sampleImages = [
  { title: "Cliffside Light", date: "2026-02-18", src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
  { title: "Studio Greenery", date: "2025-11-06", src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80" },
  { title: "City Haze", date: "2025-08-14", src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80" },
  { title: "Desert Drive", date: "2024-12-27", src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80" },
  { title: "Blue Hour", date: "2024-07-11", src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80" },
  { title: "Forest Cabin", date: "2023-10-04", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" }
];

const state = {
  sortOrder: "desc",
  size: "medium",
  images: sampleImages.map((image, index) => ({ ...image, id: `sample-${index}` }))
};

const body = document.body;
const galleryGroups = document.getElementById("gallery-groups");
const imageCount = document.getElementById("image-count");
const sizeRange = document.getElementById("size-range");
const sortOrder = document.getElementById("sort-order");
const timelineNav = document.getElementById("timeline-nav");
const timelineMode = document.getElementById("timeline-mode");
const groupTemplate = document.getElementById("group-template");
const cardTemplate = document.getElementById("card-template");
const fileInput = document.getElementById("file-input");
const dropZone = document.getElementById("drop-zone");
const useTotp = document.getElementById("use-totp");
const totpField = document.getElementById("totp-field");
const authForm = document.getElementById("auth-form");

const sizeMap = ["small", "medium", "large"];
const dateTitleFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric"
});
const cardDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
});

function parseDate(value) {
  return new Date(`${value}T12:00:00`);
}

function formatFileDate(file) {
  const modified = file.lastModified ? new Date(file.lastModified) : new Date();
  return modified.toISOString().slice(0, 10);
}

function groupImages(images) {
  const grouped = new Map();

  images.forEach((image) => {
    if (!grouped.has(image.date)) {
      grouped.set(image.date, []);
    }
    grouped.get(image.date).push(image);
  });

  const entries = Array.from(grouped.entries()).map(([date, items]) => ({
    date,
    items
  }));

  entries.sort((a, b) => {
    if (state.sortOrder === "asc") {
      return parseDate(a.date) - parseDate(b.date);
    }
    return parseDate(b.date) - parseDate(a.date);
  });

  return entries;
}

function buildTimeline(groups) {
  const yearMode = state.size === "small";
  timelineMode.textContent = yearMode ? "Year jump" : "Date jump";

  const entries = yearMode
    ? Array.from(new Map(groups.map((group) => [group.date.slice(0, 4), group])).values()).map((group) => ({
        label: group.date.slice(0, 4),
        target: `group-${group.date}`
      }))
    : groups.map((group) => ({
        label: cardDateFormatter.format(parseDate(group.date)),
        target: `group-${group.date}`
      }));

  timelineNav.innerHTML = "";

  entries.forEach((entry, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `timeline-button${index === 0 ? " is-current" : ""}`;
    button.textContent = entry.label;
    button.dataset.target = entry.target;
    button.addEventListener("click", () => {
      const section = document.getElementById(entry.target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    timelineNav.appendChild(button);
  });
}

function renderGallery() {
  body.dataset.size = state.size;
  const groups = groupImages(state.images);
  const totalLabel = `${state.images.length} image${state.images.length === 1 ? "" : "s"}`;
  imageCount.textContent = totalLabel;
  galleryGroups.innerHTML = "";

  if (!groups.length) {
    galleryGroups.innerHTML = '<div class="empty-state">No images yet. Drop files here or use the browse button to start your library.</div>';
    timelineNav.innerHTML = "";
    timelineMode.textContent = "Timeline";
    return;
  }

  groups.forEach((group) => {
    const groupFragment = groupTemplate.content.cloneNode(true);
    const section = groupFragment.querySelector(".date-group");
    const title = groupFragment.querySelector(".group-title");
    const meta = groupFragment.querySelector(".group-meta");
    const grid = groupFragment.querySelector(".image-grid");

    section.id = `group-${group.date}`;
    title.textContent = dateTitleFormatter.format(parseDate(group.date));
    meta.textContent = `${group.items.length} item${group.items.length === 1 ? "" : "s"}`;

    group.items.forEach((image) => {
      const cardFragment = cardTemplate.content.cloneNode(true);
      const card = cardFragment.querySelector(".image-card");
      const img = cardFragment.querySelector("img");
      const name = cardFragment.querySelector(".image-title");
      const date = cardFragment.querySelector(".image-date");

      card.dataset.imageId = image.id;
      img.src = image.src;
      img.alt = image.title;
      name.textContent = image.title;
      date.textContent = cardDateFormatter.format(parseDate(image.date));

      grid.appendChild(cardFragment);
    });

    galleryGroups.appendChild(groupFragment);
  });

  buildTimeline(groups);
  updateVisibleTimelineItem();
}

function addFiles(fileList) {
  const imageFiles = Array.from(fileList).filter((file) => file.type.startsWith("image/"));

  imageFiles.forEach((file) => {
    state.images.unshift({
      id: `upload-${crypto.randomUUID()}`,
      title: file.name.replace(/\.[^.]+$/, ""),
      date: formatFileDate(file),
      src: URL.createObjectURL(file)
    });
  });

  renderGallery();
}

function updateVisibleTimelineItem() {
  const sections = Array.from(document.querySelectorAll(".date-group"));
  const buttons = Array.from(timelineNav.querySelectorAll(".timeline-button"));

  if (!sections.length || !buttons.length) {
    return;
  }

  let activeSectionId = sections[0].id;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 180) {
      activeSectionId = section.id;
    }
  });

  buttons.forEach((button) => {
    const isMatch = button.dataset.target === activeSectionId;
    const isYearMatch = state.size === "small" && activeSectionId.startsWith(`group-${button.textContent}`);
    button.classList.toggle("is-current", isMatch || isYearMatch);
  });
}

document.querySelectorAll(".theme-swatch").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".theme-swatch.is-active")?.classList.remove("is-active");
    button.classList.add("is-active");
    body.dataset.theme = button.dataset.theme;
  });
});

sizeRange.addEventListener("input", (event) => {
  state.size = sizeMap[Number(event.target.value)];
  renderGallery();
});

sortOrder.addEventListener("change", (event) => {
  state.sortOrder = event.target.value;
  renderGallery();
});

fileInput.addEventListener("change", (event) => {
  addFiles(event.target.files);
  fileInput.value = "";
});

["dragenter", "dragover"].forEach((eventName) => {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.add("is-dragover");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.remove("is-dragover");
  });
});

dropZone.addEventListener("drop", (event) => {
  addFiles(event.dataTransfer.files);
});

useTotp.addEventListener("change", () => {
  totpField.classList.toggle("is-hidden", !useTotp.checked);
  const totpInput = document.getElementById("totp");
  totpInput.required = useTotp.checked;
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = authForm.querySelector(".primary-button");
  button.textContent = "Signed in";
  button.disabled = true;
});

document.addEventListener("scroll", updateVisibleTimelineItem, { passive: true });

renderGallery();
