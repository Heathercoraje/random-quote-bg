var content = [
  {
    quote: "“Short cuts make long delays.” ",
    author: "J.R.R. Tolkien, The Fellowship of the Ring"
  },
  { quote: "“You are your own refuge. You can only save yourself.”",
    author: "Guillaume Musso"
  },
  { quote:"“Most people quit because they look how far they have to go, not how far they have come.”",
    author: "Ziad K. Abdelnour"
  },
  { quote:"“One of the best programming skills you can have is knowing when to walk away for awhile.”",
    author: "Oscar Godson"
  },
  { quote:"“Quitting is never an option.”",
    author: "Ana Ivanovic"
  },
  { quote:"“Quantity and persistence will get you the outcomes you need.”",
    author: "James Altucher"
  }
];

(function getQuote() {
  var hour = new Date().getHours();
  var greeting = document.querySelector('#greeting');
  var quote = document.querySelector('#quote');
  var author = document.querySelector('#author');
  var index = Math.floor(Math.random() * Math.floor(content.length));
  var next = document.querySelector('#next');
  var tweet = document.querySelector('#tweet');
  var shareTweet = function(obj) {
    var data = obj.quote.concat('  ', obj.author);
    var link = "https://twitter.com/intent/tweet?text=".concat(data);
    console.log(link);
    tweet.href = link;
  }
greeting.innerText = (hour < 12)? 'Good morning':'Good afternoon !' ;
  quote.innerText= content[index].quote;
  author.innerHTML= content[index].author;
  setTimeout(getQuote, 10000); // invoke every 10 sec

  next.addEventListener('click', getQuote );
  tweet.addEventListener('click', shareTweet(content[index]));

})();
