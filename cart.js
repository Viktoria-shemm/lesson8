// Создайте объект cart — корзина
// Объект будет содержать следующие свойства:
// и методы
// Далее описание каждого метода
// getTotalPrice()
// метод возвращает значение свойства totalPrice
// calculateItemPrice()
// пересчитывает стоимость всей корзины используя метод reduce и записывает значение в totalPrice 
// increaseCount()
// Принимает один параметр(число)
// Увеличивает свойство count на это число
// add()
// Принимает три параметра:
// название товара
// цену товара
// количество товара (опциональный параметр, по умолчанию 1 товар)
// этот метод формирует объект из полученных параметров и добавляет его в свойство items
// так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные
// clear()
// Очищает полностью нашу корзину, возвращает все значения в изначальные
// print()
// Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины

// Продолжим работу с cart.js
// Обнаружена уязвимость в нашем функционале
// Если после добавления последнего товара присвоить к totalPrice любое значение,
// например
// cart.totalPrice = 10;
// то при выводе print() общая стоимость корзины будет равна 10
// Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером который будет возвращать результат вызова метода calculateItemPrice
// метод getTotalPrice больше не нужен
// calculateItemPrice переделать таким образом, чтобы сумму он возвращал, а не записывал в свойство totalPrice
// Вызов метода calculateItemPrice оставить только у геттера totalPrice



const cart = {
    items: [], // items = пустой массив - это товары
    get totalPrice() {
        return this.calculateItemPrice;
    }, 
    count: 0, // count = 0 - количество товаров
    add(productName, priceGoods, quantityGoods = 1) { // add - добавить товар
        const item = {
            productName,
            priceGoods,
            quantityGoods,
        };
        this.items.push(item);
        this.increaseCount(quantityGoods);
    },
    increaseCount(number) { // increaseCount - увеличить количество товаров
        return this.count += number;
    },
    calculateItemPrice() { // calculateItemPrice - посчитать общую стоимость товаров
        return this.items.reduce((sum, item) => {
            return sum + (item.priceGoods * item.quantityGoods);
        }, 0);
    },
    clear() { // clear - очистить корзину
        this.items = []; 
        this.count = 0; 
    },
    print() { // print - распечатать корзину
        console.log(JSON.stringify(this.items));
        console.log(`Total Price: ${this.totalPrice()}`);
    },
};

// Для проверки работы функционала добавить 3 или более товаров в корзину
cart.add("Apple", 10, 2); 
cart.add("Banana", 5, 3); 
cart.add("Orange", 7); 

// После вызвать метод print для вывода информации в консоль
cart.print(); 


