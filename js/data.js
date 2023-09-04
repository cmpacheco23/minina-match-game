const mininaCards = [ 
{imageUrl: "../images/fronts/minina1.svg",
cardName: 'card1' },
{imageUrl: "../images/fronts/minina2.svg",
cardName: 'card2' },
{imageUrl: "../images/fronts/minina3.svg",
cardName: 'card3' },
{imageUrl: "../images/fronts/minina4.svg",
cardName: 'card4' },
{imageUrl: "../images/fronts/minina5.svg",
cardName: 'card5' },
{imageUrl: "../images/fronts/minina6.svg",
cardName: 'card6' },
{imageUrl: "../images/fronts/minina7.svg",
cardName: 'card7' },
{imageUrl: "../images/fronts/minina8.svg",
cardName: 'card8' }
]

function generateCards() {
  return mininaCards[Math.floor(Math.random() * mininaCards.length)]
}

export {
  generateCards,
}