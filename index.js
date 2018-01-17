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

var timer = setInterval(function(){
  myTimer()
}, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    var greeting = document.querySelector('#greeting');
    greeting.innerHTML = t;
}

(function getQuote() {
  var quote = document.querySelector('#quote');
  var author = document.querySelector('#author');
  var index = Math.floor(Math.random() * Math.floor(3));
  var next = document.querySelector('#next');
  var tweet = document.querySelector('#tweet');
  var shareTweet = function(obj) {
    var data = obj.quote.concat('  ', obj.author);
    var link = "https://twitter.com/intent/tweet?text=".concat(data);
    console.log(link);
    tweet.href = link;
  }
  quote.innerText= content[index].quote;
  author.innerHTML= content[index].author;
  setTimeout(getQuote, 5000); // invoke every 10 sec
  next.addEventListener('click', getQuote);
  tweet.addEventListener('click', shareTweet(content[index]));
})();
