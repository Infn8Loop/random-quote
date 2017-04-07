/**
 * Created by mikericcardi on 4/6/17.
 */

// JavaScript is awesome.
var quote = document.getElementById("quote");
var person = document.getElementById("person");
var image = document.getElementById("image");
var randomPick = 0;
var lastPick = 0;
var tweetText = undefined;
var tweetbutton = document.getElementById("tweet-button");


$("#tweet-button").hide();


var quotes = [
    "Yo Sucka, I pity da fool that don't know dialing 1-800 collect can save the people you call a buck or two.",
    "No, now go away or I shall taunt you a second time!",
    "Drop Beats, not bombs.",
    "Where do you think you're going? Nobody's leaving. Nobody's walking out on this fun, old-fashioned family Christmas. No, no. We're all in this together. This is a full-blown, four-alarm holiday emergency here.",
    "First you must find... another shrubbery! Then, when you have found the shrubbery, you must place it here, beside this shrubbery, only slightly higher so you get a two layer effect with a little path running down the middle.",
    "I wanted to run away that day, but you can't run away from your own feet. ",
    "Merry Christmas. Shitter was full.",
    "Human sacrifice, dogs and cats living together... mass hysteria!",
    "Look, matey, I know a dead parrot when I see one, and I'm looking at one right now.",

]

var persons = [
    "Mr. T",
    "French Soldier",
    "Abraham Lincoln",
    "Clark Griswold",
    "Knights who say Ni",
    "Flint Lockwood",
    "Eddie",
    "Dr. Peter Venkman",
    "Mr. Praline",

]

var images = [
    "images/mrt.jpg",
    "images/montypython.jpg",
    "images/lincoln.jpg",
    "images/clark.jpg",
    "images/ni.jpg",
    "images/flint.jpg",
    "images/eddie.jpg",
    "images/peter.jpg",
    "images/parrot.png",
]

tweetText =  (quotes[lastPick] + " ~" + persons[lastPick]);

$("#get-quote-button").click(function(){
    lastPick = randomPick;
    $("#quote").toggle("fold");
    $("#person").hide("fold");
    $("#image").hide("fold");
    pickOne();
    console.log(randomPick);
    quote.innerHTML = quotes[randomPick];
    person.innerHTML = persons[randomPick];
    image.src = images[randomPick];
    $("#quote").show("fold");
    $("#person").show("fold");
    $("#image").show("fold");
    tweetText =  (quotes[randomPick] + " ~" + persons[randomPick]) ;
    //$(tweetbutton).attr("data-text", tweetText);
});

function pickOne(){
    randomPick = Math.floor(Math.random() * quotes.length);
    console.log(randomPick)
    if (randomPick === lastPick){
        pickOne();
    }
    lastPick = randomPick;
}


//
$.getScript("http://platform.twitter.com/widgets.js");
twttr.widgets.load();
//
$("#set-share").click(function(){
    twttr.widgets.createShareButton(
        '/',
        document.getElementById('tweet-button'),
        {
            count: 'none',
            text: tweetText,
        }).then(function (el) {
            console.log("Button created.")
        });

    $("#tweet-button").show();
    var deleteme = document.getElementById("twitter-widget-0");
    var deleteme2 = document.getElementById("twitter-widget-1");
    var deleteme3 = document.getElementById("twitter-widget-2");
    var deleteme4 = document.getElementById("twitter-widget-3");
    var deleteme5 = document.getElementById("twitter-widget-4");
    var deleteme6 = document.getElementById("twitter-widget-5");
    var deleteme7 = document.getElementById("twitter-widget-6");
    var deleteme8 = document.getElementById("twitter-widget-7");
    setTimeout(function(){
        $(deleteme).remove();
        $(deleteme2).remove();
        $(deleteme3).remove();
        $(deleteme4).remove();
        $(deleteme5).remove();
        $(deleteme6).remove();
        $(deleteme7).remove();
        $(deleteme8).remove();
    }, 10);

});






