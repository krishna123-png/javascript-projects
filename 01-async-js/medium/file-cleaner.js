
const fs = require('fs').promises

function removeExtraSpaces(content) {
    // Replace multiple spaces with a single space and trim leading/trailing spaces
    return content.replace(/\s+/g, ' ').trim();
}

fs.readFile('../easy/a.txt', 'utf-8')
    .catch((err) => console.error(err))
    .then((data) => {
        const cleanData = removeExtraSpaces(data)
        fs.writeFile('../easy/a.txt', cleanData, 'utf-8')
            .catch((err) => console.error(err))
            .then(() => console.log('Extra spaces removed successfully'))
    })