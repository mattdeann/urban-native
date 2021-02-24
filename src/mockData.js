const crops = [
  {
    id: Number, 
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
  },
]

const users = [
  {
    id: Number,
    name: String,
    myGarden: [cropID, cropID]
    // to build garden, iterate through cropIDs, find each one, and use that built array
  }
]