const form = new URLSearchParams(new FormData(document.getElementById('miFormulario')));

fetch(scriptURL, {
  method: 'POST',
  body: form,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
