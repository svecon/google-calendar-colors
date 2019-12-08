const hashtags = require('./../src/hashtags');

test('adds 1 + 2 to equal 3', () => {
  expect(hashtags.parseHashtags('#hello')).toEqual(['hello']);
});

test('adds 1 + 2 to equal 3', () => {
  expect(hashtags.parseHashtags('#hello #world')).toEqual(['hello', 'world']);
});

test('adds 1 + 2 to equal 3', () => {
  expect(hashtags.removeHashtag('#hello')).toEqual('hello');
});

test('datetime', () => {
  expect(new Date(hashtags.datetime())).toEqual(new Date("2018-06-10T14:43:20.636Z"));
});
