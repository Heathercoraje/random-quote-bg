
(function() {
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

  var bgList = ['./asset/bg0.jpg', './asset/bg1.jpg', './asset/bg2.jpeg', './asset/bg3.jpg']

  var bgI = Math.floor(Math.random() * Math.floor(bgList.length-1));
  var quoteI = Math.floor(Math.random() * Math.floor(content.length-1));
  var next = document.querySelector('#next');
  var tweet = document.querySelector('#tweet');

  function updateBg () {
    if (bgI > bgList.length -1) bgI = 0;
    document.body.style.backgroundImage = `url(${bgList[bgI]})`;
    bgI++
  }
  function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    var time = document.querySelector('#time');
    time.innerHTML = t;
  }

  function getQuote() {
    var quote = document.querySelector('#quote');
    var author = document.querySelector('#author');
    if (quoteI > content.length -1 ) quoteI = 0;
    quote.innerText= content[quoteI].quote;
    author.innerHTML= content[quoteI].author;
    quoteI++;
  }

  function shareTweet(obj) {
    var data = obj.quote.concat('  ', obj.author);
    var link = "https://twitter.com/intent/tweet?text=".concat(data);
    tweet.href = link;
  }

  updateBg();
  var bgInterval = setInterval(updateBg, 60000);
  myTimer();
  var timer = setInterval(function(){ myTimer() }, 1000);
  getQuote();
  var myInterval = setInterval(getQuote, 10000);

  next.addEventListener('click', function() {
    clearInterval(myInterval);
    getQuote();
    myInterval = setInterval(getQuote, 10000);
  });
  tweet.addEventListener('click', shareTweet(content[quoteI]));
})();
