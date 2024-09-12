
function calculateArea() {
    const base = document.getElementById("base").value;
    const height = document.getElementById("height").value;
  
    if (base && height) {
      const area = (0.5 * base * height).toFixed(2);
      document.getElementById("hasil").innerHTML = `Luas segitiga: ${area} cm²`;
    } else {
      document.getElementById("hasil").innerHTML = "Masukkan nilai alas dan tinggi.";
    }
  }
  
  function calculatePerimeter() {
    const side1 = document.getElementById("side1").value;
    const side2 = document.getElementById("side2").value;
    const side3 = document.getElementById("side3").value;
  
    if (side1 && side2 && side3) {
      const perimeter = (parseFloat(side1) + parseFloat(side2) + parseFloat(side3)).toFixed(2);
      document.getElementById("result").innerHTML = `Keliling segitiga: ${perimeter} cm`;
    } else {
      document.getElementById("result").innerHTML = "Masukkan semua nilai sisi.";
    }
  }
  
  function calculatJajar() {
    const base1 = document.getElementById("base1").value;
    const height1 = document.getElementById("height1").value;
  
    if (base1 && height1) {
      const area = (base1 * height1).toFixed(2);
      document.getElementById("result1").innerHTML = `Luas jajargenjang: ${area} cm²`;
    } else {
      document.getElementById("result1").innerHTML = "Masukkan nilai alas dan tinggi.";
    }
  }
  
  function calculatePerimeter2() {
    const base3 = document.getElementById("base3").value;
    const side4 = document.getElementById("side4").value;
  
    if (base3 && side4) {
      const perimeter = (2 * (parseFloat(base3) + parseFloat(side4))).toFixed(2);
      document.getElementById("result2").innerHTML = `Keliling jajargenjang: ${perimeter} cm`;
    } else {
      document.getElementById("result2").innerHTML = "Masukkan nilai alas dan sisi miring.";
    }
  }
  