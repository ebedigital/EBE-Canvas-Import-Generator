/*
=========================================
EBE Canvas Import Generator

Module:
CSV Generator

Purpose:
Convert JavaScript Objects
to CSV Format

=========================================
*/

function generateCSV(data){

    if(!data || data.length === 0){

        return "";

    }

    // ==========================
    // Headers
    // ==========================

    const headers = Object.keys(data[0]);

    // ==========================
    // CSV Header Row
    // ==========================

    let csv = headers.join(",") + "\n";

    // ==========================
    // Data Rows
    // ==========================

    data.forEach(row => {

        const values = headers.map(header => {

            let value = row[header] ?? "";

            value = String(value)
                .replace(/"/g,'""');

            return `"${value}"`;

        });

        csv += values.join(",") + "\n";

    });

    return csv;

}