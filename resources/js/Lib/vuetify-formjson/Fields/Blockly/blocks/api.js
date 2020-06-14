export default function (Blockly, crudList) {
    // make a web request
    Blockly.Blocks.web_request = {
        init: function () {
            this.appendValueInput('url')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Send request to url')
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with method')
                .appendField(new Blockly.FieldDropdown([['Get', 'GET'], ['Post', 'POST'], ['Put', 'PUT'], ['Head', 'HEAD'], ['Delete', 'DELETE']]), 'method')
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and content type')
                .appendField(new Blockly.FieldDropdown([
                    ['JSON', 'application/json'],
                    ['Multipart form data', 'multipart/form-data;'],
                    ['x-www Form', 'application/x-www-form-urlencoded'],
                    ['Raw', 'text']
                ]), 'content_type')
            this.appendValueInput('data')
                .setCheck(['Array', 'String', 'Object', 'Boolean', 'Number'])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and data')
            this.appendValueInput('headers')
                .setCheck('Object')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('headers')
            this.appendStatementInput('onResponse')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on responsed')
                .appendField(new Blockly.FieldVariable('response'), 'response')
                .appendField('do')
            this.appendStatementInput('onError')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on error')
                .appendField(new Blockly.FieldVariable('error'), 'error')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('Make a web request to a url and process the re')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.web_request = function (block) {
        const valueUrl = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)
        const dropdownMethod = block.getFieldValue('method')
        const dropdownContentType = block.getFieldValue('content_type')
        const valueData = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC)
        const valueHeaders = Blockly.JavaScript.valueToCode(block, 'headers', Blockly.JavaScript.ORDER_ATOMIC)
        const variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE)
        const variableError = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('error'), Blockly.Variables.NAME_TYPE)
        const innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse')
        const innerErrorCode = Blockly.JavaScript.statementToCode(block, 'onError')

        let headersCode = `let askedHeaders = { 'Content-Type': '${dropdownContentType}' }\n`
        if (valueHeaders !== '') {
            headersCode = `let askedHeaders = ${valueHeaders}\nif (!headers) { headers = {}}\nheaders['Content-Type'] = '${dropdownContentType}'\n`
        }
        const headers = `${headersCode}\nconst headers = this.getWebAuthHeaders(askedHeaders)\n`
        var code = `${headers}this.webRequest({\nurl: ${valueUrl},\nmethod: '${dropdownMethod}',\nheaders,\ndata: ${valueData},\n}).then((response) => {\n  this.blockly.${variableResponse} = response;\n ${innerCode}\n}).catch((error) => {\nthis.blockly.${variableError} = error; \n ${innerErrorCode}\n})\n`
        return code
    }

    // is response in variable code number
    Blockly.Blocks.web_is_response_code = {
        init: function () {
            this.appendDummyInput()
                .appendField('Is response in variable')
                .appendField(new Blockly.FieldVariable('response'), 'var_name')
                .appendField('status code')
            this.appendValueInput('code')
                .setCheck('Number')
            this.setInputsInline(true)
            this.setOutput(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.web_is_response_code = function (block) {
        var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE)
        var valueCode = Blockly.JavaScript.valueToCode(block, 'code', Blockly.JavaScript.ORDER_ATOMIC)
        var code = 'this.blockly.' + variableName + '.status === ' + valueCode
        return [code, Blockly.JavaScript.ORDER_NONE]
    }

    // is response ok/error/validation error/...
    Blockly.Blocks.web_is_response_ok = {
        init: function () {
            this.appendDummyInput()
                .appendField('Is response ')
                .appendField(new Blockly.FieldVariable('response'), 'var_name')
                .appendField(new Blockly.FieldDropdown([['OK', 'ok'], ['Validation Error', 'validation'], ['Error', 'error'], ['App Error', 'app'], ['Server Error', 'sever'], ['Other Errors', 'other']]), 'type')
            this.setInputsInline(true)
            this.setOutput(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.web_is_response_ok = function (block) {
        var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE)
        const dropdownContentType = block.getFieldValue('type')
        var code = ''
        switch (dropdownContentType) {
        case 'ok':
            code += 'this.blockly.' + variableName + '.status === 200'
            break
        case 'validation':
            code += `this.blockly.${variableName}.status === 400 || this.blockly.${variableName}.status === 422`
            break
        case 'error':
            code += `this.blockly.${variableName}.status !== 200`
            break
        case 'app':
            code += `this.blockly.${variableName}.status === 500`
            break
        case 'other':
            code += `((this.blockly.${variableName}.status !== 503 || this.blockly.${variableName}.status !== 504) && ` +
                        `(this.blockly.${variableName}.status !== 500) && ` +
                        `(this.blockly.${variableName}.status !== 400) && ` +
                        `(this.blockly.${variableName}.status === 200))`
            break
        }
        return [code, Blockly.JavaScript.ORDER_NONE]
    }

    // web get authentication token from response
    Blockly.Blocks.web_get_auth_token = {
        init: function () {
            this.appendDummyInput()
                .appendField('Get Auth token from response')
                .appendField(new Blockly.FieldVariable('item'), 'var_name')
            this.setColour(290)
            this.setOutput(true, 'String')
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.web_get_auth_token = function (block) {
        var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE)
        return [`this.getNestedPathValue(this.blockly.${variableName}, 'data.token.api')\n`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // web get data response
    Blockly.Blocks.web_get_data_from_response = {
        init: function () {
            this.appendDummyInput()
                .appendField('Get data from response')
                .appendField(new Blockly.FieldVariable('response'), 'var_name')
            this.setColour(290)
            this.setOutput(true, 'String')
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.web_get_data_from_response = function (block) {
        var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE)
        return [`this.getNestedPathValue(this.blockly.${variableName}, 'data')\n`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // web get data response
    Blockly.Blocks.web_get_data_from_response = {
        init: function () {
            this.appendDummyInput()
                .appendField('Get data from response')
                .appendField(new Blockly.FieldVariable('response'), 'var_name')
            this.setColour(290)
            this.setOutput(true, 'String')
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.web_get_data_from_response = function (block) {
        var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE)
        return [`this.getNestedPathValue(this.blockly.${variableName}, 'data')\n`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // crud create
    Blockly.Blocks.api_crud_create = {
        init: function () {
            this.appendValueInput('CRUD')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Create CRUD resource')
            this.appendValueInput('DATA')
                .setCheck(['Array', 'String', 'Object', 'Boolean', 'Number'])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with data')
            this.appendStatementInput('onResponse')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on response')
                .appendField(new Blockly.FieldVariable('response'), 'response')
                .appendField('do')
            this.appendStatementInput('onError')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on error')
                .appendField(new Blockly.FieldVariable('error'), 'error')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_create = function (block) {
        const valueCrud = Blockly.JavaScript.valueToCode(block, 'CRUD', Blockly.JavaScript.ORDER_ATOMIC)
        const valueData = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC)
        const variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE)
        const variableError = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('error'), Blockly.Variables.NAME_TYPE)
        const innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse')
        const innerErrorCode = Blockly.JavaScript.statementToCode(block, 'onError')
        const method = 'POST'
        let headersCode = `let askedHeaders = { 'Content-Type': 'application/json' }\n`
        const headers = `${headersCode}const headers = this.getWebAuthHeaders(askedHeaders)\n`
        var code = `${headers}this.webRequest({\nurl: '/api/' + ${valueCrud},\nmethod: '${method}',\nheaders,\ndata: ${valueData},\n}).then((response) => {\n  this.blockly.${variableResponse} = response;\n ${innerCode}\n}).catch((error) => {\nthis.blockly.${variableError} = error; \n ${innerErrorCode}\n})\n`
        return code
    }

    // crud update
    Blockly.Blocks.api_crud_update = {
        init: function () {
            this.appendValueInput('CRUD')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Update CRUD resource')
            this.appendValueInput('ID')
                .setCheck(['Number', 'String'])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with ID')
            this.appendValueInput('DATA')
                .setCheck(['Array', 'String', 'Object', 'Boolean', 'Number'])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and data')
            this.appendStatementInput('onResponse')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on response')
                .appendField(new Blockly.FieldVariable('response'), 'response')
                .appendField('do')
            this.appendStatementInput('onError')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on error')
                .appendField(new Blockly.FieldVariable('error'), 'error')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_update = function (block) {
        const valueCrud = Blockly.JavaScript.valueToCode(block, 'CRUD', Blockly.JavaScript.ORDER_ATOMIC)
        const valueData = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC)
        const valueID = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC)
        const variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE)
        const variableError = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('error'), Blockly.Variables.NAME_TYPE)
        const innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse')
        const innerErrorCode = Blockly.JavaScript.statementToCode(block, 'onError')
        const method = 'PUT'
        let headersCode = `let askedHeaders = { 'Content-Type': 'application/json' }\n`
        const headers = `${headersCode}const headers = this.getWebAuthHeaders(askedHeaders)\n`
        var code = `${headers}this.webRequest({\nurl: '/api/' + ${valueCrud} + '/' + ${valueID},\nmethod: '${method}',\nheaders,\ndata: ${valueData},\n}).then((response) => {\n  this.blockly.${variableResponse} = response;\n ${innerCode}\n}).catch((error) => {\nthis.blockly.${variableError} = error; \n ${innerErrorCode}\n})\n`
        return code
    }

    // crud delete
    Blockly.Blocks.api_crud_delete = {
        init: function () {
            this.appendValueInput('CRUD')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Delete CRUD resource')
            this.appendValueInput('ID')
                .setCheck(['Number', 'String'])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with ID')
            this.appendStatementInput('onResponse')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on response')
                .appendField(new Blockly.FieldVariable('response'), 'response')
                .appendField('do')
            this.appendStatementInput('onError')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on error')
                .appendField(new Blockly.FieldVariable('error'), 'error')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_delete = function (block) {
        const valueCrud = Blockly.JavaScript.valueToCode(block, 'CRUD', Blockly.JavaScript.ORDER_ATOMIC)
        const valueID = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC)
        const variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE)
        const variableError = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('error'), Blockly.Variables.NAME_TYPE)
        const innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse')
        const innerErrorCode = Blockly.JavaScript.statementToCode(block, 'onError')
        const method = 'DELETE'
        let headersCode = `let askedHeaders = { 'Content-Type': 'application/json' }\n`
        const headers = `${headersCode}const headers = this.getWebAuthHeaders(askedHeaders)\n`
        var code = `${headers}this.webRequest({\nurl: '/api/' + ${valueCrud} + '/' + ${valueID},\nmethod: '${method}',\nheaders,\n}).then((response) => {\n  this.blockly.${variableResponse} = response;\n ${innerCode}\n}).catch((error) => {\nthis.blockly.${variableError} = error; \n ${innerErrorCode}\n})\n`
        return code
    }

    // crud query
    Blockly.Blocks.api_crud_query = {
        init: function () {
            this.appendValueInput('CRUD')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Query CRUD resource')
            this.appendValueInput('RELS')
                .appendField('with relations')
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(['Array', 'Object', 'Number'])
            this.appendValueInput('PAGE')
                .appendField('at page')
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck('Number')
            this.appendValueInput('LIMIT')
                .appendField('limit')
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck('Number')
            this.appendValueInput('FILTER')
                .appendField('filter')
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck('condition')
            this.appendStatementInput('onResponse')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on response')
                .appendField(new Blockly.FieldVariable('response'), 'response')
                .appendField('do')
            this.appendStatementInput('onError')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on error')
                .appendField(new Blockly.FieldVariable('error'), 'error')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_query = function (block) {
        const valueCrud = Blockly.JavaScript.valueToCode(block, 'CRUD', Blockly.JavaScript.ORDER_ATOMIC)
        const valueRels = Blockly.JavaScript.valueToCode(block, 'RELS', Blockly.JavaScript.ORDER_ATOMIC) || 'null'
        const valuePage = Blockly.JavaScript.valueToCode(block, 'PAGE', Blockly.JavaScript.ORDER_ATOMIC) || '0'
        const valueLimit = Blockly.JavaScript.valueToCode(block, 'LIMIT', Blockly.JavaScript.ORDER_ATOMIC) || '10'
        const valueFilters = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null'
        const variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE)
        const variableError = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('error'), Blockly.Variables.NAME_TYPE)
        const innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse')
        const innerErrorCode = Blockly.JavaScript.statementToCode(block, 'onError')
        const method = 'POST'
        let headersCode = `let askedHeaders = { 'Content-Type': 'application/json' }\n`
        const headers = `${headersCode}const headers = this.getWebAuthHeaders(askedHeaders)\n`
        const dataCode = `const reqData = { page: ${valuePage}, limit: ${valueLimit}, filter: ${valueFilters}, relations: ${valueRels} }\n`
        var code = `${headers}${dataCode}this.webRequest({\nurl: '/api/' + ${valueCrud} + '/query',\nmethod: '${method}',\nheaders,\ndata: reqData,\n}).then((response) => {\n  this.blockly.${variableResponse} = response;\n ${innerCode}\n}).catch((error) => {\nthis.blockly.${variableError} = error; \n ${innerErrorCode}\n})\n`
        return code
    }

    // crud search
    Blockly.Blocks.api_crud_search = {
        init: function () {
            this.appendDummyInput()
                .appendField('Search CRUD')
                .appendField(new Blockly.FieldDropdown(crudList), 'crud')
            this.appendValueInput('relations')
                .setCheck('Array')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with relations')
            this.appendValueInput('search')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('search for')
            this.appendValueInput('page')
                .setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('at page')
            this.appendValueInput('NAME')
                .setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('limit')
            this.appendValueInput('filter')
                .appendField('filter')
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck('condition')
            this.appendStatementInput('then')
                .setCheck(null)
                .appendField('on response')
                .appendField(new Blockly.FieldVariable('item'), 'varName')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_search = function (block) {
    }

    // crud query conditions
    Blockly.Blocks.api_crud_where = {
        init: function () {
            this.appendValueInput('CON1')
                .setCheck('condition')
                .appendField('when')
            this.appendValueInput('CON2')
                .setCheck('condition')
                .appendField(new Blockly.FieldDropdown([['and', 'AND'], ['or', 'OR']]), 'COND')
            this.setInputsInline(false)
            this.setOutput(true, 'condition')
            this.setColour(285)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_where = function (block) {
    }

    // crud query condition where
    Blockly.Blocks.api_crud_condition_where = {
        init: function () {
            this.appendValueInput('COL')
                .setCheck('String')
                .appendField('where')
            this.appendValueInput('VAL')
                .setCheck(['String', 'Array', 'Boolean', 'condition'])
                .appendField(new Blockly.FieldDropdown([
                    ['==', '=='],
                    ['>', '>'],
                    ['<', '<'],
                    ['>=', '>='],
                    ['<=', '<='],
                    ['!=', '!='],
                    ['in', 'IN'],
                    ['has', 'HAS'],
                    ['between', 'between'],
                    ['null', 'NULL'],
                    ['not null', 'NOT NULL'],
                    ['like', 'LIKE'],
                    ['and', 'AND'],
                    ['or', 'OR']
                ]), 'COND')
            this.setOutput(true, 'condition')
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_condition_where = function (block) {
    }
}

export const CategoryAPI =
`
<category id="catAPI" colour="290" name="API">
    <block type="web_request"></block>
    <block type="web_is_response_code"></block>
    <block type="web_is_response_ok"></block>
    <block type="web_get_auth_token"></block>
    <block type="web_get_data_from_response"></block>
    <block type="api_crud_create">
    </block>
    <block type="api_crud_update">
    </block>
    <block type="api_crud_delete">
    </block>
    <block type="api_crud_query">
    </block>
    <block type="api_crud_search">
    </block>
    <block type="api_crud_condition_where">
    </block>
</category>
`
