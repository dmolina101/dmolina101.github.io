export const eng = {
    activateUserAccount: {
        alert: {
            accountActivated: "Your account has been successfully activated.",
            accountNoExist: "User account does not exist.",
            error: "There is a problem trying to activate your account, please contact support.",
            success: "Your account has been successfully activated."
        },
        legend: "You can now log in to your account",
        signIn: "Sign In",
        title: "Howdy"
    },
    events: {
        title: "Pools available"
    },
    eventCard: {
        button: "See game rooms"
    },
    eventRooms: {
        alert: {
            error: "An error occurred."
        },
        breadcrumb: {
            home: "Home"
        },
        title: "Rooms"
    },
    sell: {
        note: "Cuando alguien genere una <b>Orden de Compra</b> para adquirir tu producto, podrás indicar el precio del flete en caso de que desees ofrecer el servicio de transporte, ya que en la Orden de Compra se indica el destino del producto.",
        searchProduct: {
            help: "Write the name of the product you are going to sell",
            label: "Product"
        },
        title: "What do you want to sell?" 
    },
    signIn: {
        alert: {
            accountPendingVerification: "The account is pending verification. We send you an email so you can activate it.",
            invalidPassword: "Invalid password",
            error: "An error occurred."
        },
        areYouNotRegisteredYet: "Not registered yet?",
        btnInitText: "Sign In",
        btnLoadingText: "Authenticating",
        forgotYourPassword: "Forgot your password?",
        inputs: {
            email: {
                label: "Email"
            },
            password: {
                label: "Password"
            }
        },
        modalRecoverPassword: {
            alert: {
                success: "Data recovered successfully!. We send your data to the email.",
                invalidEmail: "There is no user account associated with this email",
                error: "An error occurred."
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
        signUp: "Sign Up",
        title: "Sign In"    
    },
    signUp: {
        alert: {
            error: "An error occurred.",
            success: "Account Created successfully; You must activate your account, for this we have sent your information to your email.",
            warning: "There is already an account created with this email."
        },
        btnInitText: "Sign Up",
        btnLoadingText: "Validating",
        haveAnAccount: "Do you already have an account?",
        inputs: {
            confirmPassword: {
                label: "Confirm password"
            },
            email: {
                label: "Email"
            },
            password: {
                label: "Password"
            },
            username: {
                helpText: "Only alphanumeric characters, underscore or period are accepted.",
                label: "Username",
                notAvailable: "Username not available"
            }
        },
        signIn: "Sign In",
        title: "Sign Up"                 
    },
    validator: {
        alphaNum: "Accepts only alphanumerics",
        email: "Incorrect email format",
        minLength: ((number) => { return `It must have at least ${number} characters` }),
        required: "Este campo es requerido",
        sameAs: ((field) => { return `It must be equal to ${field}` }),
        noSpecialChars: "Only lowercase letters, hyphen, period and numbers are accepted, without spaces"
    }
}

export default eng