function colorToNumber(color) {
  var colorToNumberDict = {
    'default': 0,
    'bold blue': 9,
    'blue': 1,
    'turquoise': 7,
    'green': 2,
    'bold green': 10,
    'yellow': 5,
    'orange': 6,
    'red': 4,
    'bold red': 11,
    'purple': 3,
    'gray': 8,
  };
  return colorToNumberDict[color];
}

function categoryToColor(category) {
  var categoryToColorDict = {
    'Sports': 'bold green',
    'Food': 'turquoise',
    'Learning': 'purple',
    'Fun': 'bold red',
    'Programming': 'blue',
    'Work': 'gray',
    'Relax': 'green',
    'Socializing': 'yellow',
    'Sleep': 'gray',
    'Commute': 'gray',
    'Planning': 'bold blue',
  };
  return categoryToColorDict[category];
}

function titleToCategory(title) {
  var titleToCategoryDict = {
  };
  return titleToCategoryDict[title];
}
