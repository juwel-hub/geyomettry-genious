function traiangleCalculate() {
  const traiangleBase = document.getElementById("traingle-base");
  const traingleText = traiangleBase.value;
  const base = parseFloat(traingleText);
  //   console.log(typeof base);

  const traingleHeight = document.getElementById("traingle-height");
  const traingleHeighttext = traingleHeight.value;
  const haight = parseFloat(traingleHeighttext);

  const area = 0.5 * base * haight;
  console.log("area is the traingle is;", area);

  //   display tryangle area
  const traingleareaspan = document.getElementById("traingle-area");
  traingleareaspan.innerText = area;
}

// reactangle
// width*length
function reactangleCalculate() {
  const reactangleWeight = document.getElementById("weight");
  const reactangleText = reactangleWeight.value;
  const weight = parseFloat(reactangleText);
  //   console.log(typeof weight);

  const reactangleInch = document.getElementById("length");
  const reactangleinchText = reactangleInch.value;
  const length = parseFloat(reactangleinchText);
  const area2 = weight * length;
  console.log("araa2 traingle is", area2);

  //   diaplay reactangle area
  const reactangleArea = document.getElementById("reactngle-area");
  reactangleArea.innerText = area2;
}
