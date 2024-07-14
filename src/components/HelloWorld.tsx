import React from "react";
import { useCars } from "../hooks/useCars";
import CarCard from "./CarCard";
import { Spacer, Text } from "vcc-ui";
import styles from '../../public/css/home.module.css';

export const HelloWorld: React.FC = () => {

  const { cars } = useCars();

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer />
      <div className={styles.cardsWrapper}>
        {cars.map(car => <CarCard key={car.id} car={car}/>)}
      </div>
    </div>
  );
};
