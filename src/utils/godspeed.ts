import godspeedCard from '../../public/assets/img/products/godspeed/PC.png'
import godspeedLunarAlphas from '../../public/assets/img/products/godspeed/1 - lunar alphas.jpg'
import godspeedSolarAlphas from '../../public/assets/img/products/godspeed/1 - solar alphas.png'
import godspeedSupernovaAlphas from '../../public/assets/img/products/godspeed/1 - supernova alphas.jpg'
import godspeedAresMods from '../../public/assets/img/products/godspeed/2 - ares mods.jpg'
import godspeedApolloMods from '../../public/assets/img/products/godspeed/4 - apollo mods.png'
import godspeedSolarNumpad from '../../public/assets/img/products/godspeed/7 - solar numpad.png'
import godspeedLunarNumpad from '../../public/assets/img/products/godspeed/8 - lunar numpad.png'
import godspeedMitonauts from '../../public/assets/img/products/godspeed/17 - mitonauts.png'
import godspeedNovelties from '../../public/assets/img/products/godspeed/18 - novelties.png'
import godspeedPreview1 from '../../public/assets/img/products/godspeed/0258-pc.jpg'
import godspeedPreview2 from '../../public/assets/img/products/godspeed/copy-pdp3.jpg'
import godspeedPreview3 from '../../public/assets/img/products/godspeed/copy-pdp2.jpg'
import godspeedPreview4 from '../../public/assets/img/products/godspeed/18406.jpg'
import godspeedPreview5 from '../../public/assets/img/products/godspeed/0258-pc.jpg'
import godspeedPreview6 from '../../public/assets/img/products/godspeed/0246.jpg'
import godspeedPreview7 from '../../public/assets/img/products/godspeed/GODSPEED RESHOOTS0561.jpg'

import uniqid from 'uniqid';

const godspeedSet = {
  id: uniqid(),
  name: 'DROP + MITO SA GODSPEED CUSTOM KEYCAP SET',
  card: godspeedCard,
  preview: [godspeedPreview1, godspeedPreview2, godspeedPreview3, godspeedPreview4, godspeedPreview5, godspeedPreview6, godspeedPreview7],
  kits: [
    {
      id: uniqid(),
      name: 'Solar Alphas',
      set: 'godspeed',
      price: 45,
      img: godspeedSolarAlphas
    },
    {
      id: uniqid(),
      name: 'Lunar Alphas',
      set: 'godspeed',
      price: 45,
      img: godspeedLunarAlphas
    },
    {
      id: uniqid(),
      name: 'Supernova Alphas',
      set: 'godspeed',
      price: 45,
      img: godspeedSupernovaAlphas
    },
    {
      id: uniqid(),
      name: 'Ares Mods',
      set: 'godspeed',
      price: 95,
      img: godspeedAresMods
    },
    {
      id: uniqid(),
      name: 'Apollo Mods',
      set: 'godspeed',
      price: 95,
      img: godspeedApolloMods
    },
    {
      id: uniqid(),
      name: 'Solar Numpad',
      set: 'godspeed',
      price: 38,
      img: godspeedSolarNumpad
    },
    {
      id: uniqid(),
      name: 'Lunar Numpad',
      set: 'godspeed',
      price: 38,
      img: godspeedLunarNumpad
    },
    {
      id: uniqid(),
      name: 'Mitonauts',
      set: 'godspeed',
      price: 45,
      img: godspeedMitonauts
    },
    {
      id: uniqid(),
      name: 'Novelties',
      set: 'godspeed',
      price: 55,
      img: godspeedNovelties
    },
  ],
}


export default godspeedSet;