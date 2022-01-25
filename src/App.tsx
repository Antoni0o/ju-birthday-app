import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { BirthdayInNextYear } from './pages/BirthdayInNextYear';
import { BirthdayIsNotToday } from './pages/BirthdayIsNotToday';
import { BirthdayIsToday } from './pages/BirthdayIsToday';

import './styles/Globals.css'

dayjs.extend(utc);

function App() {
  const currentYear = dayjs().year();
  const now = dayjs().utc(true).format();
  const birthdayDate = dayjs(`11/22/${currentYear}`).utc(true).format();

  return (
    <>
      {dayjs(now).isBefore(birthdayDate) && 
        <BirthdayIsNotToday/>
      }
      {dayjs(now).isSame(birthdayDate) &&
        <BirthdayIsToday/>
      }
      {dayjs(now).isAfter(birthdayDate) &&
        <BirthdayInNextYear/>
      }
    </>
  );
}

export default App;
