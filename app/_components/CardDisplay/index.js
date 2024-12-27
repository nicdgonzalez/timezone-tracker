"use client";

import { useEffect, useState } from "react";
import { CardCreateButton } from "../CardCreateButton";
import styles from "./styles.module.css";
import { Card } from "@/app/_components/Card";
import { CardCreateForm } from "@/app/_components/CardCreateForm";
import Script from "next/script";
import { LocalTime } from "../LocalTime";

function updateData(data) {
  window.localStorage.setItem("card-data", JSON.stringify(data));
}

const dataDefault = [
  {
    name: "Nic",
    timezone: "US/Eastern",
    color: "#14605c",
  },
];

export function CardDisplay() {
  const [_count, setCount] = useState(7);
  const [data, setData] = useState(dataDefault);

  function saveData(data) {
    window.localStorage.setItem("card-data", JSON.stringify(data));
  }

  /** @param {SubmitEvent} event */
  function onSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("form-card-name");
    const timezone = document.getElementById("form-card-timezone");
    const color = document.getElementById("form-card-color");

    data.push({
      name: name.value,
      timezone: timezone.value,
      color: color.value,
    });
    setCount((c) => c + 1);
    saveData(data);

    name.value = "";
    timezone.value = "";
    color.value = "";

    // Since we are intercepting the form data and clearing it ourselves,
    // whenever the user tries to refresh the page, a pop-up opens warning
    // the user they are resubmitting the form (which is a false positive
    // in this case). This stops that pop-up from appearing.
    if (window.history.replaceState) {
      window.history.replaceState(null, null, window.location.href);
    }

    // Close the modal after the client hits submit
    const modal = document.getElementById("form-card");
    modal.style.display = "none";
  }

  /** @param {PointerEvent} event */
  function onCardDelete(event) {
    const index = event.target.parentNode.parentNode.getAttribute("data-index");
    data.splice(index, 1);
    saveData(data);
    setCount((c) => c - 1);
  }

  useEffect(() => {
    const data = window.localStorage.getItem("card-data");

    if (data == undefined) {
      saveData(dataDefault);
      return;
    }

    setData(JSON.parse(data));
  }, []);

  const cards = data.map((e, i) => {
    return (
      <Card
        key={i}
        index={i}
        name={e.name}
        timezone={e.timezone}
        color={e.color}
        onCardDelete={onCardDelete}
      />
    );
  });

  return (
    <div className={styles.container}>
      <LocalTime />
      <div>
        <div id="card-display" className={styles.display}>
          <CardCreateButton />
          {cards}
        </div>
        <CardCreateForm onSubmit={onSubmit} />
        <Script src="/js/update-times.js" />
      </div>
    </div>
  );
}
