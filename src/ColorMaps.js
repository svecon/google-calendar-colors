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
    'Bouldering': 'Sports',
    'Breakfast': 'Food',
    'Chinese': 'Learning',
    'Chocolate tasting': 'Relax',
    'Commute': 'Commute',
    'Dinner': 'Food',
    'Emails, news, Facebook': 'Relax',
    'Exercise - stretching': 'Sports',
    'Fun': 'Fun',
    'German': 'Learning',
    'German homeworks': 'Learning',
    'German lesson': 'Learning',
    'German test': 'Learning',
    'Google App Scripts - Calendar colors': 'Programming',
    'Learning - Wim Hof': 'Learning',
    'Lunch': 'Food',
    'Meditation + Breathing': 'Relax',
    'Meditation + Breathing + Cold Shower': 'Relax',
    'Nap': 'Relax',
    'News': 'Fun',
    'Planning': 'Planning',
    'Programming': 'Programming',
    'Reading News': 'Fun',
    'Reading news': 'Fun',
    'Relax': 'Relax',
    'Running': 'Sports',
    'Sleep': 'Sleep',
    'Work': 'Work',
    'Writing conference paper': 'Learning',
    'Xiao': 'Socializing',
  };
  return titleToCategoryDict[title];
}
