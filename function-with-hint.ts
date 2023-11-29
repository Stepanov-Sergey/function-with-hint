//typescript
/*
Function with hint
we can ask the function what arguments and data types the function processes
help ==true returns help about arguments and their types
Plugin developers create functions, the script determines what this function works with
Функция с подсказкой
мы можем запросить у функции какие аргументы и типы данных обрабатывает функция
help ==true возвращает подсказку по аргументам и их типам
разработчики плагинов создают функции, скприпт определяет, с чем работает эта функция
*/
/*TODO
it is required to check the sufficiency and compatibility of the flow of incoming data into the function
требуется проверка, достаточности и совместимости потока входящих данных в функцию
*/
function greet(a?: number, b?: number, help: boolean = false) {
  type ArgumentsAndTypes = {
    a: typeof a,
    b: typeof b,
  };

  type Result = {
    type: 'argumentsandtypes',
    value: ArgumentsAndTypes,
  } | {
    type: 'result',
    value: number,
  };

if (help) {
  const argumentsAndTypes: ArgumentsAndTypes = {
    a: a,
    b: b,
  };
  return {
    type: 'argumentsandtypes',
    value: argumentsAndTypes,
  };

  } else if (a && b) {
    const result = a * b;
    return {
      type: 'result',
      value: result,
    };
  } else {
    return {
      type: 'result',
      value: NaN,
    };
  }
}

// Пример использования функции greet и запроса help

//const helpResult = greet(undefined, undefined, true);
const helpResult = greet(2, 2, false);

if (helpResult.type === 'argumentsandtypes') {
  const argumentsAndTypes = helpResult.value;
  console.log(argumentsAndTypes);
}
else if (helpResult.type === 'result' && typeof helpResult.value === 'number') {
  const result: number = helpResult.value;
  console.log(result);
}

