const lista_nombres = [];

window.addEventListener('load', function () {
    const inptNombre = document.querySelector('#nombre');
    const inptApellido = document.querySelector('#apellido');
    const btn = document.querySelector('#btnAceptar');
    const ayudaNombre = document.querySelector('#textoAyudaNombre');

    btn.addEventListener('click', function (evento) {
        console.log('Hice click!')

        let nombre = inptNombre.value;
        let apellido = inptApellido.value;

        //trim() -> Quita espacios en strings "Hola mundo" -> "Holamundo"
        if (nombre.trim() === '') {
            inptNombre.classList.add('is-danger');
            ayudaNombre.textContent = 'Nombre vacio';
            ayudaNombre.classList.add('is-danger');
        }
        else if (apellido.trim() === '') {

        }
        else {
            let nombre_completo = nombre + ' ' + apellido;

            console.log(nombre_completo);



            console.log('Fin lista');

            lista_nombres.push(nombre_completo);
        }


        //Como agregar y quitar clases
        btn.classList.add('is-loading');

        setTimeout(function () {
            btn.classList.remove('is-loading');
            inptNombre.classList.remove('is-danger');
            ayudaNombre.textContent = '';
            ayudaNombre.classList.remove('is-danger');
        }, 2000);
    });

});
