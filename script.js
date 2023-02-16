// const handleOnMouseMove = e => {
//    const { currentTarget: target } = e;
   
//    const rect = target.getBoundingClientRect(),
//       x = e.clientX - rect.left,
//       y = e.clientY - rect.top;
   
//    target.style.setProperty("--mouse-x", `${x}px`);
//    target.style.setProperty("--mouse-y", `${y}px`);
// }

// for (let card of document.querySelectorAll('.card')) {
//    card.onmousemove = e => handleOnMouseMove(e);
// }

document.getElementById("cards").onmousemove = e => {
   for (let card of document.querySelectorAll(".card")) {
      const rect = card.getBoundingClientRect(),
         x = e.clientX - rect.left,
         y = e.clientY - rect.top;
      
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
   }
}