document.getElementById('filterToggleButton').addEventListener('click', function() {
    document.getElementById('filterOptions').classList.toggle('show');
});

function filterItems(criteria) {
    const items = document.querySelectorAll('.most-item');
    items.forEach(item => {
        const categories = item.dataset.category.split(' ');
        if (criteria === 'all' || categories.includes(criteria)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.querySelectorAll('.most button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.closest('.most-item').classList.add('most-item-hover');
    });
    button.addEventListener('mouseout', function() {
        this.closest('.most-item').classList.remove('most-item-hover');
    });
});

const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
});

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

document.querySelector('.burger').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});
