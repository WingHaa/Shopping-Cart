import carbonCard from '../../public/assets/img/products/carbon/VAkshVPRRSW0V3ItcPZ9_pc.png'
import carbonAlphas from '../../public/assets/img/products/carbon/01 alphas.jpg'
import carbonCarbonski from '../../public/assets/img/products/carbon/02 carbonski.jpg'
import carbonDualAlphas from '../../public/assets/img/products/carbon/03 dual alphas.jpg'
import carbonModifiers from '../../public/assets/img/products/carbon/04 modifiers.jpg'
import carbonDualModifiers from '../../public/assets/img/products/carbon/05 dual modifiers.jpg'
import carbonBonesModifiers from '../../public/assets/img/products/carbon/06 bones modifiers.jpg'
import carbonFortyPercent from '../../public/assets/img/products/carbon/07 fortypercent.jpg'
import carbonErgodox from '../../public/assets/img/products/carbon/08 ergodox.jpg'
import carbonNumpad from '../../public/assets/img/products/carbon/09 numpad.jpg'
import carbonBonesNumpad from '../../public/assets/img/products/carbon/10 bones numpad.jpg'
import carbonIsoUK from '../../public/assets/img/products/carbon/11 iso UK.jpg'
import carbonXtraKit from '../../public/assets/img/products/carbon/12 xtra kit.jpg'
import carbonNovelties from '../../public/assets/img/products/carbon/13 carbon novelties.jpg'
import carbonWarningSigns from '../../public/assets/img/products/carbon/14 warning signs.jpg'
import carbonRollingBones from '../../public/assets/img/products/carbon/15 rolling bones.jpg'
import carbonHalfLifeLambda from '../../public/assets/img/products/carbon/16 halflife lambda.jpg'
import carbon625uSpacebar from '../../public/assets/img/products/carbon/17 625u Spacebars.jpg'
import carbon7uSpacebar from '../../public/assets/img/products/carbon/18 7u Spacebars.jpg'
import carbonBeigeSpacekey from '../../public/assets/img/products/carbon/19 Beige Spacekeys.jpg'
import carbonGraySpacekey from '../../public/assets/img/products/carbon/20 Gray Spacekeys.jpg'
import carbonPreview1 from '../../public/assets/img/products/carbon/3982-copy-pdp.jpg'
import carbonPreview2 from '../../public/assets/img/products/carbon/3968-copy-pdp.jpg'
import carbonPreview3 from '../../public/assets/img/products/carbon/3993-copy-pdp.jpg'
import carbonPreview4 from '../../public/assets/img/products/carbon/0506-copy-pdp.jpg'
import carbonPreview5 from '../../public/assets/img/products/carbon/0515-copy-pdp.jpg'
import carbonPreview6 from '../../public/assets/img/products/carbon/2114-copy-pdp.jpg'
import carbonPreview7 from '../../public/assets/img/products/carbon/2139-copy-pdp.jpg'
import carbonPreview8 from '../../public/assets/img/products/carbon/2188-copy-pdp.jpg'
import carbonPreview9 from '../../public/assets/img/products/carbon/2192-copy-pdp.jpg'

import uniqid from 'uniqid';

const carbonSet = {
  id: uniqid(),
  set: 'Carbon',
  card: carbonCard,
  preview: [carbonPreview1, carbonPreview2, carbonPreview3, carbonPreview4, carbonPreview5, carbonPreview6, carbonPreview7, carbonPreview8, carbonPreview9],
  kits: [
    {
      id: uniqid(),
      name: 'Carbon Alphas',
      price: 49,
      img: carbonAlphas
    },
    {
      id: uniqid(),
      name: 'Carbonski',
      price: 49,
      img: carbonCarbonski
    },
    {
      id: uniqid(),
      name: 'Dual Alphas',
      price: 49,
      img: carbonDualAlphas
    },
    {
      id: uniqid(),
      name: 'Modifiers',
      price: 99,
      img: carbonModifiers
    },
    {
      id: uniqid(),
      name: 'Dual Modifiers',
      price: 99,
      img: carbonDualModifiers
    },
    {
      id: uniqid(),
      name: 'Bones Modifiers',
      price: 99,
      img: carbonBonesModifiers
    },
    {
      id: uniqid(),
      name: '40 Percent',
      price: 55,
      img: carbonFortyPercent
    },
    {
      id: uniqid(),
      name: 'Ergodox Kit',
      price: 70,
      img: carbonErgodox
    },
    {
      id: uniqid(),
      name: 'Numpad',
      price: 42,
      img: carbonNumpad
    },
    {
      id: uniqid(),
      name: 'Bones Numpad',
      price: 42,
      img: carbonBonesNumpad
    },
    {
      id: uniqid(),
      name: 'Iso UK',
      price: 40,
      img: carbonIsoUK
    },
    {
      id: uniqid(),
      name: 'Xtra Kit',
      price: 25,
      img: carbonXtraKit
    },
    {
      id: uniqid(),
      name: 'Warning Signs',
      price: 22,
      img: carbonWarningSigns
    },
    {
      id: uniqid(),
      name: 'Rolling Bones',
      price: 70,
      img: carbonRollingBones
    },
    {
      id: uniqid(),
      name: 'Half-life Lambda Kit',
      price: 9,
      img: carbonHalfLifeLambda
    },
    {
      id: uniqid(),
      name: '6.25U Spacebar Kit',
      price: 10,
      img: carbon625uSpacebar
    },
    {
      id: uniqid(),
      name: '7U Spacebar Kit',
      price: 10,
      img: carbon7uSpacebar
    },
    {
      id: uniqid(),
      name: 'Beige Spacekeys',
      price: 12,
      img: carbonBeigeSpacekey
    },
    {
      id: uniqid(),
      name: 'Gray Spacekeys',
      price: 12,
      img: carbonGraySpacekey
    },
    {
      id: uniqid(),
      name: 'Carbon Novelties',
      price: 34,
      img: carbonNovelties
    },
  ],
}


export default carbonSet;