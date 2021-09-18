const access_drop = document.getElementsByClassName('access-drop');

for (let i = 0; i < access_drop.length; i++) {
    access_drop[i].onmouseenter = function() {
        this.innerHTML = `${this.dataset.item} <i class="fas fa-angle-up">`
    }
    access_drop[i].onmouseleave = function() {
        this.innerHTML = `${this.dataset.item} <i class="fas fa-angle-down">`
    }
}

const access_mobile_drop = document.getElementsByClassName("access-mobile-dropdown");
const mobile_menus = document.getElementsByClassName('mobile-dropdown');

access_mobile_drop[0].onclick = function() {
    if (this.dataset.status == 'off') {
        mobile_menus[0].style.display = 'block';
        this.dataset.status = 'on';
        this.innerHTML = `Product <i
        class="fas fa-angle-up"></i>`;
    } else {
        mobile_menus[0].style.display = 'none';
        this.dataset.status = 'off';
        this.innerHTML = `Product <i
        class="fas fa-angle-down"></i>`;
    }
}

access_mobile_drop[1].onclick = function() {
    if (this.dataset.status == 'off') {
        mobile_menus[1].style.display = 'block';
        this.dataset.status = 'on';
        this.innerHTML = `Company <i
        class="fas fa-angle-up"></i>`;
    } else {
        mobile_menus[1].style.display = 'none';
        this.dataset.status = 'off';
        this.innerHTML = `Company <i
        class="fas fa-angle-down"></i>`;
    }
}

access_mobile_drop[2].onclick = function() {
    if (this.dataset.status == 'off') {
        mobile_menus[2].style.display = 'block';
        this.dataset.status = 'on';
        this.innerHTML = `Connect <i
        class="fas fa-angle-up"></i>`;
    } else {
        mobile_menus[2].style.display = 'none';
        this.dataset.status = 'off';
        this.innerHTML = `Connect <i
        class="fas fa-angle-down"></i>`;
    }
}

const bars = document.querySelector('.bars');
const menu = document.querySelector('.mobile-menu-container');
const close = document.querySelector('.close');

bars.onclick = function() {
    menu.style.display = 'block';
}

close.onclick = function() {
    menu.style.display = 'none';
}