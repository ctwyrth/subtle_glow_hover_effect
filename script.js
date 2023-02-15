const handleOnMouseMove = (e) => {
   const { currentTarget: target } = e;
}

for (let card of document.querySelectorAll('.card')) {
   card.onmousemove = (e) => handleOnMouseMove(e);
}