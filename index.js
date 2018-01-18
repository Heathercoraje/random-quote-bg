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

(function() {
  var index = Math.floor(Math.random() * Math.floor(content.length-1));
  var next = document.querySelector('#next');
  var tweet = document.querySelector('#tweet');

  function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    var greeting = document.querySelector('#greeting');
    greeting.innerHTML = t;
  }

  function getQuote() {
    var quote = document.querySelector('#quote');
    var author = document.querySelector('#author');
    if (index > content.length -1 ) index = 0;
    quote.innerText= content[index].quote;
    author.innerHTML= content[index].author;
    index++;
  }

  function shareTweet(obj) {
    var data = obj.quote.concat('  ', obj.author);
    var link = "https://twitter.com/intent/tweet?text=".concat(data);
    tweet.href = link;
  }

  myTimer();
  var timer = setInterval(function(){ myTimer() }, 1000);
  getQuote();
  var myInterval = setInterval(getQuote, 5000);

  next.addEventListener('click', function() {
    clearInterval(myInterval);
    getQuote();
    myInterval = setInterval(getQuote, 5000);
  });
  tweet.addEventListener('click', shareTweet(content[index]));
})();
