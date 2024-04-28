document.addEventListener("DOMContentLoaded", function () {
  //Customer Unique ID


  // Item category toggling
  let items = document.getElementById('beverages').getElementsByTagName('img');
  let labels = document.getElementById('beverages').getElementsByTagName('h4');
  const imageSources = [[{source: 'Media/cold-brew.jpg', label:'COLD BREW', price: 5, description:'Cold brew is often served over ice and can be enjoyed black or with milk and sweeteners according to personal preference. Its popularity stems from its refreshing taste and versatility, making it a favorite beverage choice, especially during warmer months.'},
                        {source:'Media/americano.png', label:'AMERICANO', price: 5, description:'An Americano is a coffee drink made by diluting a shot of espresso with hot water, resulting in a smooth yet robust flavor profile. It offers a customizable strength and can be enjoyed black or with added milk, making it a versatile choice for coffee lovers.'},
                        {source:'Media/Espresso.png', label:'ESPRESSO', price: 3, description:'Espresso is a concentrated coffee beverage brewed by forcing hot water through finely ground coffee beans under high pressure. It features a rich and intense flavor profile with a layer of creamy foam known as crema, making it a favorite choice for a powerful caffeine kick.'},
                        {source:'Media/choco.png', label:'HOT CHOCO', price: 7, description:'Hot choco is a comforting and indulgent beverage made from melted chocolate or cocoa powder mixed with hot milk or water. It offers a rich and creamy texture with a delightful sweetness, perfect for warming up during cold weather or as a sweet treat anytime.'},
                        {source:'Media/cappuccino.png', label:'CAPPUCCINO', price: 7, description:'A cappuccino is a classic Italian coffee drink made with equal parts of espresso, steamed milk, and milk foam. It has a luxurious texture and balanced flavor profile, characterized by the contrast between the bold espresso and velvety milk foam.'},
                        {source:'Media/Latte.jpg', label:'LATTE', price: 6, description:'A latte is a coffee drink made with a shot of espresso and steamed milk, topped with a thin layer of milk foam. Known for its smooth and creamy texture, the latte offers a milder coffee flavor compared to other espresso-based beverages.'},
                        {source:'Media/mocha.png', label:'CAFE MOCHA', price: 6, description:'A café mocha is a delightful coffee beverage that combines espresso, steamed milk, and chocolate syrup or cocoa powder, topped with whipped cream. Its rich chocolate flavor complements the boldness of espresso, offering a sweet and creamy indulgence.'},
                        {source:'Media/matcha.png', label:'MATCHA', price: 7, description:'A matcha latte is a vibrant green beverage made by whisking high-quality matcha powder with steamed milk. Known for its earthy flavor and vibrant color, matcha lattes offer a creamy texture and a gentle caffeine boost, making them a popular choice for tea and coffee lovers.'},
                        {source:'Media/affogato.png', label:'AFFOGATO', price: 7, description:"An affogato, more traditionally known as \"affogato al caffè\", is an Italian coffee-based dessert. It usually takes the form of a scoop of plain milk-flavored or vanilla gelato or ice cream topped or \"drowned\" with a shot of hot espresso."},
                        {source:'Media/macchiato.png', label:'MACCHIATO', price: 7, description:'A macchiato is a bold and intense espresso-based coffee drink with just a dash of steamed milk or milk foam. This small addition adds a touch of creaminess to the robust espresso flavor, creating a balanced and satisfying beverage.'},
                        {source:'Media/black.png', label:'LONG BLACK', price: 5, description:'A long black is a coffee beverage made by pouring a double shot of espresso over hot water, resulting in a strong yet smooth and aromatic drink. The hot water preserves the crema of the espresso while diluting its intensity slightly.'},
                        {source:'Media/caramel.png', label:'CARAMEL', price: 6, description:'A caramel latte is a delicious coffee beverage made with espresso, steamed milk, and caramel syrup, topped with a swirl of whipped cream or caramel drizzle. Its combination of rich espresso, creamy milk, and sweet caramel creates a indulgent and comforting drink.'}],
                        [{source:'Media/blackTea.webp', label:'BLACK TEA', price: 5, description:'Black tea is a fully oxidized tea variety made from the leaves of the Camellia sinensis plant, known for its robust flavor and deep amber color. With its bold taste and moderate caffeine content, black tea offers a stimulating and invigorating beverage option.'},
                        {source:'Media/greenTea.png', label:'GREEN TEA', price: 3, description:'Green tea is a delicate and refreshing beverage made from the leaves of the Camellia sinensis plant that have undergone minimal oxidation during processing. Known for its light, grassy flavor and pale green color, green tea offers a mild caffeine boost.'},
                        {source:'Media/matchaTea.jpg', label:'MATCHA TEA', price: 7, description:'Matcha tea is a vibrant and finely ground green tea powder made from shade-grown tea leaves. Renowned for its intense flavor, vibrant color, and high antioxidant content, matcha tea is whisked with hot water to create a frothy and invigorating beverage.'},
                        {source:'Media/yellowTea.webp', label:'YELLOW TEA', price: 4, description:'Yellow tea is a rare and delicate tea variety originating from China, characterized by its unique processing method that involves a slight oxidation and a "yellowing" step. With its mellow flavor profile and subtle sweetness, yellow tea offers a refreshing drinking experience.'},
                        {source:'Media/jasmineTea.jpg', label:'JASMINE TEA', price: 4, description:'Jasmine tea is a fragrant and aromatic tea variety made by infusing green, white, or oolong tea leaves with jasmine blossoms. Renowned for its floral aroma and delicate taste, jasmine tea offers a soothing and refreshing experience, perfect for relaxation and enjoyment.'},
                        {source:'Media/peppermintTea.png', label:'PEPPERMINT TEA', price: 5, description:'Peppermint tea is an invigorating herbal infusion made from dried peppermint leaves, known for its refreshing minty flavor and soothing properties. With its natural cooling sensation and digestive benefits, peppermint tea is a popular choice for relaxation and digestion.'},
                        {source:'Media/oolongTea.jpg', label:'OOLONG TEA', price: 6, description:'Oolong tea is a traditional Chinese tea variety with a unique semi-oxidized processing method, resulting in a diverse range of flavors and aromas spanning between green and black tea. Renowned for its complexity and balance, oolong tea offers a nuanced drinking experience.'},
                        {source:'Media/chaiTea.jpg', label:'CHAI TEA', price: 5, description:'Chai tea is a spiced black tea originating from India, typically brewed with a combination of spices such as cinnamon, cardamom, ginger, cloves, and black pepper. Known for its warming and aromatic qualities, offering a rich beverage with a blend of sweet and spicy notes.'},
                        {source:'Media/gingerTea.png', label:'GINGER TEA', price: 3, description:'Ginger tea is a soothing and invigorating herbal infusion made by steeping fresh or dried ginger root in hot water. Renowned for its spicy and warming flavor, ginger tea offers a comforting beverage choice with potential health benefits, including aiding digestion and nausea.'},
                        {source:'Media/redTea.png', label:'RED TEA', price: 5, description:'Red tea, also known as rooibos tea, is a caffeine-free herbal infusion made from the leaves of the Aspalathus linearis plant, native to South Africa. Renowned for its rich amber color and naturally sweet flavor, red tea offers a smooth and refreshing drinking experience.'},
                        {source:'Media/lemonTea.png', label:'LEMON TEA', price: 4, description:'Lemon tea is a refreshing beverage made by infusing black, green, or herbal tea with freshly squeezed lemon juice and sometimes honey or sweeteners. Known for its tangy and citrusy flavor, lemon tea offers a bright and invigorating drink, perfect for rejuvenation.'},
                        {source:'Media/hibiscusTea.png', label:'HIBISCUS TEA', price: 7, description:'Hibiscus tea is a vibrant herbal infusion made from the dried petals of the hibiscus flower, known for its deep red color and tart, fruity flavor profile. Renowned for its refreshing taste and potential health benefits, including supporting heart health and aiding digestion.'}],
                        [], [], [], [], [], [], []]

  let categoryIndex = 0;
  document.querySelectorAll('.category').forEach(function(category){
    category.onclick = function() {
      for (let i = 0; i < items.length; i++){
        let item = imageSources[category.dataset.index][i];
        categoryIndex = category.dataset.index;
        items[i].src = item['source'];
        labels[i].textContent = item['label'];
      }
    }
  });

  // Ordering Transaction Div - display and hide UI function
  document.querySelectorAll('.items').forEach(image => {
    image.onclick = () =>{

      let currentItem = imageSources[categoryIndex][image.dataset.itemNum];
      let imagePlaceholder = document.querySelector('#current_image');
      let textPlaceholder = document.querySelector('.trans').querySelector('h1');
      let descPlaceholder = document.querySelector('.trans').querySelector('p');
      imagePlaceholder.src = currentItem.source;
      textPlaceholder.textContent = currentItem.label;
      descPlaceholder.textContent = currentItem.description;

      // Amount toggle
      let amount = document.getElementById('amount');
      let totalText = document.getElementById('total');
      var count = 1;
      let currentPrice = currentItem.price;
      var total = currentItem.price;

      // Drink Sizes Percentage
      let chosenSize = document.getElementsByName('size');
      totalText.textContent = `Total: ${total.toFixed(2)} USD`;
  

      chosenSize.forEach((radio) => {
        radio.onclick = () => {
          if(radio.value === 'medium'){
            currentPrice = currentItem.price * 1.3;
          }
          else if(radio.value === 'large'){
            currentPrice = currentItem.price * 1.6;
          }
          else{
            currentPrice = currentItem.price;
          }
          total = currentPrice * count;
          totalText.textContent = `Total: ${total.toFixed(2)} USD`;
        }
      })

      document.querySelector('#minus').addEventListener('click', () => {
        if(count > 1){
          count--;
          amount.value = `Amount: ${count}`;
          total = currentPrice * count;
          totalText.textContent = `Total: ${total.toFixed(2)} USD`;
        }
      });
      document.querySelector('#plus').addEventListener('click', () => {
        if(count < 20){
          count++;
          amount.value = `Amount: ${count}`;
          total = currentPrice * count;
          totalText.textContent = `Total: ${total.toFixed(2)} USD`;
        }
      });
      
      //Adding Item and making AJAX POST request to the server
      document.querySelector('#addItem').addEventListener('click', ()=>{
        let order = {customerId: 'hewwo', item:'gyattt', price: 5, quantity: 2, size: 'medium'};
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://localhost:3000/insert_data', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(order));
      });

      document.querySelector('.order').style.display = 'block';
      let bg = document.querySelector('.container')
      bg.style.webkitFilter = "brightness(40%)";
      document.querySelector('.footer').style.webkitFilter = "brightness(40%)";
      

      document.querySelector('#return').onclick = function(){
        document.querySelector('.order').style.display = 'none';
        document.querySelector('.container').style.webkitFilter = "brightness(100%)";
        document.querySelector('.footer').style.webkitFilter = "brightness(100%)";
      }
    }
  }); 
});