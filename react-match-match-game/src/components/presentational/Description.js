import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { setDifficulty } from '../../actions/settings.js';

const Description= (props) => (
  <Fragment>
    <h2>Правила игры:</h2>
    <p>Нужно найти все пары карточек за меньшее количество ходов</p>
    <h2>Описание настроек:</h2>
    <p>Также перед началом игры в меню сверху Вы можете выбрать рубашку колоды и настроить сложность игры </p>
    <h2>Дополнительно:</h2>
    <p>В игре ведется рейтийг, первые десять мест отображаются после открытия всех карт</p>
    <p>Настройки рубашек и сложности сохраняются для каждого пользователя</p>
  </Fragment>
);


export default Description;