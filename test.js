import { randomUUID } from 'crypto'
const o = [{ id: randomUUID() }]
const i = o.map(i => ({ ...i, index: 1 }))
i
const z = i.filter(a => a.hasOwnProperty('index')).find(x => {
  if (x.index === 1) return x
})
z