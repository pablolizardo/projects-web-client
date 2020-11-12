const monthsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Agost',
    'September',
    'October',
    'November',
    'December',
  ]
  const colors = [
    { value: 'pink', label: 'Pink' },
    { value: 'green', label: 'Green' },
    { value: 'purple', label: 'Purple' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
    { value: 'teal', label: 'Teal' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'cyan', label: 'Cyan' },
]
const projectTypes = [
    { value: 'sprints', label: '🏃‍♂️ Sprint' },
    { value: 'rc', label: '🌀 Release Cycle' },
]

const sprintTypes = [
  { value: '📚', label: '📚 Docs' },
  { value: '👨‍💻', label: '👨‍💻 Dev' },
  { value: '🚀', label: '🚀 Deploy' },
  { value: '👨🏻‍🔬', label: '👨🏻‍🔬 Test' },
  { value: '💅', label: '💅 Design' },
]

const timelineZooms = [
  {value: 2500, label: 'Tiny'},
  {value: 5000, label: 'Small'},
  {value: 10000, label: 'Normal'},
  {value: 15000, label: 'Large'},
  {value: 20000, label: 'Huge'},
]
module.exports = { monthsNames, colors, projectTypes , sprintTypes, timelineZooms}