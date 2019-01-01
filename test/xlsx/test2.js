'use strict';

const Xlsx = require('../../lib/XlsxPopulate');

Xlsx.fromFileAsync('test2.xlsx')
    .then(workbook => {
        //workbook.sheet(0).insertRow(4).cell('B').value('张学友');
        workbook.sheet(0).insertAndCopyRow(5, 4, true)
            .cell('B').value('张学友');
        workbook.toFileAsync('test2_out.xlsx');
    }, reason => {
        console.error(reason);
    });