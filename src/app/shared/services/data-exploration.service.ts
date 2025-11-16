import { Injectable } from '@angular/core';
import {jsPDF} from 'jspdf';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class DataExplorationService {

  constructor() { }

  generatePDF(columns: any[], rows: any[], pdfTitle: string) {
    const doc = new jsPDF();

    // Set the font and size
    doc.setFont('Times','italic','bold');
    doc.setFontSize(18);
    doc.setTextColor(0, 102, 204)

    // Draw margin border
    const margin =12;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin);


    // Set the PDF Title
    doc.text(pdfTitle, 14, 20);

    // Define headers for autoTable
    const headers = columns.map(col => ({ header: col.header, dataKey: col.field }));

    // Use autoTable to generate the table
    (doc as any).autoTable({
      columns: headers,
      body: rows,
      startY: 30, // Adjust starting Y position
      theme: 'striped',
      margin: {left: margin, right: margin  }, // Optional: Adjust right margin if needed
    });

    // Save the PDF
    doc.save(`${pdfTitle}.pdf`);
  }

  generateExcel(data: any[][] = [['Hello', 'World']], filename: string = 'hello_world'): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    this.saveAsExcelFile(excelBuffer, filename);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    const link = document.createElement('a');
    const url = window.URL.createObjectURL(data);
    link.href = url;
    link.download = `${fileName}${EXCEL_EXTENSION}`;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  generatePrint(data: any[], title: string): void {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      const htmlContent = `
        <html>
          <head>
            <title>${title}</title>
            <style>
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th, td {
                padding: 8px 12px;
                border: 1px solid #ddd;
              }
              th {
                background-color: #f4f4f4;
              }
            </style>
          </head>
          <body>
            <h1>${title}</h1>
            <table>
              <thead>
                <tr>${Object.keys(data[0]).map(key => `<th>${key}</th>`).join('')}</tr>
              </thead>
              <tbody>
                ${data.map(row => `
                  <tr>${Object.values(row).map(val => `<td>${val}</td>`).join('')}</tr>
                `).join('')}
              </tbody>
            </table>
            <script>
              window.onload = function() {
                window.print();
                window.close();
              };
            </script>
          </body>
        </html>
      `;
      newWindow.document.write(htmlContent);
      newWindow.document.close();
    }
  }

  generateCsv(filename: string, data: string[]): void {
    const csvContent = data.map(row => `"${row}"`).join('\n');

    // Create a blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
