function updatePosterById(id, newTitle) {
    let poster = findPosterById(id);
    if (poster) {
        poster.title = newTitle;
    } else {
        console.log('Poster not found');
    }
}

// Example usage:
updatePosterById(1, "Updated First Poster");
console.log(posters);
// Output: 
// [
//   { id: 1, title: 'Updated First Poster' },
//   { id: 2, title: 'Second Poster' }
// ]
