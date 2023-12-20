document.addEventListener('DOMContentLoaded', function () {
    const items = [];
    document.querySelector('form').addEventListener('submit', (function (ev) {
        ev.preventDefault();
        console.log('onFormSubmit');
        const tr = document.createElement('tr');
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
        const item = {
            what: inputWhat.value,
            when: inputWhen.value,
            who: inputWho.value,
        };
        items.push(item);
        inputWhat.value = inputWhen.value = inputWho.value = '';
        inputWhat.focus();
        localStorage.setItem('todo', JSON.stringify(items));
        tr.innerHTML = `
            <td>${item.what}</td>
            <td>${item.when}</td>
            <td>${item.who}</td>`;
        document.querySelector('tbody').appendChild(tr);

    }));
});

