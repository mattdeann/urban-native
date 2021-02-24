const crops = [
  {
    id: 1,
    key: Date.now(),
    name: 'Blackberries',
    description: `Deeply colored, sweet, clustered berries. The blackberry
    plant is a perennial plant that bears biennial stems or canes. The plant
    often has thorns, though some cultivars do not. Most varieties have greater
    berry yields from the second year on. In peak season, expect to harvest twice a week.`,
    // Description is a plant description followed by care instructions
    sunReqs: `Full Sun.`,
    sowingMethod: `Transplant canes into soil or pot.`,
    spread: 75,
    // measure in centimeters
    rowSpacing: 100,
    // measure in centimeters
    height: 175,
    // measure in centimeters
    daysToMaturity: `A blackberry bush will produce fruit for 3 to 4 weeks
    sometime between late June and early September in most areas of the U.S.
    Some blackberry bushes can produce fruit on first year canes (primocanes),
    but most will not produce fruit until 1 or 2 years after planting.`,
    photoLinks: ["https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dc7793732390003750100.jpg?1428014965"]
  },
  {
    id: 2,
    key: Date.now(),
    name: String,
    description: String,
    // Description is a plant description followed by care instructions
    sunReqs: String,
    sowingMethod: String,
    spread: Number,
    rowSpacing: Number,
    height: Number,
    daysToMaturity: Number,
    photoLinks: [String, String]
  },{
    id: 3,
    key: Date.now(),
    name: String,
    description: String,
    // Description is a plant description followed by care instructions
    sunReqs: String,
    sowingMethod: String,
    spread: Number,
    rowSpacing: Number,
    height: Number,
    daysToMaturity: Number,
    photoLinks: [String, String]
  },{
    id: 4,
    key: Date.now(),
    name: String,
    description: String,
    // Description is a plant description followed by care instructions
    sunReqs: String,
    sowingMethod: String,
    spread: Number,
    rowSpacing: Number,
    height: Number,
    daysToMaturity: Number,
    photoLinks: [String, String]
  },{
    id: 5,
    key: Date.now(),
    name: String,
    description: String,
    // Description is a plant description followed by care instructions
    sunReqs: String,
    sowingMethod: String,
    spread: Number,
    rowSpacing: Number,
    height: Number,
    daysToMaturity: Number,
    photoLinks: [String, String]
  },{
    id: 6,
    key: Date.now(),
    name: String,
    description: String,
    // Description is a plant description followed by care instructions
    sunReqs: String,
    sowingMethod: String,
    spread: Number,
    rowSpacing: Number,
    height: Number,
    daysToMaturity: Number,
    photoLinks: [String, String]
  },{
    id: 7,
    key: Date.now(),
    name: String,
    description: String,
    // Description is a plant description followed by care instructions
    sunReqs: String,
    sowingMethod: String,
    spread: Number,
    rowSpacing: Number,
    height: Number,
    daysToMaturity: Number,
    photoLinks: [String, String]
  },{
    id: 8,
    key: Date.now(),
    name: String,
    description: String,
    // Description is a plant description followed by care instructions
    sunReqs: String,
    sowingMethod: String,
    spread: Number,
    rowSpacing: Number,
    height: Number,
    daysToMaturity: Number,
    photoLinks: [String, String]
  },{
    id: 9,
    key: Date.now(),
    name: String,
    description: String,
    // Description is a plant description followed by care instructions
    sunReqs: String,
    sowingMethod: String,
    spread: Number,
    rowSpacing: Number,
    height: Number,
    daysToMaturity: Number,
    photoLinks: [String, String]
  },{
    id: 10,
    key: Date.now(),
    name: String,
    description: String,
    // Description is a plant description followed by care instructions
    sunReqs: String,
    sowingMethod: String,
    spread: Number,
    rowSpacing: Number,
    height: Number,
    daysToMaturity: Number,
    photoLinks: [String, String]
  }
]

const users =
[
  {
    id: Number,
    name: String,
    myGarden: [cropID, cropID]
    // to build garden, iterate through cropIDs, find each one, and use that built array
  },
  {
    id: Number,
    name: String,
    myGarden: [cropID, cropID]
    // to build garden, iterate through cropIDs, find each one, and use that built array
  },
  {
    id: Number,
    name: String,
    myGarden: [cropID, cropID]
    // to build garden, iterate through cropIDs, find each one, and use that built array
  },
  {
    id: Number,
    name: String,
    myGarden: [cropID, cropID]
    // to build garden, iterate through cropIDs, find each one, and use that built array
  },
  {
    id: Number,
    name: String,
    myGarden: [cropID, cropID]
    // to build garden, iterate through cropIDs, find each one, and use that built array
  },
]
