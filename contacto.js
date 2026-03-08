const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener momentos seleccionados
  const momentos = document.querySelectorAll('input[name="momentos[]"]:checked');

  if (momentos.length === 0) {
    alert("Por favor seleccioná si asistís a la iglesia o al salón.");
    return;
  }

  let momentosTexto = "";
  momentos.forEach(m => {
    momentosTexto += m.value + "\n";
  });

  document.getElementById('momentos_confirmados').value = momentosTexto;

  btn.value = 'Enviando...';

  const serviceID = 'service_invitacion';
  const templateID = 'template_0a1ao2p';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Confirmar';
      alert('¡Confirmación enviada!');
    })
    .catch((err) => {
      btn.value = 'Confirmar';
      alert('Error al enviar el mensaje');
      console.error(err);
    });
});