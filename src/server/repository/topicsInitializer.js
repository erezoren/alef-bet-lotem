
function getTopics() {
  return [{id: 1, image: 'pokemon.jpg', name: 'פוקימון'},
    {id: 2, image: 'soccer.jpg', name: 'כדורגל'},
    {id: 3, image: 'bends.jpg', name: 'להקות'},
    {id: 4, image: 'animals.jpg', name: 'חיות'}]
}

module.exports = {
  getTopics: getTopics,
};