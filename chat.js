// Puttinc action to select bottom and show up the box
const chatIcon = document.getElementById('chat_icon');
const chatBoxContainer = document.getElementById('chat-box-container');


chatIcon.addEventListener('click', ()=> {
    chatBoxContainer.style.display = chatBoxContainer.style.display = 'block';
  });


//Pop up the message with the customer msg and options:

    const customerMensagem = document.getElementById('send-button');
    customerMensagem.addEventListener('click', function(e) {
      e.preventDefault();
      const mensagemRecebida = document.getElementById('chat-input').value;
      const resultadoContainer = document.getElementById('received-msg-inbox');
      resultadoContainer.innerHTML = `${mensagemRecebida}`;
      resultadoContainer.style.display = 'grid';

      const nextMessage = document.getElementById('primeirapergunta');
      nextMessage.style.display='grid'

    });

//Select the message and pop Up a reply and another option


//
const customerSelectSales = document.getElementsByClassName('btn')[0];
const customerSelectSalesSecond = document.getElementById('segundaPerguntaSales');
customerSelectSales.addEventListener('click', function(e){
  e.preventDefault();
  customerSelectSalesSecond.style.display = 'grid';
  chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;

});

const customerSelectSupport = document.getElementsByClassName('btn')[1];
const customerSelectSecond = document.getElementById('segundaPerguntaSupport');
customerSelectSupport.addEventListener('click', function(e){
  e.preventDefault();
  customerSelectSecond.style.display = 'grid';
  chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;
})
// Support answers:
 const WarrantyClaim = document.getElementsByClassName('btn1')[0];
 const warrantyClaimContainer = document.getElementById('warrantyClaim');
 const resultadoClaim = document.getElementById('received-msg-inbox-warrantyclaim');
 WarrantyClaim.addEventListener('click', function(e){
     e.preventDefault();
     resultadoClaim.innerHTML = WarrantyClaim.textContent;
   
     warrantyClaimContainer.style.display = 'grid';
     chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;
  })
 
  const SparePart= document.getElementsByClassName('btn1')[1];
  const SparePartContainer = document.getElementById('SpareParts');
  const resultadoSpareParts = document.getElementById('received-msg-inbox-spareparts');
  SparePart.addEventListener('click', function(e){
      e.preventDefault();
      resultadoSpareParts.innerHTML = SparePart.textContent;
      resultadoSpareParts.style.display = 'grid';
      resultadoSpareParts.insertAdjacentElement('afterend', SparePartContainer);
      SparePartContainer.style.display = 'grid';
      chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;
   })
  
   const TechnicalSupport= document.getElementsByClassName('btn1')[2];
   const TechnicalSupportContainer = document.getElementById('technicalSupport');
   const resultadoTechnicalSupport = document.getElementById('received-msg-inbox-technicalsupport');
   
   TechnicalSupport.addEventListener('click', function(e){
       e.preventDefault();

       resultadoTechnicalSupport.innerHTML = TechnicalSupport.textContent;
       resultadoTechnicalSupport.style.display = 'grid';
       resultadoTechnicalSupport.insertAdjacentElement('afterend', TechnicalSupportContainer);
       TechnicalSupportContainer.style.display = 'grid';
       chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;
    })  
    
    const SpreedSheet= document.getElementsByClassName('btn1')[3];
    const SpreedSheetContainer = document.getElementById('spreedSheet');
    const resultadoSpreedSheet = document.getElementById('received-msg-inbox-spreedsheets');
    SpreedSheet.addEventListener('click', function(e){
        e.preventDefault();
        resultadoSpreedSheet .innerHTML = SpreedSheet.textContent;
        resultadoSpreedSheet .style.display = 'grid';
        resultadoSpreedSheet.insertAdjacentElement('afterend', SpreedSheetContainer);
        SpreedSheetContainer.style.display = 'grid';
        chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;
     })

     //Sales Answers:

     const priceCheck = document.getElementsByClassName('btn1')[4];
     const priceBoxContainer = document.getElementById('priceinfo');
     const resultadoPrice = document.getElementById('received-msg-inbox-price');
     //const customerSelectSalesSecond = document.getElementById('segundaPerguntaSales');
     priceCheck.addEventListener('click', function(e){
       e.preventDefault();
     
       priceBoxContainer.style.display = 'grid';
       resultadoPrice.innerHTML = priceCheck.textContent;
       resultadoPrice.style.display = 'grid';
      resultadoPrice.insertAdjacentElement('afterend', priceBoxContainer);
     
       chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;
     });

      const Delivery = document.getElementsByClassName('btn1')[5];
      const DeliveryContainer = document.getElementById('delivery');
      Delivery.addEventListener('click', function(e){
          e.preventDefault();
          DeliveryContainer.style.display = 'grid';
          chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;
       })
       const Question= document.getElementsByClassName('btn1')[6];
       const questionContainer = document.getElementById('question');
       Question.addEventListener('click', function(e){
           e.preventDefault();
           questionContainer.style.display = 'grid';
           chatBoxContainer.scrollTop = chatBoxContainer.scrollHeight;
        })
        