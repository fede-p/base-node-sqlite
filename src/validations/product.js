
//--------------------------------------
//  JOI EXTENSION: CAST NUMBER -> STRING
//--------------------------------------
const JoiStringConvertible = function (joi) {
  return {
    base: joi.string(),
    name: 'stringConvertible',
    coerce (value, state, options) {
      function isNumeric (n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
      }
      if (isNumeric(value)) { return value.toString() }
      return value
    }
  }
}

const Joi = require('joi').extend([ JoiStringConvertible ]);

//--------------------------------------
//  PRIMITIVE FIELD VALIDATIONS
//--------------------------------------
const barCode = Joi.stringConvertible().alphanum().max(14).allow('').lowercase().error(new Error("Solo se permiten letras y numeros con un maximo 14 caracteres"))
const manualCode = Joi.string().alphanum().max(8).allow('').lowercase().error(new Error("Solo se permiten letras y numeros con un maximo 8 caracteres"))
const description = Joi.stringConvertible().max(250).min(1).lowercase().error(new Error("Solo se permiten letras y numeros con un maximo 250 caracteres"))
//const description = Joi.string().regex(/^[a-zA-Z0-9 "'@+!#$%&\:\;\<\>\=/_,.*?^\]\[-]{1,250}$/).max(250).min(1).lowercase().error(new Error("Solo se permiten letras y numeros con un maximo 250 caracteres"))
const tags = Joi.array().items(Joi.string().allow('').alphanum().lowercase())
//
//--------------------------------------
//  DEFAULT VALUES
//--------------------------------------
const barCodeDefault = barCode.default("")
const manualCodeDefault = manualCode.default("")
const descriptionDefault = description.default("")
const tagsDefault = tags.default([])
module.exports = {
  barCode, manualCode, description, tags,
  barCodeDefault, manualCodeDefault, descriptionDefault, tagsDefault
}