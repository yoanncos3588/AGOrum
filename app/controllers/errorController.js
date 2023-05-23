const errorController = {

    urlParameter: `error`,
    resParameter: `errorMessage`,

    formMissingFields: `formMissingFields`,
    formUnvalidEmail: `formUnvalidEmail`,
    formNonUniqueEmail: `formNonUniqueEmail`,

    showError(errorCode) {
        console.log(errorCode);
        switch (errorCode) {
            case `formNonUniqueEmail`: return `Adresse email déjà utilisé`; break;
            case errorController.formMissingFields: return `Veuillez remplir le formulaire pour vous inscrire`; break;
            case errorController.formUnvalidEmail: return `L'adresse email saisie n'est pas valide`; break;
            default: return `Une erreur est survenue`; break;
        }
    }

}

module.exports = errorController;