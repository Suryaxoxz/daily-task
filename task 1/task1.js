class Tablegenerator {
    constructor (tableSelector, rowsSelector, columnsSelector) {
      this.rowsSelector = rowsSelector
      this.columnsSelector = columnsSelector
      this.tableObj = document.querySelector(tableSelector)
    }
  
    generate = () => {
      let tableHTML = ''
      const rowsNumber = parseInt(document.querySelector(this.rowsSelector).value) + 1
      const columnsNumber = parseInt(document.querySelector(this.columnsSelector).value) + 1
      
  
      for (let i = 1; i <= rowsNumber; i++) {
        let tr = '<tr>'
        let td = ''
  
        for (let j = 1; j <= columnsNumber; j++) {
          const cellContent = i * j
  
          if (i === 1 || j === 1) {
            td = `<th class="header">${cellContent}</th>`;
          }
          else {
            td = `<td>${cellContent}</td>`;
          }
  
          tr += td
        }
  
        tr += '</tr>'
        tableHTML += tr
      }
      
      this.tableObj.innerHTML = tableHTML
    }
    
    hidePlaceholder () {
      document.querySelector('.table-rows').classList.add('hidden')
    }
  }
  
  const table = new Table('.table', '.rows', '.columns')
  
  document.querySelector('.button').addEventListener('click', () => {
    table.generate()
    table.hidePlaceholder()
  });
  
  const inputs = document.querySelectorAll('input');
  
  setInterval(() => {
    inputs.forEach(input => {
      const red = Math.random() * 255;
      const green = Math.random() * 255;
      const blue = Math.random() * 255;
      
      input.style.color = `rgb(${red}, ${green}, ${blue})`;
    })
  }, 250);