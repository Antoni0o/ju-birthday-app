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

import { Box } from "../components/Box";
import { ContentWrapper } from "../components/ContentWrapper";
import { Headers } from "../components/Headers"
import { Timer } from '../components/Timer';

export const BirthdayIsNotToday = () => {
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
  ]

  return (
   <ContentWrapper BackgroundIMG={Background[sortRandomNumber()]} >
     <Box>
      <Headers/>
      <hr />
      <Timer/>
     </Box>
   </ContentWrapper>
 ); 
};
