function showHiddenRows() {
        
    const hiddenRows = document.getElementsByClassName('hide');
    let tableBtn = document.querySelector('[data-bnt]');

    for (let i = 0; i < hiddenRows.length; i++) {
      if (hiddenRows[i].style.display === 'none') {
        hiddenRows[i].style.display = 'table-row';
        tableBtn.innerHTML= "Show Less";
      } else {
        hiddenRows[i].style.display = 'none';
        tableBtn.innerHTML= "Show More";
      }
    }

  };