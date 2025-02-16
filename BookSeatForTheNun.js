function selectButton(btn) {
  
    const buttonGroup = btn.parentElement;
  
  
    const buttons = buttonGroup.querySelectorAll('.date-btn');
    buttons.forEach(button => {
      if (button === btn && button.classList.contains('active')) {
        
        button.classList.remove('active');
      } else if (button === btn) {
        
        button.classList.add('active');
      } else {
       
        button.classList.remove('active');
      }
    });
}  


const seats = document.querySelectorAll('.seatbtnTwo');

seats.forEach(seat => {
     seat.addEventListener('click', () => {
        seat.classList.toggle('isOpened');
     })
})

const vipSeat = document.querySelectorAll('.vvip');

vipSeat.forEach(seats => {
     seats.addEventListener('click', () => {
        seats.classList.toggle('isOpened')
     })
})

