import handarbeitCard from '../../public/assets/img/products/handarbeit/SA Handarbeit - Card.png'
import handarbeitBaseSculpted from '../../public/assets/img/products/handarbeit/1 - SA Handarbeit - Base Kit (Sculpted).png'
import handarbeitBaseFlat from '../../public/assets/img/products/handarbeit/2 - SA Handarbeit - Base Kit (Flat).png'
import handarbeitNumpad from '../../public/assets/img/products/handarbeit/3 - SA Handarbeit - Numpad.png'
import handarbeitSpacebars from '../../public/assets/img/products/handarbeit/4 - SA Handarbeit - Spacebars.png'
import handarbeitPreview1 from '../../public/assets/img/products/handarbeit/SA Handarbeit - 2.png'
import handarbeitPreview2 from '../../public/assets/img/products/handarbeit/SA Handarbeit - 12.png'
import handarbeitPreview3 from '../../public/assets/img/products/handarbeit/SA Handarbeit - 14.png'
import handarbeitPreview4 from '../../public/assets/img/products/handarbeit/SA Handarbeit - 2.png'
import handarbeitPreview5 from '../../public/assets/img/products/handarbeit/SA Handarbeit - 5.png'
import handarbeitPreview6 from '../../public/assets/img/products/handarbeit/SA Handarbeit - 6.png'

import uniqid from 'uniqid';

const handarbeitSet = {
  id: uniqid(),
  name: 'DROP + COCOBRAIS SA HANDARBEIT CUSTOM KEYCAP SET',
  card: handarbeitCard,
  preview: [handarbeitPreview1, handarbeitPreview2, handarbeitPreview3, handarbeitPreview4, handarbeitPreview5, handarbeitPreview6],
  kits: [
    {
      id: uniqid(),
      name: 'Base Kit(Sculpted)',
      set: 'handarbeit',
      price: 150,
      img: handarbeitBaseSculpted
    },
    {
      id: uniqid(),
      name: 'Base Kit(Flat)',
      set: 'handarbeit',
      price: 150,
      img: handarbeitBaseFlat
    },
    {
      id: uniqid(),
      name: 'Numpad',
      set: 'handarbeit',
      price: 30,
      img: handarbeitNumpad
    },
    {
      id: uniqid(),
      name: 'Spacebars',
      set: 'handarbeit',
      price: 25,
      img: handarbeitSpacebars
    },
  ],
}


export default handarbeitSet;