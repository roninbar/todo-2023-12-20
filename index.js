document.addEventListener('DOMContentLoaded', function () {
    const items = [];
    
    document.querySelector('form').addEventListener('submit', (function (ev) {
        ev.preventDefault();

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
        
        inputWhat.value = inputWhen.value = inputWho.value = '';
        inputWhat.focus();
        
        items.push(item);
        localStorage.setItem('todo', JSON.stringify(items));

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.what}</td>
            <td>${item.when}</td>
            <td>${item.who}</td>`;
        document.querySelector('tbody').appendChild(tr);

    }));
});

