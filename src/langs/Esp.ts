export const esp = {
    activateUserAccount: {
        alert: {
            accountActivated: "Tu cuenta ya ha sido activada.",
            accountNoExist: "La cuenta de usuario no existe.",
            error: "Hay un problema al tratar de activar su cuenta, comuníquese con el soporte técnico.",
            success: "Su cuenta se ha activado correctamente."
        },
        legend: "Ya puedes ingresar a tu cuenta",
        signIn: "ingresar",
        title: "Hola"
    },
    events: {
        title: "Quinielas disponibles"
    },
    eventCard: {
        button: "Ver salas de juego"
    },
    eventRooms: {
        alert: {
            error: "Ocurró un error."
        },
        breadcrumb: {
            home: "Inicio"
        },
        title: "Salas disponibles"
    },
    sell: {
        note: "<p>Podrás ofrecer el servicio de transporte una vez se genere una <b>Orden de Compra</b> para adquirir tu producto. Es en la <b>Orden de Compra</b> donde se indica el destino del producto para luego poder calculcar el flete.</p><p class='mb-0'>Se te notificará cuando se genere dicha orden.</p>",
        searchProduct: {
            help: "Escribe el nombre del producto que vas a vender",
            label: "Producto"
        },
        title: "¿Qué quieres vender?"
    },
    signIn: {
        alert: {
            accountPendingVerification: "La cuenta está pendiente de verificación. Te enviamos un correo para que puedas activarla.",
            invalidPassword: "Contraseña invalida",
            error: "Ocurró un error."
        },
        areYouNotRegisteredYet: "¿No estás registrado aún?",
        btnInitText: "Vender",
        btnLoadingText: "Autenticando",
        forgotYourPassword: "¿Olvidaste la contraseña?",
        inputs: {
            email: {
                label: "Correo electrónico"
            },
            password: {
                label: "Contraseña"
            }
        },
        modalRecoverPassword: {
            alert: {
                success: "Datos recuperados con éxito!. Enviamos sus datos al correo.",
                invalidEmail: "No existe ninguna cuenta de usuario asociado a este correo",
                error: "Ocurró un error."
            },
            btnClose: "Cerrar",
            btnInitText: "Recuperar",
            btnLoadingText: "Verificando",
            inputs: {
                email: {
                    label: "Correo electrónico"
                }
            },
            legend: "Indicanos el correo electrónico con el cual te registraste para enviarte tu contraseña.",
            title: "¿Olvidaste tu contraseña?"
        },
        signUp: "Registrame",
        title: "Login" 
    },
    signUp: {
        alert: {
            error: "Ocurró un error.",
            success: "Cuenta creada con éxito; debe activar su cuenta, para ello le hemos enviado su información a su correo.",
            warning: "Ya existe una cuenta creada con este correo electrónico."
        },
        btnInitText: "Registrarme",
        btnLoadingText: "Validando",
        haveAnAccount: "¿Ya tiene cuenta?",
        inputs: {
            confirmPassword: {
                label: "Confirmar contraseña"
            },
            email: {
                label: "Correo electrónico"
            },
            password: {
                label: "Contraseña"
            },
            username: {
                helpText: "Solo se aceptan caracteres alfanuméricos, piso abajo ó punto",
                label: "Nombre de usuario",
                notAvailable: "Nombre de usuario no disponible"
            }
        },
        signIn: "ingresar",
        title: "Registro" 
    },
    validator: {
        alphaNum: "Solo acepta alfanuméricos",
        email: "Formato de correo incorrecto",
        minLength: ((number) => { return `Tiene que tener al menos ${number} caracteres` }),
        noSpecialChars: "Solo se aceptan letras minúsculas, guión, punto y números, sin espacios",
        required: "Este campo es requerido",
        sameAs: ((field) => { return `Debe ser igual a ${field}` })
    }
}

export default esp