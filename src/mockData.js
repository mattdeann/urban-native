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
    name: `Cucumber`,
    description: `Cucumbers are the fruit of a creeping vine. They are generally oblong and have a high water content.
      Their edible skin is often green but can also be yellow, white, or striped. The vine can be left to spread along
      the ground, or it can be trained to a trellis. The vine's large leaves hide the cucumbers and shade them.
      There are three main varieties of cucumber: slicing, pickling, and seedless.`,
    // Description is a plant description followed by care instructions
    sunReqs: `Full Sun`,
    sowingMethod: `Direct seed outdoors in groups of 2-3, 1/2" deep. Thin to 1 plant.`,
    spread: 90,
    // measure in centimeters
    rowSpacing: 20,
    // measure in centimeters
    height: 20,
    // measure in centimeters
    daysToMaturity:
      `It mainly depends on variety, weather conditions, nutrients etc.,
      Generally cucumber plants take approximately 55 to 70 days from germination to harvesting stage.
      1. The germination stage alone takes 7 to 10 days.
      2. After germination the first male flower would be seen within 35 to 55 days roughly, which will be later followed by developing a female flower in one or two weeks (i.e., 42 to 62 days).
      3. The fertilized female flower will take 10 to 12 days to produce fruits.`,
    photoLinks: [`https://www.thespruce.com/thmb/otEJQ4c7WgHNKUVJNFsTr5Opo4A=/960x0/filters:no
      _upscale():max_bytes(150000):strip_icc():format(webp)/companion-plants-for-cucumbers-2540044-16-d691b5c0f19f44a8b1303e805be9c99d.jpg`]
  },
  {
    id: 3,
    key: Date.now(),
    name: `Kale`,
    description:
     `Kale is a cultivar of the species Brassica oleracea. It has green or purple leaves that
      branch off from one to multiple upright stems and do not form a head like cabbage. The plant is usually
      grown as an annual, but if grown as a perennial, it will form seeds in the second year. Current popular
      varieties include Curly kale, Italian kale, and Red Russian kale (green leaves with pale purple stems).
      It can be grown as baby salad greens or for bunching adult leaves. Leaves are sweeter after a frost and
      delicious eaten raw, added to salads, sautéed, or added to stews and casseroles.`,
    // Description is a plant description followed by care instructions
    sunReqs: `Full Sun`,
    sowingMethod: `Direct seed. If planting indoors, harden off before transplanting seedlings outside.`,
    spread: 75,
    rowSpacing: 45,
    height: 75,
    daysToMaturity:
     `Kale has a relatively fast growth rate and can grow from seed to harvest in about two months.
      It is a biennial plant that typically is grown as an annual. It is best planted in spring
      in cooler climates, and in late summer in warmer climates.`,
    photoLinks: [`thumbnail_url": "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/55b6b7ce6465380003910200.jpg?1438037945`]
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
