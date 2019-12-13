
const POSITION_SLOT = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const CENTER_POINTS = [
  { x: 10, y: 10 },
  { x: 113, y: 10 },
  { x: 213, y: 10 },
  { x: 10, y: 113 },
  { x: 113, y: 113 },
  { x: 213, y: 113 },
  { x: 10, y: 213 },
  { x: 113, y: 213 },
  { x: 213, y: 213 },
]

const AREAS = [
  {
    startX: 3,
    endX: 103,
    startY: 3,
    endY: 103,
    slot: 0
  },
  {
    startX: 106,
    endX: 206,
    startY: 3,
    endY: 103,
    slot: 1
  },
  {
    startX: 209,
    endX: 309,
    startY: 3,
    endY: 103,
    slot: 2
  },
  {
    startX: 3,
    endX: 103,
    startY: 106,
    endY: 206,
    slot: 3
  },
  {
    startX: 106,
    endX: 206,
    startY: 106,
    endY: 206,
    slot: 4
  },
  {
    startX: 209,
    endX: 309,
    startY: 106,
    endY: 206,
    slot: 5
  },
  {
    startX: 3,
    endX: 103,
    startY: 209,
    endY: 309,
    slot: 6
  },
  {
    startX: 106,
    endX: 206,
    startY: 209,
    endY: 309,
    slot: 7
  },
  {
    startX: 209,
    endX: 309,
    startY: 209,
    endY: 309,
    slot: 8
  },
]


export {
  POSITION_SLOT,
  AREAS,
  CENTER_POINTS
}
