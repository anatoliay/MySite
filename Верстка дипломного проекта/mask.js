
$(document).ready(function(){
  $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99"}); //specifying options

$('form').each(function () {
				$(this).validate({
					/*errorPlacement(error, element) {
						return true;
					},*/
					focusInvalid: false,
					rules: {
						number: {
							required: true,
						},
						name: {
							required: true,
						}
					},
					messages: {
						number: {
							required: 'Введите номер'
						},
						name: {
							required: 'Введите имя',
						}
					},
					submitHandler(form) {
					let th = $(form);

					$.ajax({
					type: 'POST',
					url: 'mail.php',
					data: th.serialize(),
					// eslint-disable-next-line func-names
				}).done(() => {

					th.trigger('reset');
				});

				return false;
				}
			});
			});
});