import '../styles/components.scss';

const callForm = document.getElementById( 'callForm' );
const openDialogBtn = document.getElementById( 'callFormBtn' );
const form = document.querySelector( 'form' );

// Открытие диалогового окна
openDialogBtn.addEventListener( 'click', ( e ) => 
  {
	e.stopPropagation();
	callForm.classList.add( 'active' );
	document.querySelector( 'body' ).classList.add( 'no-scroll' );
} );

callForm.children[0].addEventListener( 'click', ( e ) => 
  {
	e.stopPropagation();
} );

// Закрытие диалогового окна
document.addEventListener( 'click', () => 
  {
	callForm.classList.remove( 'active' );
	document.querySelector( 'body' ).classList.remove( 'no-scroll' );
} );

form.addEventListener( 'submit', (e) => 
  {
    e.preventDefault();

    const fields = callForm.querySelector('.fields');
    const lead = callForm.querySelector('p');
    const btn = callForm.querySelector('.icon')

    if (fields) 
      {
        fields.remove();
    }

    if (lead)
      {
        lead.textContent = "Спасибо! Наш менеджер свяжется с вами в ближайшее время и ответит на все интересующие вопросы."
    }

    if (btn)
      {
      btn.remove();
    }
});
