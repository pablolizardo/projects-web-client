const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Agost",
  "September",
  "October",
  "November",
  "December",
];
const colors = [
  { value: "pink", label: "Pink" },
  { value: "orange", label: "Orange" },
  { value: "green", label: "Green" },
  { value: "gray", label: "gray" },
  { value: "purple", label: "Purple" },
  { value: "indigo", label: "Indigo" },
  { value: "blue", label: "Blue" },
  { value: "red", label: "Red" },
  { value: "teal", label: "Teal" },
  { value: "yellow", label: "Yellow" },
  { value: "cyan", label: "Cyan" },
];
const projectTypes = [
  { value: "sprints", label: "🏃‍♂️ Sprints" },
  { value: "rc", label: "🌀 Release Cycle" },
  { value: "waterfall", label: "🚰 Waterfall" },
];

const sprintTypes = [
  { value: "sprints", label: "🏃‍♂️ Sprint" },
  { value: "rc", label: "🌀 Release Cycle" },
  { value: "support", label: "📖 Support" },
  { value: "fixs", label: "💥 Fix Error/Bugs" },
];
const taskTypes = [
  { value: "docs", label: "📚 Documentation" },
  { value: "dev", label: "👨‍💻 Code" },
  { value: "deploy", label: "🚀 Deploy" },
  { value: "test", label: "👨🏻‍🔬 Testing" },
  { value: "design", label: "💅 UI/UX Design" },
  { value: "think", label: "💡 Brainstorming" },
];

const timelineZooms = [
  { value: 2500, label: "Tiny" },
  { value: 5000, label: "Small" },
  { value: 10000, label: "Normal" },
  { value: 15000, label: "Large" },
  { value: 20000, label: "Huge" },
];
module.exports = {
  monthsNames,
  colors,
  projectTypes,
  taskTypes,
  sprintTypes,
  timelineZooms,
};
