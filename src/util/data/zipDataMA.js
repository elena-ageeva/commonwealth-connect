const zips = [
  {
    zip: "02169",
    city: "Quincy",
    state: "MA",
    latLong: [42.250739, -70.99593],
    distance: 22.9
  },
  {
    zip: "01856",
    city: "Lowell",
    state: "MA",
    latLong: [42.641779, -71.303488],
    distance: 17.1
  },

  {
    zip: "01752",
    city: "Marlborough",
    state: "MA",
    latLong: [42.350909, -71.54753],
    distance: 24.3
  },
  {
    zip: "02344",
    city: "Middleboro",
    state: "MA",
    latLong: [41.970474, -71.2856],
    distance: 20.2
  },
  {
    zip: "01746",
    city: "Holliston",
    state: "MA",
    latLong: [42.196065, -71.43797],
    distance: 15.9
  },
  { zip: "01929", city: "Essex", state: "MA", latLong: [42.631753, -70.77925] },
  {
    zip: "02724",
    city: "Fall River",
    state: "MA",
    latLong: [41.684152, -71.17436]
  },

  { zip: "01253", city: "Otis", state: "MA", latLong: [42.198403, -73.10205] },
  {
    zip: "01462",
    city: "Lunenburg",
    state: "MA",
    latLong: [42.582839, -71.72051]
  },
  {
    zip: "02641",
    city: "East Dennis",
    state: "MA",
    latLong: [41.734713, -70.20467]
  },
  {
    zip: "02669",
    city: "West Chatham",
    state: "MA",
    latLong: [41.673635, -69.99494]
  },
  {
    zip: "01515",
    city: "East Brookfield",
    state: "MA",
    latLong: [42.212777, -72.05311]
  },
  {
    zip: "02113",
    city: "Boston",
    state: "MA",
    latLong: [42.365028, -71.05636]
  },

  {
    zip: "01569",
    city: "Uxbridge",
    state: "MA",
    latLong: [42.064978, -71.62992]
  },
  {
    zip: "02359",
    city: "Pembroke",
    state: "MA",
    latLong: [42.065554, -70.80426]
  },
  {
    zip: "02663",
    city: "South Wellfleet",
    state: "MA",
    latLong: [41.800531, -70.076776]
  },
  {
    zip: "01529",
    city: "Millville",
    state: "MA",
    latLong: [42.036396, -71.57798]
  },
  {
    zip: "02136",
    city: "Hyde Park",
    state: "MA",
    latLong: [42.252198, -71.12593]
  },
  {
    zip: "02651",
    city: "North Eastham",
    state: "MA",
    latLong: [41.824264, -69.98176]
  },
  {
    zip: "01302",
    city: "Greenfield",
    state: "MA",
    latLong: [42.522178, -72.624164]
  },
  {
    zip: "01750",
    city: "Natick",
    state: "MA",
    latLong: [42.273817, -71.378157]
  },
  {
    zip: "02059",
    city: "North Marshfield",
    state: "MA",
    latLong: [41.970474, -70.701357]
  },
  {
    zip: "01242",
    city: "Lenox Dale",
    state: "MA",
    latLong: [42.336557, -73.24599]
  },
  {
    zip: "01841",
    city: "Lawrence",
    state: "MA",
    latLong: [42.71159, -71.16667]
  },
  {
    zip: "02062",
    city: "Norwood",
    state: "MA",
    latLong: [42.185974, -71.20166]
  },
  {
    zip: "02364",
    city: "Kingston",
    state: "MA",
    latLong: [41.993102, -70.73827]
  },
  {
    zip: "01913",
    city: "Amesbury",
    state: "MA",
    latLong: [42.854423, -70.93547]
  },
  { zip: "01081", city: "Wales", state: "MA", latLong: [42.058024, -72.22517] },
  {
    zip: "02341",
    city: "Hanson",
    state: "MA",
    latLong: [42.059434, -70.86205]
  },
  {
    zip: "02747",
    city: "North Dartmouth",
    state: "MA",
    latLong: [41.637916, -70.99076]
  },
  {
    zip: "02154",
    city: "Waltham",
    state: "MA",
    latLong: [42.388938, -71.2398]
  },
  {
    zip: "02176",
    city: "Melrose",
    state: "MA",
    latLong: [42.459045, -71.06233]
  },
  {
    zip: "01258",
    city: "South Egremont",
    state: "MA",
    latLong: [42.103122, -73.45734]
  },
  {
    zip: "02159",
    city: "Newton",
    state: "MA",
    latLong: [42.316097, -71.191248]
  },
  {
    zip: "02633",
    city: "Chatham",
    state: "MA",
    latLong: [41.686534, -69.97746]
  },
  { zip: "01032", city: "Goshen", state: "MA", latLong: [42.45792, -72.81551] },
  { zip: "01568", city: "Upton", state: "MA", latLong: [42.17382, -71.60971] }

  // {
  //   zip: "02139",
  //   city: "Cambridge",
  //   state: "MA",
  //   latLong: [42.364347, -71.10431]
  // },

  // {
  //   zip: "02407",
  //   city: "Scituate",
  //   state: "MA",
  //   latLong: [42.136086, -70.688251]
  // },
  // {
  //   zip: "01938",
  //   city: "Ipswich",
  //   state: "MA",
  //   latLong: [42.682965, -70.84007]
  // },
  // {
  //   zip: "01007",
  //   city: "Belchertown",
  //   state: "MA",
  //   latLong: [42.278424, -72.411]
  // },

  // {
  //   zip: "02375",
  //   city: "South Easton",
  //   state: "MA",
  //   latLong: [42.029749, -71.10191]
  // },
  // {
  //   zip: "02639",
  //   city: "Dennis Port",
  //   state: "MA",
  //   latLong: [41.661115, -70.13348]
  // },
  // {
  //   zip: "02382",
  //   city: "Whitman",
  //   state: "MA",
  //   latLong: [42.08235, -70.93734]
  // },
  // {
  //   zip: "02719",
  //   city: "Fairhaven",
  //   state: "MA",
  //   latLong: [41.634152, -70.8814]
  // },
  // {
  //   zip: "02126",
  //   city: "Mattapan",
  //   state: "MA",
  //   latLong: [42.272098, -71.09426]
  // },
  // {
  //   zip: "02769",
  //   city: "Rehoboth",
  //   state: "MA",
  //   latLong: [41.835067, -71.26115]
  // },
  // {
  //   zip: "01094",
  //   city: "Wheelwright",
  //   state: "MA",
  //   latLong: [42.358201, -72.140846]
  // },
  // {
  //   zip: "02361",
  //   city: "Plymouth",
  //   state: "MA",
  //   latLong: [41.970474, -70.701357]
  // },
  // {
  //   zip: "02146",
  //   city: "Brookline",
  //   state: "MA",
  //   latLong: [42.308198, -71.088745]
  // },
  // {
  //   zip: "02472",
  //   city: "Watertown",
  //   state: "MA",
  //   latLong: [42.371296, -71.18196]
  // },
  // {
  //   zip: "02305",
  //   city: "Brockton",
  //   state: "MA",
  //   latLong: [41.970474, -70.701357]
  // },
];

export default zips;
