const chatIcon = document.getElementById('chat_icon');
const chatInputAllBox = document.getElementById('input')

const chatBoxContainer = document.getElementById('chat-box-container');

chatIcon.addEventListener('click', () => {
  chatBoxContainer.classList.toggle('show');
chatInputAllBox.classList.toggle('show');
});

const button = document.getElementById('send-button');

button.addEventListener('click', (e) => {
  e.preventDefault();

  const chatInput = document.getElementById('chat-input').value;
  const receivedMsgInbox = document.getElementById('received-msg-inbox');
  const primeiraPergunta = document.getElementById('primeirapergunta');

  receivedMsgInbox.innerHTML = chatInput;
  receivedMsgInbox.style.display = 'grid';
  primeiraPergunta.style.display = 'grid';
  chatInput.insertAdjacentElement('afterend', chatBoxContainer);

  scrollBottom();
});

const buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length; i++) {
  const buttonChat = buttons[i];
  buttonChat.addEventListener('click', (e) => {
    e.preventDefault();

    switch (buttonChat) {
      case buttons[0]:
        const priceBoxContainer = document.getElementById('segundaPerguntaSales');
        priceBoxContainer.style.display = 'grid';

    
      
        break;

      case buttons[1]:
        const customerSelectSecond = document.getElementById('segundaPerguntaSupport');
        customerSelectSecond.style.display = 'grid';
 

        break;

      case buttons[2]:
        const supportSelectSecond = document.getElementById('warrantyClaim');
        supportSelectSecond.style.display = 'grid';

    
        break;

      case buttons[3]:
        const supportSelectThird = document.getElementById('SpareParts');
        supportSelectThird.style.display = 'grid';
     

        break;

      case buttons[4]:
        const supportSelectFourth = document.getElementById('technicalSupport');
        supportSelectFourth.style.display = 'grid';
  

        break;

      case buttons[5]:
        const supportSelectFifth = document.getElementById('spreedSheet');
        supportSelectFifth.style.display = 'grid';


        break;

      default:
        break;
    }

    scrollBottom();
  });
}



function scrollBottom() {
  chatBoxContainer.scrollTo(0, chatBoxContainer.scrollHeight);
}