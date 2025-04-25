
function startChecking() {
    const token = document.getElementById("token").value;
    const chatId = document.getElementById("chat_id").value;
    const results = document.getElementById("results");
    let count = 0;

    setInterval(() => {
        const cardNumber = "0770" + Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
        const isValid = Math.random() < 0.2;
        const card = document.createElement("div");
        card.className = "card " + (isValid ? "success" : "fail");
        card.innerText = (isValid ? "مقبولة" : "مرفوضة") + ": " + cardNumber;
        results.prepend(card);
        if (isValid && token && chatId) {
            fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=بطاقة مقبولة: ${cardNumber}`);
        }
    }, 1000);
}
