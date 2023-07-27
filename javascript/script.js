let currentInput = ""; // Kullanıcının girdiği sayı veya işlem tutulacak değişken
let result = 0; // Hesaplama sonucu tutulacak değişken

function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  result = 0;
  updateDisplay();
}

function deleteLastChar() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}

function calculateResult() {
  try {
    result = eval(currentInput); // eval fonksiyonu kullanıcının girdiği ifadeyi değerlendirir (örn: eval("2+3") => 5)
    currentInput = result.toString(); // Hesaplama sonucunu stringe çevirip currentInput'ta tutar
    updateDisplay();
  } catch (error) {
    currentInput = "Error"; // Hesaplama sırasında hata olursa "Hata" mesajı gösterir
    updateDisplay();
  }
}

// Klavye olaylarını dinleyen fonksiyon
document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Rakam tuşları
    if (!isNaN(key)) {
        appendToDisplay(key);
    }

    // İşlem operatörleri
    if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToDisplay(key);
    }

    // Nokta (.)
    if (key === ".") {
        appendToDisplay(key);
    }

    // Enter tuşu (=)
    if (key === "Enter") {
        calculateResult();
    }

    // Delete tuşu (backspace)
    if (key === "Backspace") {
        deleteLastChar();
    }
});
/// RGB renkleri oluşturan rastgele sayılar üretmek için yardımcı fonksiyon
function randomRGBValue() {
    return Math.floor(Math.random() * 256);
  }
  
  // Soft animasyon için ana işlev
  function animateFrame() {
    const calculator = document.querySelector('.calculator');
    const panel = document.querySelector('.panel');
  
    // Rastgele RGB renkleri oluştur
    const randomColor1 = `rgba(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()}, 0.5)`;
    const randomColor2 = `rgba(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()}, 0.5)`;
  
    // Çerçeve rengini değiştir
    calculator.style.borderColor = randomColor1;
    panel.style.borderColor = randomColor2;
  }
  
  // Animasyon hızı (milisaniye cinsinden) - Daha yavaş bir animasyon için bu süreyi artırabilirsiniz
  const animationSpeed = 1000; // Örneğin, 1000 milisaniye (1 saniye) olarak ayarlanmıştır
  
  // Animasyonu başlat
  setInterval(animateFrame, animationSpeed);
   
  function calculateTrig(func) {
    const input = document.getElementById('display');
    const inputValue = input.value;
  
    // Kontrol yapısı ile trigonometrik fonksiyonu belirleme ve hesaplama
    if (func === 'sin') {
      input.value = Math.sin(parseFloat(inputValue)).toString();
    } else if (func === 'cos') {
      input.value = Math.cos(parseFloat(inputValue)).toString();
    } else if (func === 'tan') {
      input.value = Math.tan(parseFloat(inputValue)).toString();
    }
  }
  
  function calculateSqrt() {
    const input = document.getElementById('display');
    const inputValue = input.value;
    input.value = Math.sqrt(parseFloat(inputValue)).toString();
  }
  
  function calculatePower() {
    const input = document.getElementById('display');
    const inputValue = input.value;
    input.value = Math.pow(parseFloat(inputValue), 2).toString(); // Burada 2. kuvveti aldık, dilerseniz istediğiniz üssü alabilirsiniz.
  }

// ... Önceki kodlar ...

// Hesaplamaların listelendiği geçmiş dizisi
let calculationHistory = [];

// Matematiksel fonksiyonları hesaplayan işlevler
// ... Önceki kodlar ...

// Hesaplamayı gerçekleştiren işlev
function calculateResult() {
  const input = document.getElementById('display');
  const inputValue = input.value;

  try {
    const result = eval(inputValue); // eval() fonksiyonu ile girilen ifadeyi hesaplayın

    if (inputValue !== '') {
      // Eğer geçerli bir hesaplama yapıldıysa panelde listele
      addToHistory(inputValue, result);
    }

    input.value = result.toString();
  } catch (error) {
    // Hatalı ifade girildiğinde hata mesajını göster
    input.value = 'Error';
  }
}

// Geçmişe hesaplamayı ekle
function addToHistory(inputValue, result) {
  const historyItem = `${inputValue} = ${result}`;
  calculationHistory.push(historyItem);

  // Paneldeki geçmişi güncelle
  updateHistoryPanel();
}

// Paneldeki geçmişi güncelle
function updateHistoryPanel() {
  const textList = document.getElementById('textList');
  textList.innerHTML = '';

  // Geçmişteki hesaplamaları listeye ekle
  calculationHistory.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    textList.appendChild(li);
  });
}

// ... Önceki kodlar ...

