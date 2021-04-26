var alteration = 0;

function alterationClick(number) {
  alteration = alteration + number;
  document.getElementById("alteration").innerHTML = alteration;
};

var botok = 0;

function buybotok() {
  var botcost = Math.floor(10 * Math.pow(1.1, botok));
  if (alteration >= botcost) { 
    botok = botok + 1; 
    alteration = alteration - botcost; 
    document.getElementById('botok').innerHTML = botok; 
    document.getElementById('alteration').innerHTML = alteration; 
  };
  var nextcost = Math.floor(10 * Math.pow(1.1, botok)); 
  document.getElementById('botcost').innerHTML = nextcost;
};
window.setInterval(function() {
  alterationClick(botok);
}, 1000);
