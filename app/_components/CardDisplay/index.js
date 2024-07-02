// @ts-check

"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import _ from "underscore";
import partial from "underscore/modules/partial";

// @ts-ignore
import styles from "./styles.module.css";
import { Card } from "@/app/_components/Card";
import { CardCreateForm } from "@/app/_components/CardCreateForm";
import { LocalTime } from "../LocalTime";
import { CardCreateButton } from "../CardCreateButton";
import { cardsDefault, createCard, getCards, deleteCard } from "@/lib/cards";

export function CardDisplay() {
  const [_count, setCount] = useState(cardsDefault.length);
  const [data, setData] = useState(cardsDefault);

  useEffect(() => {
    setData(getCards());
  }, []);

  const onDelete = partial(deleteCard, _, data, setCount);

  const cards = data.map((card, i) => {
    return <Card key={i} index={i} onCardDelete={onDelete} {...card} />;
  });

  return (
    <div className={styles.container}>
      <LocalTime />
      <div>
        <div id="card-display" className={styles.display}>
          <CardCreateButton />
          {cards}
        </div>
        <CardCreateForm onSubmit={partial(createCard, _, data, setCount)} />
        <Script src="/js/update-times.js" />
      </div>
    </div>
  );
}
