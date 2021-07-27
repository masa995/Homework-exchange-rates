'use strict';
const update = {
    date: '20 июля',
    usd: {
        buyRate: '35,75',
        sellRate: '30,24',
    },
    eur: {
        buyRate: '45,75',
        sellRate: '40,24',
    },
};

function updateExchangeRates(data){
    const date = document.getElementById('date');
    const buyRateUSD = document.getElementById('usd-buy-rate');
    const sellRateUSD = document.getElementById('usd-sell-rate');
    const buyRateEUR = document.getElementById('eur-buy-rate');
    const sellRateEUR = document.getElementById ('eur-sell-rate');

    date.textContent = data.date;
    buyRateUSD.textContent = data.usd.buyRate;
    sellRateUSD.textContent = data.usd.sellRate;
    buyRateEUR.textContent = data.eur.buyRate;
    sellRateEUR.textContent = data.eur.sellRate;
}

updateExchangeRates(update);