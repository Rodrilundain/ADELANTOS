const form = new URLSearchParams(new FormData(document.getElementById('miFormulario')));

fetch(scriptURL, {https://script.google.com/u/0/home/projects/1tYJ9elFvWnE5_cVJ5qanrg-CLj6Ag27KS-dBapg2y2xXAVtSIj-u7zHI/edit
  method: 'POST',
  body: form,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
