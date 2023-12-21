document.addEventListener('DOMContentLoaded', function () {

    const itemsJson = localStorage.getItem('todo');
    /**
     * @type {{what: string, when: string, who: string}[]}
     */
    const items = typeof itemsJson === 'string'
        ? JSON.parse(itemsJson)
        : [];
    items.forEach(addTableRow);

    /**
     * @type {HTMLInputElement}
     */
    const inputWhat = document.getElementById('what');
    /**
     * @type {HTMLInputElement}
     */
    const inputWhen = document.getElementById('when');
    /**
     * @type {HTMLInputElement}
     */
    const inputWho = document.getElementById('who');

    document.querySelector('form').addEventListener('submit', (function (ev) {
        ev.preventDefault();

        const item = {
            what: inputWhat.value,
            when: inputWhen.value,
            who: inputWho.value,
        };

        inputWhat.value = inputWhen.value = inputWho.value = '';
        inputWhat.focus();

        items.push(item);
        localStorage.setItem('todo', JSON.stringify(items));

        addTableRow(item);
    }));
});

/**
 * @param {{what: string, when: string, who: string}} item 
 */
function addTableRow(item) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${item.what}</td>
        <td>${item.when}</td>
        <td>${item.who}</td>
        <td><input type="checkbox" name="done"></td>`;
    /**
     * @type {HTMLInputElement}
     */
    const checkbox = tr.querySelector('input[name="done"]');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr.classList.add('done');
        } else {
            tr.classList.remove('done');
        }
    });
    document.querySelector('tbody').appendChild(tr);
}

