'use strict';

const Xlsx = require('../../lib/XlsxPopulate');

Xlsx.fromFileAsync('test1.xlsx')
    .then(workbook => {
        workbook.sheet(0).cell('A5').value('刘德华');
        workbook.toFileAsync('test1_out.xlsx');
    }, reason => {
        console.error(reason);
    });