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

const handarbeitSet = {
  id: 3,
  set: 'Handarbeit',
  card: handarbeitCard,
  preview: [handarbeitPreview1, handarbeitPreview2, handarbeitPreview3, handarbeitPreview4, handarbeitPreview5, handarbeitPreview6],
  kits: [
    {
      id: 1,
      name: 'Base Kit(Sculpted)',
      price: 150,
      img: handarbeitBaseSculpted
    },
    {
      id: 2,
      name: 'Base Kit(Flat)',
      price: 150,
      img: handarbeitBaseFlat
    },
    {
      id: 3,
      name: 'Numpad',
      price: 30,
      img: handarbeitNumpad
    },
    {
      id: 4,
      name: 'Spacebars',
      price: 25,
      img: handarbeitSpacebars
    },
  ],
}


export default handarbeitSet;