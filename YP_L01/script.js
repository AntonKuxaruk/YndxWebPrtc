const SEARCH_API_URL = '//yandex.ru/search/?text=';
const SUGGESTIONS_API_URL = '//suggest.yandex.ru/suggest-ya.cgi?uil=ru&v=4&sn=5&part=';

function clearSuggestions(container) {
  container.innerHTML = '';
}

function search(query) {
  window.open(SEARCH_API_URL + query);
}

function handleResponse(data, suggestionsContainer) {
  clearSuggestions(suggestionsContainer);

  if (!data && !data[1]) {
    return;
  }

  data[1].slice(1).forEach((suggestion) => {
    const li = document.createElement('li');
    li.onmousedown = function () {
      search(suggestion);
    };
    li.textContent = suggestion;
    suggestionsContainer.appendChild(li);
  });
}

function getSuggestions(suggestionsFor, suggestionsContainer) {
  if (!suggestionsFor) {
    clearSuggestions(suggestionsContainer);
    return null;
  }

  return fetch(SUGGESTIONS_API_URL + suggestionsFor, {
      credentials: 'include',
      mode: 'cors',
      method: 'GET'
  })
    .then(response => response.json())
    .then(data => handleResponse(data, suggestionsContainer));
}

function magic() {
  const form = document.forms[0];
  const input = document.querySelector('.input');
  const suggestionsContainer = document.createElement('ul');
  const searchButton = document.querySelector('button');
  let query = null;

  input.appendChild(suggestionsContainer);

  form.elements.search.onfocus = function (e) {
    e.preventDefault();

    if (e.target.value) {
      getSuggestions(e.target.value, suggestionsContainer);
    }

    suggestionsContainer.style.display = 'block';
  };

  form.elements.search.onblur = function (e) {
    e.preventDefault();
    suggestionsContainer.style.display = 'none';
  };

  form.elements.search.oninput = function (e) {
    e.preventDefault();
    query = e.target.value;
    getSuggestions(query, suggestionsContainer);
  };

  searchButton.onclick = function (e) {
    e.preventDefault();
    search(query);
  };
}
magic();