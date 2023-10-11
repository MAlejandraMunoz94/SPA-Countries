const validations = (form) => {

    const errors = {};

    if (form.name.trim().length === 0) {
      errors.name = "Un nombre es requerido";
    } else if (!/^[a-zA-Z ]+$/.test(form.name)) {
      errors.name = "El nombre no puede contener caracteres especiales";    
    } else if (form.name.length > 15) {
    errors.name = "El nombre debe tener menos de 15 caracteres";
    }

    if (form.duration <= 0) {
        errors.duration = "La duracion debe ser mayor a 0";
      } else if ( form.duration > 8640) {
        errors.duration = "La duracion debe ser menor a un año";    
    }

    if (form.countryId.length===0){
        errors.countryId = "Debe seleccionar al menos un pais"
    }

    if (form.season.length===0){
        errors.season = "Debe seleccionar una temporada"
    }
    
    if (form.dificult.length===0){
        errors.dificult = "Debe seleccionar una dificultad"
    }

    return errors;
}


export default validations;