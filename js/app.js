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
  const dataToStore = {allProductImages: state.allProducts}
  localStorage.setItem('allProducts', JSON.stringify(dataToStore) )
}

AppState.prototype.loadItems = function () {
  const storedData= localStorage.getItem('allProducts');
  if(storedData){
    const parsedData = JSON.parse(storedData);
    for (let i = 0; i < state.allProducts.length; i++) {
      let p = parsedData.state.allProducts[i];
      new Product(p.name, p.fileExtension);
  
  }
  }
  
  this.instantiateProducts();
}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}

