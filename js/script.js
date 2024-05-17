
var arrQuote =
[
    {
        pQuote: "“Be yourself; everyone else is already taken.”",
        anQuote: "― Oscar Wilde"
    },

    {
        pQuote: "“So many books, so little time.”",
        anQuote: "― Frank Zappa"
    },

    {
        pQuote: "“almanhus manhus walaw ealaquu ealaa rasih fanus.”",
        anQuote: "― Om Mohamed"
    },

    {
        pQuote: "“You only live once, but if you do it right, once is enough.”",
        anQuote: " ― Mae West "

    },

    {
        pQuote: "“If you tell the truth, you don't have to remember anything.”",
        anQuote: "―  Mark Twain"
    },

    {
        pQuote: "“It is better to be hated for what you are than to be loved for what you are not.”",
        anQuote: "―   Andre Gide, Autumn Leaves"
    },
]



function getRandomQuote() {

    var num = Math.floor(Math.random() * arrQuote.length )
    document.getElementById("pQuote").innerHTML = arrQuote[num].pQuote;
    document.getElementById("anQuote").innerHTML = arrQuote[num].anQuote;

}
