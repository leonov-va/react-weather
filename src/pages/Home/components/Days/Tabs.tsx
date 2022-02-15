import s from "./Days.module.scss";

interface Props {}

const tabs = [
  { value: "На неделю" },
  { value: "На 10 дней" },
  { value: "На месяц" },
];

export const Tabs = (props: Props) => {
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={s.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};
