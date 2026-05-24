fetch('https://ipapi.co/json/').then(res => res.json()).then(data => {
    if (data.country_code === 'IN') {
        document.getElementById('price1').innerText = "₹750 /mo";
        document.getElementById('price2').innerText = "₹4,000 /6mo";
        document.getElementById('price3').innerText = "₹7,500 /yr";
    }
});
