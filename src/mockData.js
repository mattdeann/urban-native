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
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/55b6b7ce6465380003910200.jpg?1438037945`]
  },
  {
    id: 4,
    key: Date.now(),
    name: `Broccoli`,
    description: `Broccoli has large flower heads known as "crowns" that are green to blue-green
    in color, grouped tightly together atop a thick stem, and surrounded by leaves. Broccoli
    resembles cauliflower, a different cultivar in its species. It thrives in cool weather.`,
    // Description is a plant description followed by care instructions
    sunReqs: `Full Sun`,
    sowingMethod: `Sow seeds indoors and transplant outside`,
    spread: 60,
    rowSpacing: 40,
    height: 75,
    daysToMaturity: `Broccoli grown from seed will come to harvest in 100 to 150 days.
    Grown from transplants broccoli will come to harvest in 55 to 80 days. Cut buds
    when they are still green and tight. Cut the central head with five to six inches of stem.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54b4b5ea61306500020b0000.jpg?1421129190`]
  },
  {
    id: 5,
    key: Date.now(),
    name: `Carrots`,
    description: `The carrot is a root vegetable. It is usually orange in color, but some cultivars are purple,
    black, red, white, and yellow. The most commonly eaten part of the plant is the taproot, but the greens
    are sometimes eaten as well. The leaves appear first, and the taproot grows more slowly beneath the soil.
    Fast-growing cultivars mature within three months of sowing the seed. Slower-maturing cultivars are harvested four months after sowing.`,
    // Description is a plant description followed by care instructions
    sunReqs: `Full Sun`,
    sowingMethod: `Direct Seed, thin to 3cm apart when seedlings are 8cm high`,
    spread: 5,
    rowSpacing: 5,
    height: 10,
    daysToMaturity: `Harvesting. Carrots should be ready for harvest 70 to 80 days after planting.
    Pull them from the soil when the roots are 1 to 1½ inches in diameter. To avoid breaking the
    carrot while pulling, loosen the soil around the carrot with a spade.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58c312395865650004000000.jpg?1489179191`]
  },
  {
    id: 6,
    key: Date.now(),
    name: `Tomatoes`,
    description: `Cherry tomatoes range in size from a thumbtip to the size of a golf ball.
    Their shape ranges from spherical to slightly oblong to pointed at the bottom.
    They are often red, but can also be yellow, green, striped, and even black.
    More oblong cherry tomatoes often share characteristics with plum tomatoes, and are
    known as grape tomatoes. Cherry tomatoes can be quite sweet (such as the Sungold or Sunsweet
    yellow varieties), more traditionally acidic, or deep in flavor. They are delicious for
    snacking, in salads, lightly roasted or grilled, or baked. They require little to no pruning unlike larger tomato plants.`,
    // Description is a plant description followed by care instructions
    sunReqs: `Full Sun`,
    sowingMethod: `Sow seeds indoors 6-8 weeks before the last expected frost`,
    spread: 45,
    rowSpacing: 60,
    height: 60,
    daysToMaturity: `Because of the small fruit size, typically one to two inches, these high
    yielding plants often bear fruit in just 55 to 65 days, with some ready for harvest in as
    little as 45 days. However, there are those that can take up to 80 days to mature as well.`,
    photoLinks: [`https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/57073ebd4a3af70003000006.jpg?1460092602`]
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
