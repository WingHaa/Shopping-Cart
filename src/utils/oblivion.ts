import oblivionCard from '../../public/assets/img/products/oblivion/PC.png'
import oblivionGitModifiers from '../../public/assets/img/products/oblivion/git modifiers.png'
import oblivionHagoAlphas from '../../public/assets/img/products/oblivion/hagoromo alphas.jpg'
import oblivionHagoAsciiAlphas from '../../public/assets/img/products/oblivion/hagoromo ascii alphas.jpg'
import oblivionHagoNumpad from '../../public/assets/img/products/oblivion/hagoromo numpad.jpg'
import oblivionMonoMod from '../../public/assets/img/products/oblivion/monochrome modifiers.png'
import oblivionOblivionAlphas from '../../public/assets/img/products/oblivion/oblivion alphas.jpg'
import oblivionOblivionAsciiAlphas from '../../public/assets/img/products/oblivion/oblivion ascii alphas.jpg'
import oblivionOblivionMod from '../../public/assets/img/products/oblivion/oblivion modifiers.png'
import oblivionOblivionNumpad from '../../public/assets/img/products/oblivion/oblivion numpad.jpg'
import oblivionVim from '../../public/assets/img/products/oblivion/vim.jpg'
import oblivionPreview1 from '../../public/assets/img/products/oblivion/copy.jpg'
import oblivionPreview2 from '../../public/assets/img/products/oblivion/copy-small.jpg'
import oblivionPreview3 from '../../public/assets/img/products/oblivion/1111.jpg'
import oblivionPreview4 from '../../public/assets/img/products/oblivion/1120.jpg'
import oblivionPreview5 from '../../public/assets/img/products/oblivion/1125.jpg'
import oblivionPreview6 from '../../public/assets/img/products/oblivion/1144.jpg'

import uniqid from 'uniqid';

const oblivionSet = {
  id: uniqid(),
  set: 'Oblivion',
  card: oblivionCard,
  preview: [oblivionPreview1, oblivionPreview2, oblivionPreview3, oblivionPreview4, oblivionPreview5, oblivionPreview6],
  kits: [
    {
      id: uniqid(),
      name: 'Git Modifiers',
      price: 110,
      img: oblivionGitModifiers
    },
    {
      id: uniqid(),
      name: 'Hagoromo Alphas',
      price: 60,
      img: oblivionHagoAlphas
    },
    {
      id: uniqid(),
      name: 'Hagoromo ASCII Alpha',
      price: 65,
      img: oblivionHagoAsciiAlphas
    },
    {
      id: uniqid(),
      name: 'Hagoromo Numpad',
      price: 50,
      img: oblivionHagoNumpad
    },
    {
      id: uniqid(),
      name: 'Monochrome Modifiers',
      price: 120,
      img: oblivionMonoMod
    },
    {
      id: uniqid(),
      name: 'Oblivion Alphas',
      price: 60,
      img: oblivionOblivionAlphas
    },
    {
      id: uniqid(),
      name: 'Oblivion ASCII Alphas',
      price: 65,
      img: oblivionOblivionAsciiAlphas
    },
    {
      id: uniqid(),
      name: 'Oblivion Modifiers',
      price: 115,
      img: oblivionOblivionMod
    },
    {
      id: uniqid(),
      name: 'Oblivion Numpad',
      price: 50,
      img: oblivionOblivionNumpad
    },
    {
      id: uniqid(),
      name: 'Vim',
      price: 40,
      img: oblivionVim
    },
  ],
}


export default oblivionSet;