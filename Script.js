let countdownElement = document.getElementById('countdown');
let messageElement = document.getElementById('message');

let callbackHell = (count, callback) => {
    if (count >= 0) {
        setTimeout(() => {
            countdownElement.innerText = count;
            callbackHell(count - 1, callback);
        }, 1000);
    } else {
        callback();
    }
};

callbackHell(10, () => {
    countdownElement.style.display = 'none';
    messageElement.innerText = 'Happy Independence Day!';
});