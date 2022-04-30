window.addEventListener('load', function () {
  function main() {
    let text = document.querySelector('.text')
    var natija = document.querySelector('.natija')
    let valtext = text.value.split('')
    for (let i = 0; i <= valtext.length; i++) {
      switch ((valtext[i]) + valtext[i + 1]) {

        // lower case
        case 'ch':
        case 'cH':
          valtext[i] = 'ч';
          valtext[i + 1] = null
          break;
        case 'sh':
        case 'sH':
          valtext[i] = 'ш';
          valtext[i + 1] = null
          break;
        case 'ya':
        case 'yA':
          valtext[i] = 'я';
          valtext[i + 1] = null
          break;
        case 'ye':
        case 'yE':
          valtext[i] = 'е';
          valtext[i + 1] = null
          break;
        case 'yo':
        case 'yO':
          valtext[i] = 'ё';
          valtext[i + 1] = null
          break;
        case 'yu':
        case 'yU':
          valtext[i] = 'ю';
          valtext[i + 1] = null
          break;
        case 'o\'':
        case 'o`':
          valtext[i] = 'ў';
          valtext[i + 1] = null
          break;
        case 'g\'':
        case 'g`':
          valtext[i] = 'ғ';
          valtext[i + 1] = null
          break;

          // UPPEAR CASE
        case 'Ch':
        case 'CH':
          valtext[i] = 'Ч';
          valtext[i + 1] = null
          break;
        case 'Sh':
        case 'SH':
          valtext[i] = 'Ш';
          valtext[i + 1] = null
          break;
        case 'Ya':
        case 'YA':
          valtext[i] = 'Я';
          valtext[i + 1] = null
          break;
        case 'Ye':
        case 'YE':
          valtext[i] = 'Е';
          valtext[i + 1] = null
          break;
        case 'Yo':
        case 'YO':
          valtext[i] = 'Ё';
          valtext[i + 1] = null
          break;
        case 'Yu':
        case 'YU':
          valtext[i] = 'Ю';
          valtext[i + 1] = null
          break;
        case 'O\'':
        case 'O`':
          valtext[i] = 'Ў';
          valtext[i + 1] = null
          break;
        case 'G\'':
        case 'G`':
          valtext[i] = 'Ғ';
          valtext[i + 1] = null
          break;
      }

      switch (valtext[i]) {
        // lowercase
        case 'a':
          valtext[i] = 'а'
          break;
        case 'b':
          valtext[i] = 'б'
          break;
        case 'c':
          valtext[i] = 'с'
          break;
        case 'd':
          valtext[i] = 'д'
          break;
        case 'e':
          valtext[i] = 'е'
          break;
        case 'f':
          valtext[i] = 'ф'
          break;
        case 'g':
          valtext[i] = 'г'
          break;
        case 'h':
          valtext[i] = 'х'
          break;
        case 'i':
          valtext[i] = 'и'
          break;
        case 'j':
          valtext[i] = 'ж'
          break;
        case 'k':
          valtext[i] = 'к'
          break;
        case 'l':
          valtext[i] = 'л'
          break;
        case 'm':
          valtext[i] = 'м'
          break;
        case 'n':
          valtext[i] = 'н'
          break;
        case 'o':
          valtext[i] = 'о'
          break;
        case 'p':
          valtext[i] = 'п'
          break;
        case 'q':
          valtext[i] = 'қ'
          break;
        case 'r':
          valtext[i] = 'р'
          break;
        case 's':
          valtext[i] = 'с'
          break;
        case 't':
          valtext[i] = 'т'
          break;
        case 'u':
          valtext[i] = 'у'
          break;
        case 'v':
          valtext[i] = 'в'
          break;
        case 'w':
          valtext[i] = 'в'
          break;
        case 'x':
          valtext[i] = 'х'
          break;
        case 'y':
          valtext[i] = 'й'
          break;
        case 'z':
          valtext[i] = 'з'
          break;
          // UPPERCASE
        case 'B':
          valtext[i] = 'Б'
          break;
        case 'D':
          valtext[i] = 'Д'
          break;
        case 'F':
          valtext[i] = 'Ф'
          break;
        case 'G':
          valtext[i] = 'Г'
          break;
        case 'H':
          valtext[i] = 'Х'
          break;
        case 'I':
          valtext[i] = 'И'
          break;
        case 'J':
          valtext[i] = 'Ж'
          break;
        case 'L':
          valtext[i] = 'Л'
          break;
        case 'N':
          valtext[i] = 'Н'
          break;
        case 'P':
          valtext[i] = 'П'
          break;
        case 'Q':
          valtext[i] = 'Қ'
          break;
        case 'R':
          valtext[i] = 'Р'
          break;
        case 'S':
          valtext[i] = 'C'
          break;
        case 'U':
          valtext[i] = 'У'
          break;
        case 'V':
          valtext[i] = 'В'
          break;
        case 'W':
          valtext[i] = 'В'
          break;
        case 'Y':
          valtext[i] = 'Й'
          break;
        case 'Z':
          valtext[i] = 'З'
          break;

        default:
          break;
      }

      natija.innerHTML = valtext.join('')
    }

  }
  setInterval(main, 0)

  let clear = document.querySelector('.clear');
  let copy = document.querySelector('.copy');

  clear.addEventListener('click', function () {
    let text = document.querySelector('.text')
    text.value = '';
    document.querySelector('.natija').innerHTML = ''
  });

  copy.addEventListener('click', () => {
    let natija = document.querySelector('.natija');
    navigator.clipboard.writeText(natija.value);
    alert('Text copied to Clipboard!')
  })
})