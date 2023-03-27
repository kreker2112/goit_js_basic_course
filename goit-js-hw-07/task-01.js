'use strict';

const allCategories = [...document.querySelectorAll('.item')];

console.log(allCategories);

const allCategoriesLength = allCategories.length;

console.log(`В списке ${allCategoriesLength} категории`);

const categoriesTextContent = allCategories.forEach(element => {
    
    const title = element.querySelector('h2').innerHTML;

    const categoryLength = element.querySelectorAll('li').length

    console.log(` - Категория:  ${title}`);

    console.log(` - Количество элементов: ${categoryLength}`);
   
});




  

