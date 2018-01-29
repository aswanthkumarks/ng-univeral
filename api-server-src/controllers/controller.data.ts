


function readLines(input, func) {
    let remaining = '';

    input.on('data', function (data) {
        remaining += data;
        let index = remaining.indexOf('\n');
        let last = 0;
        while (index > -1) {
            const line = remaining.substring(last, index);
            last = index + 1;
            func(line);
            index = remaining.indexOf('\n', last);
        }

        remaining = remaining.substring(last);
    });

    input.on('end', function () {
        if (remaining.length > 0) {
            func(remaining);
        }
    });
}

exports.get = function (req, res) {
    const path = require('path');
    const fs = require('fs');
    const data = [];
    const filename = path.join('data', 'log.txt');
    const lineReader = require('readline').createInterface({
        input: fs.createReadStream(filename)
    });

    lineReader.on('line', function (line) {
        data.push(line);
    }).on('close', () => {
        return res.status(200).json({
            data
        });
    });
};
