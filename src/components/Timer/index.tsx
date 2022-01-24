import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useEffect, useState } from "react";
import { TimeWrapper } from "./timer.styles";

dayjs.extend(utc);

export const Timer = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  useEffect(() => {
    const birthdayYear = dayjs().year();
    const birthdayDate = dayjs(`11/22/${birthdayYear}`).utc(true).toDate();

    const interval = setInterval(() => {
      const currentDate = dayjs().utc(true).toDate();
      const difference = birthdayDate.getTime() - currentDate.getTime();
      const days = Math.floor(difference / 1000 / 60 / 60 / 24);
      const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(difference / 1000 / 60) % 60;
      const seconds = Math.floor(difference / 1000) % 60;

      if (difference < 0) {
        clearInterval();
      } else {
        setTimerDays(String(days));
        setTimerHours(String(hours));
        setTimerMinutes(String(minutes));
        setTimerSeconds(String(seconds));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimeWrapper>
      <h2>FALTAM:</h2>
      <div className="time">
        {Number(timerDays) === 1 
          ? <h1>{timerDays} Dia</h1> 
          : <h1>{timerDays} Dias</h1>
        }
        {Number(timerHours) === 1 
          ? <h1>{timerHours} Hora</h1> 
          : <h1>{timerHours} Horas</h1>
        }
        {Number(timerMinutes) === 1 
          ? <h1>{timerMinutes} Minuto</h1> 
          : <h1>{timerMinutes} Minutos</h1>
        }
        {Number(timerSeconds) === 1 
          ? <h1>{timerSeconds} Segundo</h1> 
          : <h1>{timerSeconds} Segundos</h1>
        }
      </div>
      <hr />
      <h3>Para o aniversário da Ju</h3>
    </TimeWrapper>
  );
};