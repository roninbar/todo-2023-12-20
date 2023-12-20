document.addEventListener('DOMContentLoaded', function () {
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
        tr.innerHTML = `
            <td>${inputWhat.value}</td>
            <td>${inputWhen.value}</td>
            <td>${inputWho.value}</td>`;
        inputWhat.value = inputWhen.value = inputWho.value = '';
        inputWhat.focus();
        document.querySelector('tbody').appendChild(tr);
    }));
});

