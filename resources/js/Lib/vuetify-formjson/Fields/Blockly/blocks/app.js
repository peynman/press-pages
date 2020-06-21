export default function (Blockly) {
    // get app state at a path
    Blockly.Blocks.app_register_channel = {
        init: function () {
            this.appendValueInput('EVENT')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Listen for event ')
            this.appendValueInput('CHANNEL')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on channel')
            this.appendStatementInput('onEvent')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on trigger')
                .appendField(new Blockly.FieldVariable('event'), 'event')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_register_channel = function (block) {
        const argument0 = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        const argument1 = Blockly.JavaScript.valueToCode(block, 'EVENT', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        const innerCode = Blockly.JavaScript.statementToCode(block, 'onEvent')
        const variableEvent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('event'), Blockly.Variables.NAME_TYPE)

        return `this.registerChannelListener(${argument1}, ${argument0}, (e) => { this.blockly.${variableEvent} = e; ${innerCode}\n})\n`
    }

    // get app state at a path
    Blockly.Blocks.app_new_filtered_from_state = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Duplicate object')
            this.appendStatementInput('onEach')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on each')
                .appendField(new Blockly.FieldVariable('key'), 'key')
                .appendField(new Blockly.FieldVariable('value'), 'value')
                .appendField('include if')
                .appendField(new Blockly.FieldVariable('include'), 'include')
            this.setOutput(true, 'String')
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_new_filtered_from_state = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        const innerCode = Blockly.JavaScript.statementToCode(block, 'onEach')
        const vKey = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('key'), Blockly.Variables.NAME_TYPE)
        const vValue = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('value'), Blockly.Variables.NAME_TYPE)
        const vInclude = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('include'), Blockly.Variables.NAME_TYPE)

        return [`this.duplicateObjectAndFilter(${argument0}, (k, v) => {\nthis.blockly.${vKey} = k; this.blockly.${vValue} = v; ${innerCode}\n return this.blockly.${vInclude}\n})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }

    // get app state at a path
    Blockly.Blocks.app_get_from_state = {
        init: function () {
            this.appendValueInput('path')
                .setCheck('String')
                .appendField('Get state value at path')
            this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean'])
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_get_from_state = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return ['this.getStateFromNestedPath(' + argument0 + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }

    // change app state at a path
    Blockly.Blocks.app_change_state = {
        init: function () {
            this.appendValueInput('path')
                .setCheck('String')
                .appendField('Set state value at path')
            this.appendValueInput('value')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('to')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_change_state = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.setStateForNestedPath(${argument0}, ${argument1})\n`
    }

    // commit mutation with data
    Blockly.Blocks.app_commit_mutation = {
        init: function () {
            this.appendValueInput('mutation')
                .setCheck('String')
                .appendField('Commit to state with mutation')
            this.appendValueInput('data')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and data')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_commit_mutation = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'mutation', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.$store.commit(${argument0}, ${argument1})\n`
    }

    // go to app page
    Blockly.Blocks.app_go_to_page = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('Go to page')
            this.appendValueInput('PROPS')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with props')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_go_to_page = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '{}'
        var argument1 = Blockly.JavaScript.valueToCode(block, 'PROPS', Blockly.JavaScript.ORDER_ASSIGNMENT) || '{}'
        return `this.gotoPage(${argument0}, ${argument1})\n`
    }

    // app_get_route_at
    Blockly.Blocks.app_get_route_path_parts = {
        init: function () {
            this.appendValueInput('INX')
                .setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Get Route path part at index')
            this.setOutput(true, 'String')
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_get_route_path_parts = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'INX', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0'
        return [`this.getRoutePathPartAt(${argument0})\n`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }

    // load app schema
    Blockly.Blocks.app_load_schema = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('Load schema')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_load_schema = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '{}'
        return `this.loadSchema(${argument0})\n`
    }

    // show an alert dialog with message and title
    Blockly.Blocks.app_show_alert = {
        init: function () {
            this.appendValueInput('title')
                .setCheck('String')
                .appendField('Show alert with title')
            this.appendValueInput('message')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and message')
            this.appendDummyInput()
                .appendField('mode')
                .appendField(new Blockly.FieldDropdown([
                    ['primary', 'Primary'],
                    ['secondary', 'Secondary'],
                    ['success', 'Success'],
                    ['warning', 'Warning'],
                    ['danger', 'Danger'],
                    ['info', 'Info'],
                    ['critical', 'Critical'],
                    ['debug', 'Debug']
                ]), 'mode')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_show_alert = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = '...;\n'
        return code
    }

    // get root form value
    Blockly.Blocks.app_form_values = {
        init: function () {
            this.appendDummyInput()
                .appendField('get form values')
            this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean'])
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_form_values = function (block) {
        return ['this.DeCompileEvents(this[this.getFormValuePropName()])', Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // set root form validations
    Blockly.Blocks.app_form_validations = {
        init: function () {
            this.appendValueInput('VALS')
                .appendField('Set form validations')
                .setCheck(['Array', 'Object'])
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_form_validations = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'VALS', Blockly.JavaScript.ORDER_ASSIGNMENT) || '[]'
        return `this.setFormValidations(${argument0})\n`
    }

    // reset root form validations
    Blockly.Blocks.app_form_remove_validations = {
        init: function () {
            this.appendDummyInput()
                .appendField('Reset form validations')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_form_remove_validations = function (block) {
        return `this.resetFormValidations()\n`
    }

    // get api response alert props
    Blockly.Blocks.app_form_response_alert = {
        init: function () {
            this.appendDummyInput()
                .appendField('get response ')
                .appendField(new Blockly.FieldVariable('item'), 'var_name')
                .appendField('alert')
            this.setOutput(true, 'Object')
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_form_response_alert = function (block) {
        var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE)
        return [`this.getAlertForResponse(this.blockly.${variableName})`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // get form value at path
    Blockly.Blocks.app_form_value_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('get form values at path')
            this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean'])
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_form_value_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`this.getNestedPathValue(this[this.getFormValuePropName()], ${argument0})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }

    // get form schema at path
    Blockly.Blocks.app_form_schema_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('get form schema at path')
            this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean'])
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_form_schema_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`this.getNestedPathValue(this[[this.getFormSchemaPropName()]], ${argument0})`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // set form schema at path
    Blockly.Blocks.app_set_form_schema_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('set form schema at path')
            this.appendValueInput('VAL')
                .setCheck(['Array', 'String', 'Object', 'Number', 'Boolean'])
                .appendField('to value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_set_form_schema_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.setNestedPathValue(this[this.getFormSchemaPropName()], ${argument0}, ${argument1})\n`
    }

    // make template for schema at path
    Blockly.Blocks.app_make_template_form_schema_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('make template for schema at path')
            this.appendValueInput('OBJ')
                .setCheck(['Object'])
                .appendField('from template object')
            this.appendValueInput('ITEMS')
                .setCheck(['String'])
                .appendField('with items at component state path')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_make_template_form_schema_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '{}'
        var argument2 = Blockly.JavaScript.valueToCode(block, 'ITEMS', Blockly.JavaScript.ORDER_ASSIGNMENT) || '[]'
        return `this.makeTemplate(${argument0}, ${argument1}, ${argument2})\n`
    }

    // clear template for schema at path
    Blockly.Blocks.app_clear_template_form_schema_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('clear template for schema at path')
            this.appendValueInput('IDS')
                .setCheck('String')
                .appendField('and keep ids (, separated list)')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_clear_template_form_schema_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'IDS', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.clearTemplate(${argument0}, ${argument1})\n`
    }

    // append to form schema at path
    Blockly.Blocks.app_append_form_schema_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('merge to form schema at path')
            this.appendValueInput('VAL')
                .setCheck(['Array', 'String', 'Object', 'Number', 'Boolean'])
                .appendField('with value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_append_form_schema_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.appendNestedPathValue(this[this.getFormSchemaPropName()], ${argument0}, ${argument1})\n`
    }


    // set form value at path
    Blockly.Blocks.app_set_form_value_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('set form value at path')
            this.appendValueInput('VAL')
                .setCheck(['Array', 'String', 'Object', 'Number', 'Boolean'])
                .appendField('to value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_set_form_value_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.setNestedPathValue(this[this.getFormValuePropName()], ${argument0}, ${argument1})\n`
    }


    // append to form value at path
    Blockly.Blocks.app_append_form_value_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('merge with form value at path')
            this.appendValueInput('VAL')
                .setCheck(['Array', 'String', 'Object', 'Number', 'Boolean'])
                .appendField('with value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_append_form_value_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.appendNestedPathValue(this[this.getFormValuePropName()], ${argument0}, ${argument1})\n`
    }

    // app set auth token and user
    Blockly.Blocks.app_auth_user = {
        init: function () {
            this.appendValueInput('USER')
                .setCheck('Object')
                .appendField('Set user')
            this.appendValueInput('AUTH')
                .setCheck('String')
                .appendField('authenticated with token')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_auth_user = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'AUTH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.authenticateUserWithToken(${argument0}, ${argument1})\n`
    }

    // app console log
    Blockly.Blocks.app_console_log = {
        init: function () {
            this.appendValueInput('LOG')
                .setCheck(['Array', 'String', 'Object', 'Number', 'Boolean'])
                .appendField('console log')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_console_log = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'LOG', Blockly.JavaScript.ORDER_ASSIGNMENT) || 'this'
        return `console.log(${argument0})\n`
    }
}

export const CategoryApp =
    `
<category id="catApp" colour="110" name="App">
    <block type="app_register_channel"></block>
    <block type="app_new_filtered_from_state"></block>
    <block type="app_get_route_path_parts"></block>
    <block type="app_get_from_state"></block>
    <block type="app_form_value_at_path"></block>
    <block type="app_form_response_alert"></block>
    <block type="app_form_values"></block>
    <block type="app_form_schema_at_path"></block>
    <block type="app_append_form_schema_at_path"></block>
    <block type="app_form_validations"></block>
    <block type="app_form_remove_validations"></block>
    <block type="app_set_form_schema_at_path"></block>
    <block type="app_set_form_value_at_path"></block>
    <block type="app_append_form_value_at_path"></block>
    <block type="app_make_template_form_schema_at_path"></block>
    <block type="app_clear_template_form_schema_at_path"></block>
    <block type="app_change_state"></block>
    <block type="app_commit_mutation"></block>
    <block type="app_go_to_page"></block>
    <block type="app_load_schema"></block>
    <block type="app_auth_user"></block>
    <block type="app_show_alert"></block>
    <block type="app_console_log"></block>
</category>
`
