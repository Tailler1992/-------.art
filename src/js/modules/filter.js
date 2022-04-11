const filter = () => {
    const menu = document.querySelector('.portfolio-menu');
    const wrapper = document.querySelector('.portfolio-wrapper');
    const items = menu.querySelectorAll('li');
    const markAll = wrapper.querySelectorAll('.all');
    const no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (markType && markType.length > 0) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    function pressButton(btnSelector, markSelector) {
        const btn = menu.querySelector(btnSelector);
        const mark = wrapper.querySelectorAll(markSelector);

        btn.addEventListener('click', () => {
            typeFilter(mark);
        });
    }

    pressButton('.all', '.all');
    pressButton('.lovers', '.lovers');
    pressButton('.chef', '.chef');
    pressButton('.girl', '.girl');
    pressButton('.guy', '.guy');
    pressButton('.grandmother');
    pressButton('.granddad');

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;