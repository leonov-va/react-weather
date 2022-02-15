import { Card } from "./Card";
import s from "./Days.module.scss";

interface Props {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const days: Day[] = [
  {
    day: "Сегодня",
    day_info: "28 авг",
    icon_id: "sun",
    temp_day: "+18",
    temp_night: "+15",
    info: "Облачно",
  },
  {
    day: "Завтра",
    day_info: "29 авг",
    icon_id: "small_rain_sun",
    temp_day: "+18",
    temp_night: "+15",
    info: "небольшой дождь и солнце",
  },
  {
    day: "Пн",
    day_info: "28 авг",
    icon_id: "small_rain_sun",
    temp_day: "+18",
    temp_night: "+15",
    info: "Облачно",
  },
  {
    day: "Вт",
    day_info: "28 авг",
    icon_id: "small_rain_sun",
    temp_day: "+18",
    temp_night: "+15",
    info: "Облачно",
  },
  {
    day: "Ср",
    day_info: "30 авг",
    icon_id: "small_rain",
    temp_day: "+18",
    temp_night: "+15",
    info: "небольшой дождь",
  },
  {
    day: "Чт",
    day_info: "28 авг",
    icon_id: "mainly_cloudy",
    temp_day: "+18",
    temp_night: "+15",
    info: "Облачно",
  },
  {
    day: "Пт",
    day_info: "28 авг",
    icon_id: "small_rain_sun",
    temp_day: "+18",
    temp_night: "+15",
    info: "Облачно",
  },
];

export const Days = (props: Props) => {
  return (
    <div className={s.days}>
      {days.map((day: Day) => (
        <Card day={day} />
      ))}
    </div>
  );
};
