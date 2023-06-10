//your code here
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Radiohead'];

function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  const sortedNames = bandNames.sort((a, b) => {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();

    // Remove articles from the names
    const modifiedNameA = removeArticles(nameA, articles);
    const modifiedNameB = removeArticles(nameB, articles);

    return modifiedNameA.localeCompare(modifiedNameB);
  });

  return sortedNames;
}

function removeArticles(name, articles) {
  for (let article of articles) {
    if (name.startsWith(article + ' ')) {
      return name.slice(article.length + 1);
    }
  }
  return name;
}

const sortedBandNames = sortBandNames(bandNames);
const bandList = document.getElementById('band');

sortedBandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  bandList.appendChild(li);
});

