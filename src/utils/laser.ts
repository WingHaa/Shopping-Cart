import laserCard from '../../public/assets/img/products/laser/pc.png'
import laserAlphas from '../../public/assets/img/products/laser/1 - alphas.png'
import laserGaijin from '../../public/assets/img/products/laser/2 - gaijin.png'
import laserKobe from '../../public/assets/img/products/laser/3 - kobe.png'
import laserMods from '../../public/assets/img/products/laser/4 - mods.png'
import laserMicons from '../../public/assets/img/products/laser/5 - micons.png'
import laserObnet from '../../public/assets/img/products/laser/6 - obnet.png'
import laserNumpad from '../../public/assets/img/products/laser/7 - numpad.png'
import laserTurbo from '../../public/assets/img/products/laser/15 - turbo.png'
import laserPreview1 from '../../public/assets/img/products/laser/LASER SA - BANNER.png'
import laserPreview2 from '../../public/assets/img/products/laser/1.png'
import laserPreview3 from '../../public/assets/img/products/laser/CTRL 4.png'
import laserPreview4 from '../../public/assets/img/products/laser/CTRL 6.png'
import laserPreview5 from '../../public/assets/img/products/laser/CTRL 9.png'

import uniqid from 'uniqid';

const laserSet = {
  id: uniqid(),
  name: 'DROP + MITO SA LASER CUSTOM KEYCAP SET',
  card: laserCard,
  preview: [laserPreview1, laserPreview2, laserPreview3, laserPreview4, laserPreview5],
  kits: [
    {
      id: uniqid(),
      name: 'Alphas',
      set: 'laser',
      price: 58,
      img: laserAlphas
    },
    {
      id: uniqid(),
      name: 'Gaijin',
      set: 'laser',
      price: 58,
      img: laserGaijin
    },
    {
      id: uniqid(),
      name: 'Kobe',
      set: 'laser',
      price: 58,
      img: laserKobe
    },
    {
      id: uniqid(),
      name: 'Mods',
      set: 'laser',
      price: 84,
      img: laserMods
    },
    {
      id: uniqid(),
      name: 'Micons',
      set: 'laser',
      price: 84,
      img: laserMicons
    },
    {
      id: uniqid(),
      name: 'Obnet',
      set: 'laser',
      price: 84,
      img: laserObnet
    },
    {
      id: uniqid(),
      name: 'Numpad',
      set: 'laser',
      price: 34,
      img: laserNumpad
    },
    {
      id: uniqid(),
      name: 'Turbo',
      set: 'laser',
      price: 36,
      img: laserTurbo
    },
  ],
}


export default laserSet;