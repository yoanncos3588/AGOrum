const errorController = {

    showError(errorCode) {
        switch (errorCode) {
            case `formNonUniqueField`: return `Adresse email ou pseudo déjà utilisé`; break;
            case `formMissingFields`: return `Veuillez remplir le formulaire pour vous inscrire`; break;
            default: return `Une erreur est survenue`; break;
        }
    }

}

module.exports = errorController;