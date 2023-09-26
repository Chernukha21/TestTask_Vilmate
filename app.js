(function createElements() {
    const body = document.body;
    const fragment = new DocumentFragment();
    let selectedItem = null;
    let previousPosition = null;

    for (let i = 0; i < 100; i++) {
        const div = document.createElement("div");
        div.classList.add('child');
        div.textContent = `div${i + 1}`;
        fragment.append(div);
    }

    body.append(fragment);
    body.addEventListener('click', (e) => {
        if (e.target.tagName === 'DIV') {
            if (selectedItem === e.target) {
                if (previousPosition !== null) {
                    body.insertBefore(e.target, body.children[previousPosition]);
                    previousPosition = null;
                }
                selectedItem = null;
            }else {
                let arr = [];
                arr.push(body.children);
                previousPosition = arr.indexOf(e.target);
                body.insertBefore(e.target, body.children[0]);
                selectedItem = e.target;
            }
        }
    })
})();

