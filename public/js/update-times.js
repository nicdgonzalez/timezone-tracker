const cardDisplay = document.getElementById("card-display");

/** @type {Intl.DateTimeFormatOptions} */
const optionsDate = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

/** @type {Intl.DateTimeFormatOptions} */
const optionsTime = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};

setInterval(() => {
  const now = new Date();

  // -1 for the empty button that opens the form for creating new cards
  for (var i = 0; i < cardDisplay.children.length - 1; ++i) {
    const card = document.getElementById(`card-${i}`);

    if (card == undefined) {
      return;
    }

    const timezone = card.getAttribute("data-timezone");

    const date = Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      ...optionsDate,
    }).format(now);
    const time = Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      ...optionsTime,
    }).format(now);

    card.innerHTML = `${date} @ ${time}`;
  }
}, 1000);
