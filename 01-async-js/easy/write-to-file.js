const fs = require('fs').promises

fs.appendFile('a.txt', "krishna, dhruv, mummy, papa")
    .then(() => console.log('written successfully'))
    .catch((error) => console.error(error))

    




