
export default class ErrorMessages  {
    
    constructor()   {
        this.messages = {
            "MAND_DEFAULT" :    "the field '${field.name}' must be provided",
            "EMAIL_DEFAULT" :   "the field '${field.name}' isn't a valid email",
            "DATE_ATLEAST" :    "the field '${field.name}' must be at least ${variant.value} ${variant.datepart}",
            "DATE_ATMOST" :     "the field '${field.name}' must be at most ${variant.value} ${variant.datepart}",
            "DATE_BEFORE" :     "the field '${field.name}' must be before ${refDate}",
            "DATE_AFTER" :      "the field '${field.name}' must be after ${refDate}",
            "REGEX_DEFAULT" :   "the field '${field.name}' contains invalid characters",
            "LENGTH_MAX" :      "the field '${field.name}' cannot be longer than ${max} characters`",
            "LENGTH_MIN" :      "the field '${field.name}' must be at least ${min} characters`",
        }
        this.fields = {
            "DATEPART_INTERVALS": {"days":"days", "months":"months", "years":"years"}
        }
    }

    getMessages()   {
        return this.messages;
    }

}