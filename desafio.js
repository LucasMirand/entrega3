let contador = 0;
const recorrerFrase = (texto, interval, cb) => {
  const palabra = texto.split(" ");
  let i = 0;
  return new Promise((res) => {
    const timer = setInterval(() => {
      if (i >= palabra.length) {
        clearInterval(timer);
        res(i);
      } else {
        console.log(`${palabra[i]}`);
        i++;
      }
    }, interval);
  });
};
const cb = (palabras) => {
  return palabras.length;
};
const imprimir = async () => {
  let frase1 = await recorrerFrase("primer texto", 1000, cb);
  contador = contador + frase1;
  let frase2 = await recorrerFrase("aqui el segundo texto", 1100, cb);
  contador = contador + frase2;
  let frase3 = await recorrerFrase("y va el tercero y va el tercero", 1200, cb);
  contador = contador + frase3;
  console.log(`Las palabras totales son:${contador}`);
};
imprimir();
