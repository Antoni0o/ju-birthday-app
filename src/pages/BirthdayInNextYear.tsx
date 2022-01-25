import Bg1 from '../img/bg1.jpg';
import Bg2 from '../img/bg2.jpg';
import Bg3 from '../img/bg3.jpg';
import Bg4 from '../img/bg4.jpg';
import Bg5 from '../img/bg5.jpg';
import Bg6 from '../img/bg6.jpg';
import Bg7 from '../img/bg7.jpg';
import Bg8 from '../img/bg8.jpg';
import Bg9 from '../img/bg9.jpg';
import Bg10 from '../img/bg10.jpg';
import Bg11 from '../img/bg11.jpg'; 
import Bg12 from '../img/bg12.jpg'; 
import Bg13 from '../img/bg13.jpg'; 

import dayjs from 'dayjs';
import { Box } from "../components/Box";
import { ContentWrapper } from "../components/ContentWrapper";
import { Headers } from "../components/Headers"

export const BirthdayInNextYear = () => {
  const nextYear = dayjs().year() + 1;

  const sortRandomNumber = () => {
    const number = Math.floor(Math.random() * Background.length);
    return number;
  }
  
  const Background = [
    Bg1,
    Bg2,
    Bg3,
    Bg4,
    Bg5,
    Bg6,
    Bg7,
    Bg8,
    Bg9,
    Bg10,
    Bg11,
    Bg12,
    Bg13,
  ]

  return (
   <ContentWrapper BackgroundIMG={Background[sortRandomNumber()]} >
     <Box>
      <Headers/>
      <hr />
      <h1>ANIVERSÁRIO DA JU SÓ ANO QUE VEM</h1>
      <hr />
      <h3>Ano que vem tem aniversário da Ju</h3>
      <h3>22/11/{nextYear}</h3>
     </Box>
   </ContentWrapper>
 ); 
};
