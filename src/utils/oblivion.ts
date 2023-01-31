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
import oblivionPreview4 from '../../public/assets/img/products/oblivion/1120.jpg.jpg'
import oblivionPreview5 from '../../public/assets/img/products/oblivion/1125.jpg.jpg'
import oblivionPreview6 from '../../public/assets/img/products/oblivion/1144.jpg.jpg'

const oblivionSet = {
  id: 5,
  set: 'Oblivion',
  card: oblivionCard,
  preview: [oblivionPreview1, oblivionPreview2, oblivionPreview3, oblivionPreview4, oblivionPreview5, oblivionPreview6],
  kits: [
    {
      id: 1,
      name: 'Git Modifiers',
      price: 110,
      img: oblivionGitModifiers
    },
    {
      id: 2,
      name: 'Hagoromo Alphas',
      price: 60,
      img: oblivionHagoAlphas
    },
    {
      id: 3,
      name: 'Hagoromo ASCII Alpha',
      price: 65,
      img: oblivionHagoAsciiAlphas
    },
    {
      id: 4,
      name: 'Hagoromo Numpad',
      price: 50,
      img: oblivionHagoNumpad
    },
    {
      id: 5,
      name: 'Monochrome Modifiers',
      price: 120,
      img: oblivionMonoMod
    },
    {
      id: 6,
      name: 'Oblivion Alphas',
      price: 60,
      img: oblivionOblivionAlphas
    },
    {
      id: 7,
      name: 'Oblivion ASCII Alphas',
      price: 65,
      img: oblivionOblivionAsciiAlphas
    },
    {
      id: 8,
      name: 'Oblivion Modifiers',
      price: 115,
      img: oblivionOblivionMod
    },
    {
      id: 9,
      name: 'Oblivion Numpad',
      price: 50,
      img: oblivionOblivionNumpad
    },
    {
      id: 10,
      name: 'Vim',
      price: 40,
      img: oblivionVim
    },
  ],
}


export default oblivionSet;