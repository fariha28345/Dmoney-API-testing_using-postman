const newman = require('newman');
 
newman.run({
    //collection: require('./collection/collection.json'),
    collection:'https://api.postman.com/collections/25356274-ea195d7d-82ae-4399-ab77-d4a648ec1458?access_key=PMAT-01GQSP3TB5ZG54E1MN5PBVRVNB',
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});