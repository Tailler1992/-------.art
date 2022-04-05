const modals = () => {

    function openModal(modalWindow) {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${calcScroll()}px`;
        document.querySelector('.fixed-gift').style.right= `${calcScroll()}px`;
    }

    function closeModal(modalWindow) {
        modalWindow.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
    }

    function closeWindows() {
        document.querySelectorAll('[data-modal]').forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated', 'fadeIn');
        });
    }

    function bindModal(modalWindowSelector, modalBtnSelector, closeBtnSelector, desrtoy = false) {
        const modalWindow = document.querySelector(modalWindowSelector);
        const modalBtn = document.querySelectorAll(modalBtnSelector);
        const closeBtn = document.querySelector(closeBtnSelector);


        modalBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                if (desrtoy) {
                    item.remove();
                }

                closeWindows();
                openModal(modalWindow);
            });
        });

        closeBtn.addEventListener('click', () => {
            closeWindows();
            closeModal(modalWindow);
        });

        modalWindow.addEventListener('click', (e) => {
            if (e.target === modalWindow) {
                closeWindows();
                closeModal(modalWindow);
            }
        });
    }

    function calcScroll() {
        let div = document.createElement('div');
        
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    bindModal('.popup-design', '.button-design', '.popup-design .popup-close');
    bindModal('.popup-consultation', '.button-consultation', '.popup-consultation .popup-close');
    bindModal('.popup-gift', '.fixed-gift', '.popup-gift .popup-close', true);

}

export default modals; 
