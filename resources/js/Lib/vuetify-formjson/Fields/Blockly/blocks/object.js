export default function (Blockly) {
    // json stringify
    Blockly.Blocks.obj_json_stringify = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck(['Array', 'String', 'Object', 'Number', 'Boolean'])
                .appendField('stringify')
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('pretty')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'PRETTY')
            this.setOutput(true, 'String')
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_json_stringify = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        const pretty = block.getFieldValue('PRETTY')
        console.log(pretty)
        return [`JSON.stringify(${argument0} ${pretty === 'TRUE' ? ', null, 4' : ''})\n`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // json parse
    Blockly.Blocks.obj_json_parse = {
        init: function () {
            this.appendValueInput('jsonStr')
                .setCheck('String')
                .appendField('parse')
            this.setOutput(true, ['Object', 'Array', 'String'])
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_json_parse = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'jsonStr', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`JSON.parse(${argument0})\n`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }

    // get nested
    Blockly.Blocks.obj_get_nested = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck('Object')
                .appendField('Get nested value in object')
            this.appendValueInput('PATH')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('at path')
            this.setOutput(true, ['Object', 'String', 'Number', 'Array', 'Boolean'])
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_get_nested = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`this.getNestedPathValue(${argument0}, ${argument1})\n`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }


    // object assign
    Blockly.Blocks.obj_assign = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck('Object')
                .appendField('Assign to object')
            this.appendValueInput('VAL')
                .setCheck('Object')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with value')
            this.setOutput(true, ['Object', 'String', 'Number', 'Array', 'Boolean'])
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_assign = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`Object.assign(${argument0}, ${argument2})\n`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // array push
    Blockly.Blocks.arr_push = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck('Array')
                .appendField(new Blockly.FieldDropdown([ ['unshift', 'unshift'], ['push', 'push']]), 'MODE')
                .appendField('(to) array')
            this.appendValueInput('VAL')
                .setCheck('Array')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with values')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(260)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.arr_push = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        const dropdownMode = block.getFieldValue('MODE');
        return `this.blockly.__tempArr = ${argument2}; if (Array.isArray(this.blockly.__tempArr)) { this.blockly.__tempArr.forEach((item) => { ${argument0}.${dropdownMode}(item) }) }\n`
    }


    // array merge/replace
    Blockly.Blocks.arr_merge = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck('Array')
                .appendField(new Blockly.FieldDropdown([['merge', 'merge'], ['replace', 'replace']]), 'MODE')
                .appendField('in array')
            this.appendValueInput('VAL')
                .setCheck('Array')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with values')
            this.appendValueInput('KEY')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('key propery(id)')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(260)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.arr_merge = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument3 = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ASSIGNMENT) || '`id`'
        const dropdownMode = block.getFieldValue('MODE');
        return `this.arrayMergeWithObjects(${argument0}, ${argument2}, ${argument3}, '${dropdownMode}')\n`
    }

    // append nested
    Blockly.Blocks.obj_assign = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck(null)
                .appendField('Assign to object')
            this.appendValueInput('VAL')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with value')
            this.setOutput(true, ['Object', 'String', 'Number', 'Array', 'Boolean'])
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_assign = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`Object.assign(${argument0}, ${argument2})\n`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // set nested
    Blockly.Blocks.obj_set_nested = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck('Object')
                .appendField('Set nested value in object')
            this.appendValueInput('PATH')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('at path')
            this.appendValueInput('VAL')
                .setCheck(['Object', 'Array', 'Boolean', 'Number', 'String'])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('to Value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_set_nested = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.setNestedPathValue(${argument0}, ${argument1}, ${argument2})\n`
    }


    // create empty object
    Blockly.Blocks.obj_create_new = {
        init: function () {
            this.appendDummyInput()
                .appendField('Create new object')
            this.setOutput(true, 'String')
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_create_new = function (block) {
        return [`{}`, Blockly.JavaScript.ORDER_NEW]
    }

    // set key value
    Blockly.Blocks.obj_set_key_value = {
        init: function () {
            this.appendValueInput('KEY')
                .setCheck('String')
                .appendField('Set key ')
            this.appendValueInput('OBJ')
                .setCheck('Object')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('for object')
            this.appendValueInput('VAL')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('to value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_set_key_value = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `${argument1}[${argument0}] = ${argument2}\n`
    }


    // append nested
    Blockly.Blocks.obj_append_nested = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck(null)
                .appendField('Append to nested value in object')
            this.appendValueInput('PATH')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('at path')
            this.appendValueInput('VAL')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('to Value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_append_nested = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.appendNestedPathValue(${argument0}, ${argument1}, ${argument2})\n`
    }

    // is set nested
    Blockly.Blocks.obj_is_set_nested = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck(null)
                .appendField('Is set nested value in object')
            this.appendValueInput('PATH')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('at path')
            this.setOutput(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_is_set_nested = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.isSetNested(${argument0}, ${argument1}\n`
    }

    // foreach nested
    Blockly.Blocks.obj_foreach_nested = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck(null)
                .appendField('for each key')
                .appendField(new Blockly.FieldVariable('key'), 'KEY')
                .appendField(',')
                .appendField(new Blockly.FieldVariable('value'), 'VAL')
                .appendField(',')
                .appendField(new Blockly.FieldVariable('index'), 'IDX')
                .appendField('in')
            this.appendStatementInput('DO')
                .setCheck(null)
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_foreach_nested = function (block) {
        const varKey = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('KEY'), Blockly.Variables.NAME_TYPE)
        const varVal = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE)
        const varIdx = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('IDX'), Blockly.Variables.NAME_TYPE)
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var branch = Blockly.JavaScript.statementToCode(block, 'DO')
        branch = Blockly.JavaScript.addLoopTrap(branch, block)
        return `let indexer = 0;\nlet target = ${argument0};\nfor (const prop in target) {\n  this.blockly.${varKey} = prop;\n  this.blockly.${varVal} = target[prop];\n  this.blockly.${varIdx} = indexer;\n${branch};\n  indexer++;\n}\n`
    }
}

export const CategoryObject =
`
<category id="catObj" colour="105" name="Object">
    <block type="obj_create_new"></block>
    <block type="obj_set_key_value"></block>
    <block type="obj_get_nested"></block>
    <block type="obj_set_nested"></block>
    <block type="obj_assign"></block>
    <block type="obj_is_set_nested"></block>
    <block type="obj_json_stringify"></block>
    <block type="obj_json_parse"></block>
    <block type="obj_foreach_nested"></block>
    <block type="obj_append_nested"></block>
</category>
`
