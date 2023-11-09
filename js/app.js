'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  const dataToStore = this.allProducts
  localStorage.setItem('allProducts', JSON.stringify(dataToStore) )
}

AppState.prototype.loadItems = function () {
  this.instantiateProducts();
  const storedData= localStorage.getItem('allProducts');
  const parsedData = JSON.parse(storedData);
  if(storedData){
    for (let i = 0; i < parsedData.length; i++) {
      console.log(parsedData);
      // let p = parsedData[i];
      // new Product(p.name, p.fileExtension, p.timesClicked, p.timesShown);
      let p = new Product(parsedData[i].name);
      p.timesShown = parsedData[i].timesShown;
      p.timesClicked = parsedData[i].timesClicked;
  this.allProducts.push(p);
  }
  }
  else{
    this.instantiateProducts();
  }
}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}

