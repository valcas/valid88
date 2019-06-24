
export default class ErrorMessages  {
    
    constructor()   {
        this.messages = {
            "MAND_DEFAULT" :    "The field '${DEF.label}' must be provided",
            "EMAIL_DEFAULT" :   "The field '${DEF.label}' isn't a valid email",
            "DATE_ATLEAST" :    "The field '${DEF.label}' must be at least ${VARIANT.value} ${VARIANT.datepart}",
            "DATE_ATMOST" :     "The field '${DEF.label}' must be at most ${VARIANT.value} ${VARIANT.datepart}",
            "DATE_BEFORE" :     "The field '${DEF.label}' must be before ${PRM.refDate}",
            "DATE_AFTER" :      "The field '${DEF.label}' must be after ${PRM.refDate}",
            "REGEX_DEFAULT" :   "The field '${DEF.label}' contains invalid characters",
            "LENGTH_MAX" :      "The field '${DEF.label}' cannot be longer than ${CFG.max} characters`",
            "LENGTH_MIN" :      "The field '${DEF.label}' must be at least ${CFG.min} characters`",
            "ESC_HTML_DEFAULT": "The field '${DEF.label}' contains invalid characters",
        }
        this.fields = {
            "DATEPART_INTERVALS": {"days":"days", "months":"months", "years":"years"}
        }

        this.defaultMessages = this.messages;
        this.defaultFields = this.fields;
    }

    getMessages()   {
        return this.messages;
    }

}