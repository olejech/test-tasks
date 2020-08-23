import React from 'react'
import { MainLayout } from 'layouts/MainLayout'
import data from 'constants/data.json'
import PizzaCard from 'components/PizzaCard'
import cls from './styles.module.scss'

export const HomePage = () => (
  <MainLayout>
    <h2 className={cls.title}>All pizzas</h2>
    <div className={cls.pizzas}>
      { data.pizzas.map(pizza => <PizzaCard {...pizza} key={pizza.id} />) }
    </div>
  </MainLayout>
)
