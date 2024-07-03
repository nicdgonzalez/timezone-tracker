// @ts-check

/**
 * @typedef {object} Card
 * @property {string} name
 * @property {string} label
 * @property {string} timezone
 * @property {string} color
 */

/**
 * @callback setCountCallback
 * @param {number} value
 * @returns {void}
 */

/** @type {Array<Card>} */
export const cardsDefault = [
  {
    name: "Rue",
    label: "Stinky Moderator",
    timezone: "Asia/Manila",
    color: "#d8df97",
  },
  {
    name: "Asahi",
    label: "Moderator (oui oui)",
    timezone: "Europe/Paris",
    color: "#ffcee9",
  },
  {
    name: "Taiyou",
    label: "LET'S GO CATBOYSSS",
    timezone: "US/Eastern",
    color: "#424964",
  },
  {
    name: "Lulu",
    label: "Lovely Moderator",
    timezone: "US/Eastern",
    color: "#f6eee4",
  },
  {
    name: "Nic",
    label: "Superior Moderator",
    timezone: "US/Eastern",
    color: "#14605c",
  },
  {
    name: "Sonny",
    label: "Moderator /pf",
    timezone: "US/Eastern",
    color: "#6c0501",
  },
  {
    name: "Aria",
    label: '"nice melons" Moderator',
    timezone: "US/Central",
    color: "#7b3e58",
  },
  {
    name: "Aliyss",
    label: "Nic's Friend Alice",
    timezone: "CET",
    color: "#9b59b6",
  },
];

/**
 * @param {Array<Card>} data
 * @returns {void}
 */
export function updateCards(data) {
  window.localStorage.setItem("cards", JSON.stringify(data));
}

/**
 * @returns {Array<Card>}
 */
export function getCards() {
  const data = window.localStorage.getItem("cards");

  if (data === null) {
    updateCards(cardsDefault);
    return cardsDefault;
  }

  return JSON.parse(data);
}

/**
 * @param {SubmitEvent} event
 * @param {Array<Card>} data
 * @param {setCountCallback} setCountFn
 * @returns {void}
 */
export function createCard(event, data, setCountFn) {
  event.preventDefault();

  const name = /** @type {(HTMLInputElement | null)} */ (
    document.getElementById("form-card-name")
  );

  const label = /** @type {(HTMLInputElement | null)} */ (
    document.getElementById("form-card-label")
  );

  const timezone = /** @type {(HTMLInputElement | null)} */ (
    document.getElementById("form-card-timezone")
  );

  const color = /** @type {(HTMLInputElement | null)} */ (
    document.getElementById("form-card-color")
  );

  [name, label, timezone, color].forEach((e) => {
    console.assert(e !== null);
  });

  const newLength = data.push({
    name: name.value,
    label: label.value,
    timezone: timezone.value,
    color: color.value,
  });

  updateCards(data);
  setCountFn(newLength);

  name.value = "";
  label.value = "";
  timezone.value = "";
  color.value = "";

  // When the client tries to refresh the page, a pop-up opens and warns
  // them that they are re-submitting form data. Since we are intercepting
  // the data and managing it manually, forms are never sent anyway.
  // The following stops that pop-up from appearing
  window.history.replaceState(null, null, window.location.href);

  const modal = document.getElementById("form-card");
  console.assert(modal !== null);
  modal.style.display = "none";
}

/**
 * @param {EventTarget} target
 * @returns {number}
 */
function getCardIndex(target) {
  const parent = /** @type {HTMLElement} */ (target).parentNode.parentNode;
  const index = /** @type {HTMLElement} */ (parent).getAttribute("data-index");

  if (index === null) {
    return;
  }

  return parseInt(index);
}

/**
 * @param {PointerEvent} event
 * @param {Array<Card>} data
 * @param {setCountCallback} setCountFn
 * @returns {void}
 */
export function deleteCard({ target }, data, setCountFn) {
  const index = getCardIndex(target);

  data.splice(index, 1);
  updateCards(data);
  setCountFn(data.length);
}

/**
 * Copy a card's information to the client's clipboard.
 * @param {SubmitEvent} event
 */
export function copyCard(event) {
  // not implemented
}

/**
 * Add a pre-made card to the client's collection.
 * @param {SubmitEvent} event
 * @param {string} card
 * @param {Array<Card>} data
 * @param {setCountCallback} setCountFn
 */
export function importCard(event, card, data, setCountFn) {
  // not implemented
}
