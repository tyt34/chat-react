import { checkInArray } from './main'

const arr = [
  {
    id: '1',
    avatar: 'ava1',
    name: 'name1',
  },
  {
    id: '2',
    avatar: 'ava2',
    name: 'name2',
  },
  {
    id: '3',
    avatar: 'ava3',
    name: 'name3',
  },
]

test('Тестирование функции checkInArray', () => {
  expect(checkInArray('1', arr)).toBe(false)
  expect(checkInArray('4', arr)).toBe(true)
})
