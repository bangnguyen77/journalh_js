var Entry = require("./../js/entry.js").entryModule;

$(document).ready(function() {
  $(".journal-entry").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry(title, body);
    $(".journal-entry").hide();
    $(".description").append("<p>Title: " + newEntry.title + "</p><p>Entry: " + newEntry.body + "</p>");
    $(".counters").append("<p>Number of words: " + newEntry.wordCounter() + "</p><p>Number of vowels: " + newEntry.vowelCounter() + "</p><p>Number of consonants: " + newEntry.consonantCounter() + "</p>");
    $(".teaser").append(newEntry.teaser());
  });
});
