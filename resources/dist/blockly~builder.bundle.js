(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blockly~builder"],{

/***/ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/blocks/api.js":
/*!************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/Blockly/blocks/api.js ***!
  \************************************************************************/
/*! exports provided: default, CategoryAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAPI", function() { return CategoryAPI; });
/* harmony default export */ __webpack_exports__["default"] = (function (Blockly, crudList) {
  // make a web request
  Blockly.Blocks.web_request = {
    init: function init() {
      this.appendValueInput('url').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('Send request to url');
      this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField('with method').appendField(new Blockly.FieldDropdown([['Get', 'GET'], ['Post', 'POST'], ['Put', 'PUT'], ['Head', 'HEAD'], ['Delete', 'DELETE']]), 'method');
      this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField('and content type').appendField(new Blockly.FieldDropdown([['JSON', 'application/json'], ['Multipart form data', 'multipart/form-data;'], ['x-www Form', 'application/x-www-form-urlencoded'], ['Raw', 'text']]), 'content_type');
      this.appendValueInput('data').setCheck(['Array', 'String', 'Object', 'Boolean', 'Number']).setAlign(Blockly.ALIGN_RIGHT).appendField('and data');
      this.appendValueInput('headers').setCheck('Object').setAlign(Blockly.ALIGN_RIGHT).appendField('headers');
      this.appendStatementInput('onResponse').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on responsed').appendField(new Blockly.FieldVariable('response'), 'response').appendField('do');
      this.appendStatementInput('onError').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on error').appendField(new Blockly.FieldVariable('error'), 'error').appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip('Make a web request to a url and process the re');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.web_request = function (block) {
    var valueUrl = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdownMethod = block.getFieldValue('method');
    var dropdownContentType = block.getFieldValue('content_type');
    var valueData = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
    var valueHeaders = Blockly.JavaScript.valueToCode(block, 'headers', Blockly.JavaScript.ORDER_ATOMIC);
    var variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE);
    var variableError = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('error'), Blockly.Variables.NAME_TYPE);
    var innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse');
    var innerErrorCode = Blockly.JavaScript.statementToCode(block, 'onError');
    var headersCode = "let askedHeaders = { 'Content-Type': '".concat(dropdownContentType, "' }\n");

    if (valueHeaders !== '') {
      headersCode = "let askedHeaders = ".concat(valueHeaders, "\nif (!headers) { headers = {}}\nheaders['Content-Type'] = '").concat(dropdownContentType, "'\n");
    }

    var headers = "".concat(headersCode, "\nconst headers = this.getWebAuthHeaders(askedHeaders)\n");
    var code = "".concat(headers, "this.webRequest({\nurl: ").concat(valueUrl, ",\nmethod: '").concat(dropdownMethod, "',\nheaders,\ndata: ").concat(valueData, ",\n}).then((response) => {\n  this.blockly.").concat(variableResponse, " = response;\n ").concat(innerCode, "\n}).catch((error) => {\nthis.blockly.").concat(variableError, " = error; \n ").concat(innerErrorCode, "\n})\n");
    return code;
  }; // is response in variable code number


  Blockly.Blocks.web_is_response_code = {
    init: function init() {
      this.appendDummyInput().appendField('Is response in variable').appendField(new Blockly.FieldVariable('response'), 'var_name').appendField('status code');
      this.appendValueInput('code').setCheck('Number');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(290);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.web_is_response_code = function (block) {
    var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE);
    var valueCode = Blockly.JavaScript.valueToCode(block, 'code', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'this.blockly.' + variableName + '.status === ' + valueCode;
    return [code, Blockly.JavaScript.ORDER_NONE];
  }; // is response ok/error/validation error/...


  Blockly.Blocks.web_is_response_ok = {
    init: function init() {
      this.appendDummyInput().appendField('Is response ').appendField(new Blockly.FieldVariable('response'), 'var_name').appendField(new Blockly.FieldDropdown([['OK', 'ok'], ['Validation Error', 'validation'], ['Error', 'error'], ['App Error', 'app'], ['Server Error', 'sever'], ['Other Errors', 'other']]), 'type');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(290);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.web_is_response_ok = function (block) {
    var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE);
    var dropdownContentType = block.getFieldValue('type');
    var code = '';

    switch (dropdownContentType) {
      case 'ok':
        code += 'this.blockly.' + variableName + '.status === 200';
        break;

      case 'validation':
        code += "this.blockly.".concat(variableName, ".status === 400 || this.blockly.").concat(variableName, ".status === 422");
        break;

      case 'error':
        code += "this.blockly.".concat(variableName, ".status !== 200");
        break;

      case 'app':
        code += "this.blockly.".concat(variableName, ".status === 500");
        break;

      case 'other':
        code += "((this.blockly.".concat(variableName, ".status !== 503 || this.blockly.").concat(variableName, ".status !== 504) && ") + "(this.blockly.".concat(variableName, ".status !== 500) && ") + "(this.blockly.".concat(variableName, ".status !== 400) && ") + "(this.blockly.".concat(variableName, ".status === 200))");
        break;
    }

    return [code, Blockly.JavaScript.ORDER_NONE];
  }; // web get authentication token from response


  Blockly.Blocks.web_get_auth_token = {
    init: function init() {
      this.appendDummyInput().appendField('Get Auth token from response').appendField(new Blockly.FieldVariable('item'), 'var_name');
      this.setColour(290);
      this.setOutput(true, 'String');
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.web_get_auth_token = function (block) {
    var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE);
    return ["this.getNestedPathValue(this.blockly.".concat(variableName, ", 'data.tokens.api')\n"), Blockly.JavaScript.ORDER_ASSIGNMENT];
  }; // web get data response


  Blockly.Blocks.web_get_data_from_response = {
    init: function init() {
      this.appendDummyInput().appendField('Get data from response').appendField(new Blockly.FieldVariable('response'), 'var_name');
      this.setColour(290);
      this.setOutput(true, 'String');
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.web_get_data_from_response = function (block) {
    var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE);
    return ["this.getNestedPathValue(this.blockly.".concat(variableName, ", 'data')\n"), Blockly.JavaScript.ORDER_ASSIGNMENT];
  }; // web get data response


  Blockly.Blocks.web_get_data_from_response = {
    init: function init() {
      this.appendDummyInput().appendField('Get data from response').appendField(new Blockly.FieldVariable('response'), 'var_name');
      this.setColour(290);
      this.setOutput(true, 'String');
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.web_get_data_from_response = function (block) {
    var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE);
    return ["this.getNestedPathValue(this.blockly.".concat(variableName, ", 'data')\n"), Blockly.JavaScript.ORDER_ASSIGNMENT];
  }; // crud create


  Blockly.Blocks.api_crud_create = {
    init: function init() {
      this.appendValueInput('CRUD').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('Create CRUD resource');
      this.appendValueInput('DATA').setCheck(['Array', 'String', 'Object', 'Boolean', 'Number']).setAlign(Blockly.ALIGN_RIGHT).appendField('with data');
      this.appendStatementInput('onResponse').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on response').appendField(new Blockly.FieldVariable('response'), 'response').appendField('do');
      this.appendStatementInput('onError').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on error').appendField(new Blockly.FieldVariable('error'), 'error').appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.api_crud_create = function (block) {
    var valueCrud = Blockly.JavaScript.valueToCode(block, 'CRUD', Blockly.JavaScript.ORDER_ATOMIC);
    var valueData = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);
    var variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE);
    var variableError = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('error'), Blockly.Variables.NAME_TYPE);
    var innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse');
    var innerErrorCode = Blockly.JavaScript.statementToCode(block, 'onError');
    var method = 'POST';
    var headersCode = "let askedHeaders = { 'Content-Type': 'application/json' }\n";
    var headers = "".concat(headersCode, "const headers = this.getWebAuthHeaders(askedHeaders)\n");
    var code = "".concat(headers, "this.webRequest({\nurl: '/api/' + ").concat(valueCrud, ",\nmethod: '").concat(method, "',\nheaders,\ndata: ").concat(valueData, ",\n}).then((response) => {\n  this.blockly.").concat(variableResponse, " = response;\n ").concat(innerCode, "\n}).catch((error) => {\nthis.blockly.").concat(variableError, " = error; \n ").concat(innerErrorCode, "\n})\n");
    return code;
  }; // crud update


  Blockly.Blocks.api_crud_update = {
    init: function init() {
      this.appendValueInput('CRUD').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('Update CRUD resource');
      this.appendValueInput('ID').setCheck(['Number', 'String']).setAlign(Blockly.ALIGN_RIGHT).appendField('with ID');
      this.appendValueInput('DATA').setCheck(['Array', 'String', 'Object', 'Boolean', 'Number']).setAlign(Blockly.ALIGN_RIGHT).appendField('and data');
      this.appendStatementInput('onResponse').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on response').appendField(new Blockly.FieldVariable('response'), 'response').appendField('do');
      this.appendStatementInput('onError').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on error').appendField(new Blockly.FieldVariable('error'), 'error').appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.api_crud_update = function (block) {
    var valueCrud = Blockly.JavaScript.valueToCode(block, 'CRUD', Blockly.JavaScript.ORDER_ATOMIC);
    var valueData = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);
    var valueID = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
    var variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE);
    var variableError = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('error'), Blockly.Variables.NAME_TYPE);
    var innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse');
    var innerErrorCode = Blockly.JavaScript.statementToCode(block, 'onError');
    var method = 'PUT';
    var headersCode = "let askedHeaders = { 'Content-Type': 'application/json' }\n";
    var headers = "".concat(headersCode, "const headers = this.getWebAuthHeaders(askedHeaders)\n");
    var code = "".concat(headers, "this.webRequest({\nurl: '/api/' + ").concat(valueCrud, " + '/' + ").concat(valueID, ",\nmethod: '").concat(method, "',\nheaders,\ndata: ").concat(valueData, ",\n}).then((response) => {\n  this.blockly.").concat(variableResponse, " = response;\n ").concat(innerCode, "\n}).catch((error) => {\nthis.blockly.").concat(variableError, " = error; \n ").concat(innerErrorCode, "\n})\n");
    return code;
  }; // crud delete


  Blockly.Blocks.api_crud_delete = {
    init: function init() {
      this.appendValueInput('CRUD').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('Delete CRUD resource');
      this.appendValueInput('ID').setCheck(['Number', 'String']).setAlign(Blockly.ALIGN_RIGHT).appendField('with ID');
      this.appendStatementInput('onResponse').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on response').appendField(new Blockly.FieldVariable('response'), 'response').appendField('do');
      this.appendStatementInput('onError').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on error').appendField(new Blockly.FieldVariable('error'), 'error').appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.api_crud_delete = function (block) {
    var valueCrud = Blockly.JavaScript.valueToCode(block, 'CRUD', Blockly.JavaScript.ORDER_ATOMIC);
    var valueID = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
    var variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE);
    var variableError = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('error'), Blockly.Variables.NAME_TYPE);
    var innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse');
    var innerErrorCode = Blockly.JavaScript.statementToCode(block, 'onError');
    var method = 'DELETE';
    var headersCode = "let askedHeaders = { 'Content-Type': 'application/json' }\n";
    var headers = "".concat(headersCode, "const headers = this.getWebAuthHeaders(askedHeaders)\n");
    var code = "".concat(headers, "this.webRequest({\nurl: '/api/' + ").concat(valueCrud, " + '/' + ").concat(valueID, ",\nmethod: '").concat(method, "',\nheaders,\n}).then((response) => {\n  this.blockly.").concat(variableResponse, " = response;\n ").concat(innerCode, "\n}).catch((error) => {\nthis.blockly.").concat(variableError, " = error; \n ").concat(innerErrorCode, "\n})\n");
    return code;
  }; // crud query


  Blockly.Blocks.api_crud_query = {
    init: function init() {
      this.appendValueInput('CRUD').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('Query CRUD resource');
      this.appendValueInput('RELS').appendField('with relations').setAlign(Blockly.ALIGN_RIGHT).setCheck(['Array', 'Object', 'Number']);
      this.appendValueInput('PAGE').appendField('at page').setAlign(Blockly.ALIGN_RIGHT).setCheck('Number');
      this.appendValueInput('LIMIT').appendField('limit').setAlign(Blockly.ALIGN_RIGHT).setCheck('Number');
      this.appendValueInput('FILTER').appendField('filter').setAlign(Blockly.ALIGN_RIGHT).setCheck('condition');
      this.appendStatementInput('onResponse').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on response').appendField(new Blockly.FieldVariable('response'), 'response').appendField('do');
      this.appendStatementInput('onError').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on error').appendField(new Blockly.FieldVariable('error'), 'error').appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.api_crud_query = function (block) {
    var valueCrud = Blockly.JavaScript.valueToCode(block, 'CRUD', Blockly.JavaScript.ORDER_ATOMIC);
    var valueRels = Blockly.JavaScript.valueToCode(block, 'RELS', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    var valuePage = Blockly.JavaScript.valueToCode(block, 'PAGE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var valueLimit = Blockly.JavaScript.valueToCode(block, 'LIMIT', Blockly.JavaScript.ORDER_ATOMIC) || '10';
    var valueFilters = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    var variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE);
    var variableError = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('error'), Blockly.Variables.NAME_TYPE);
    var innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse');
    var innerErrorCode = Blockly.JavaScript.statementToCode(block, 'onError');
    var method = 'POST';
    var headersCode = "let askedHeaders = { 'Content-Type': 'application/json' }\n";
    var headers = "".concat(headersCode, "const headers = this.getWebAuthHeaders(askedHeaders)\n");
    var dataCode = "const reqData = { page: ".concat(valuePage, ", limit: ").concat(valueLimit, ", filter: ").concat(valueFilters, ", relations: ").concat(valueRels, " }\n");
    var code = "".concat(headers).concat(dataCode, "this.webRequest({\nurl: '/api/' + ").concat(valueCrud, " + '/query',\nmethod: '").concat(method, "',\nheaders,\ndata: reqData,\n}).then((response) => {\n  this.blockly.").concat(variableResponse, " = response;\n ").concat(innerCode, "\n}).catch((error) => {\nthis.blockly.").concat(variableError, " = error; \n ").concat(innerErrorCode, "\n})\n");
    return code;
  }; // crud search


  Blockly.Blocks.api_crud_search = {
    init: function init() {
      this.appendDummyInput().appendField('Search CRUD').appendField(new Blockly.FieldDropdown(crudList), 'crud');
      this.appendValueInput('relations').setCheck('Array').setAlign(Blockly.ALIGN_RIGHT).appendField('with relations');
      this.appendValueInput('search').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('search for');
      this.appendValueInput('page').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField('at page');
      this.appendValueInput('NAME').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField('limit');
      this.appendValueInput('filter').appendField('filter').setAlign(Blockly.ALIGN_RIGHT).setCheck('condition');
      this.appendStatementInput('then').setCheck(null).appendField('on response').appendField(new Blockly.FieldVariable('item'), 'varName').appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.api_crud_search = function (block) {}; // crud query conditions


  Blockly.Blocks.api_crud_where = {
    init: function init() {
      this.appendValueInput('CON1').setCheck('condition').appendField('when');
      this.appendValueInput('CON2').setCheck('condition').appendField(new Blockly.FieldDropdown([['and', 'AND'], ['or', 'OR']]), 'COND');
      this.setInputsInline(false);
      this.setOutput(true, 'condition');
      this.setColour(285);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.api_crud_where = function (block) {}; // crud query condition where


  Blockly.Blocks.api_crud_condition_where = {
    init: function init() {
      this.appendValueInput('COL').setCheck('String').appendField('where');
      this.appendValueInput('VAL').setCheck(['String', 'Array', 'Boolean', 'condition']).appendField(new Blockly.FieldDropdown([['==', '=='], ['>', '>'], ['<', '<'], ['>=', '>='], ['<=', '<='], ['!=', '!='], ['in', 'IN'], ['has', 'HAS'], ['between', 'between'], ['null', 'NULL'], ['not null', 'NOT NULL'], ['like', 'LIKE'], ['and', 'AND'], ['or', 'OR']]), 'COND');
      this.setOutput(true, 'condition');
      this.setColour(290);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.api_crud_condition_where = function (block) {};
});
var CategoryAPI = "\n<category id=\"catAPI\" colour=\"290\" name=\"API\">\n    <block type=\"web_request\"></block>\n    <block type=\"web_is_response_code\"></block>\n    <block type=\"web_is_response_ok\"></block>\n    <block type=\"web_get_auth_token\"></block>\n    <block type=\"web_get_data_from_response\"></block>\n    <block type=\"api_crud_create\">\n    </block>\n    <block type=\"api_crud_update\">\n    </block>\n    <block type=\"api_crud_delete\">\n    </block>\n    <block type=\"api_crud_query\">\n    </block>\n    <block type=\"api_crud_search\">\n    </block>\n    <block type=\"api_crud_condition_where\">\n    </block>\n</category>\n";

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/blocks/app.js":
/*!************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/Blockly/blocks/app.js ***!
  \************************************************************************/
/*! exports provided: default, CategoryApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryApp", function() { return CategoryApp; });
/* harmony default export */ __webpack_exports__["default"] = (function (Blockly) {
  // get app state at a path
  Blockly.Blocks.app_register_channel = {
    init: function init() {
      this.appendValueInput('EVENT').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('Listen for event ');
      this.appendValueInput('CHANNEL').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('on channel');
      this.appendStatementInput('onEvent').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on trigger').appendField(new Blockly.FieldVariable('event'), 'event').appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_register_channel = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'EVENT', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var innerCode = Blockly.JavaScript.statementToCode(block, 'onEvent');
    var variableEvent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('event'), Blockly.Variables.NAME_TYPE);
    return "this.registerChannelListener(".concat(argument1, ", ").concat(argument0, ", (e) => { this.blockly.").concat(variableEvent, " = e; ").concat(innerCode, "\n})\n");
  }; // get app state at a path


  Blockly.Blocks.app_new_filtered_from_state = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('Duplicate object');
      this.appendStatementInput('onEach').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('on each').appendField(new Blockly.FieldVariable('key'), 'key').appendField(new Blockly.FieldVariable('value'), 'value').appendField('include if').appendField(new Blockly.FieldVariable('include'), 'include');
      this.setOutput(true, 'String');
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_new_filtered_from_state = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var innerCode = Blockly.JavaScript.statementToCode(block, 'onEach');
    var vKey = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('key'), Blockly.Variables.NAME_TYPE);
    var vValue = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('value'), Blockly.Variables.NAME_TYPE);
    var vInclude = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('include'), Blockly.Variables.NAME_TYPE);
    return ["this.duplicateObjectAndFilter(".concat(argument0, ", (k, v) => {\nthis.blockly.").concat(vKey, " = k; this.blockly.").concat(vValue, " = v; ").concat(innerCode, "\n return this.blockly.").concat(vInclude, "\n})"), Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }; // get app state at a path


  Blockly.Blocks.app_get_from_state = {
    init: function init() {
      this.appendValueInput('path').setCheck('String').appendField('Get state value at path');
      this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean']);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_get_from_state = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return ['this.getStateFromNestedPath(' + argument0 + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }; // change app state at a path


  Blockly.Blocks.app_change_state = {
    init: function init() {
      this.appendValueInput('path').setCheck('String').appendField('Set state value at path');
      this.appendValueInput('value').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('to');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_change_state = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.setStateForNestedPath(".concat(argument0, ", ").concat(argument1, ")\n");
  }; // commit mutation with data


  Blockly.Blocks.app_commit_mutation = {
    init: function init() {
      this.appendValueInput('mutation').setCheck('String').appendField('Commit to state with mutation');
      this.appendValueInput('data').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('and data');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_commit_mutation = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'mutation', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.$store.commit(".concat(argument0, ", ").concat(argument1, ")\n");
  }; // go to app page


  Blockly.Blocks.app_go_to_page = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').appendField('Go to page');
      this.appendValueInput('PROPS').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('with props');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_go_to_page = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '{}';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'PROPS', Blockly.JavaScript.ORDER_ASSIGNMENT) || '{}';
    return "this.gotoPage(".concat(argument0, ", ").concat(argument1, ")\n");
  }; // app_get_route_at


  Blockly.Blocks.app_get_route_path_parts = {
    init: function init() {
      this.appendValueInput('INX').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField('Get Route path part at index');
      this.setOutput(true, 'String');
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_get_route_path_parts = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'INX', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    return ["this.getRoutePathPartAt(".concat(argument0, ")\n"), Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }; // load app schema


  Blockly.Blocks.app_load_schema = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').appendField('Load schema');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_load_schema = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '{}';
    return "this.loadSchema(".concat(argument0, ")\n");
  }; // show an alert dialog with message and title


  Blockly.Blocks.app_show_alert = {
    init: function init() {
      this.appendValueInput('title').setCheck('String').appendField('Show alert with title');
      this.appendValueInput('message').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('and message');
      this.appendDummyInput().appendField('mode').appendField(new Blockly.FieldDropdown([['primary', 'Primary'], ['secondary', 'Secondary'], ['success', 'Success'], ['warning', 'Warning'], ['danger', 'Danger'], ['info', 'Info'], ['critical', 'Critical'], ['debug', 'Debug']]), 'mode');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_show_alert = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  }; // get root form value


  Blockly.Blocks.app_form_values = {
    init: function init() {
      this.appendDummyInput().appendField('get form values');
      this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean']);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_form_values = function (block) {
    return ['this.DeCompileEvents(this[this.getFormValuePropName()])', Blockly.JavaScript.ORDER_ASSIGNMENT];
  }; // set root form validations


  Blockly.Blocks.app_form_validations = {
    init: function init() {
      this.appendValueInput('VALS').appendField('Set form validations').setCheck(['Array', 'Object']);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_form_validations = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALS', Blockly.JavaScript.ORDER_ASSIGNMENT) || '[]';
    return "this.setFormValidations(".concat(argument0, ")\n");
  }; // reset root form validations


  Blockly.Blocks.app_form_remove_validations = {
    init: function init() {
      this.appendDummyInput().appendField('Reset form validations');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_form_remove_validations = function (block) {
    return "this.resetFormValidations()\n";
  }; // get api response alert props


  Blockly.Blocks.app_form_response_alert = {
    init: function init() {
      this.appendDummyInput().appendField('get response ').appendField(new Blockly.FieldVariable('item'), 'var_name').appendField('alert');
      this.setOutput(true, 'Object');
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_form_response_alert = function (block) {
    var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE);
    return ["this.getAlertForResponse(this.blockly.".concat(variableName, ")"), Blockly.JavaScript.ORDER_ASSIGNMENT];
  }; // get form value at path


  Blockly.Blocks.app_form_value_at_path = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').appendField('get form values at path');
      this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean']);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_form_value_at_path = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return ["this.getNestedPathValue(this[this.getFormValuePropName()], ".concat(argument0, ")"), Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }; // get form schema at path


  Blockly.Blocks.app_form_schema_at_path = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').appendField('get form schema at path');
      this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean']);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_form_schema_at_path = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return ["this.getNestedPathValue(this[[this.getFormSchemaPropName()]], ".concat(argument0, ")"), Blockly.JavaScript.ORDER_ASSIGNMENT];
  }; // set form schema at path


  Blockly.Blocks.app_set_form_schema_at_path = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').appendField('set form schema at path');
      this.appendValueInput('VAL').setCheck(['Array', 'String', 'Object', 'Number', 'Boolean']).appendField('to value');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_set_form_schema_at_path = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.setNestedPathValue(this[this.getFormSchemaPropName()], ".concat(argument0, ", ").concat(argument1, ")\n");
  }; // make template for schema at path


  Blockly.Blocks.app_make_template_form_schema_at_path = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').appendField('make template for schema at path');
      this.appendValueInput('OBJ').setCheck(['Object']).appendField('from template object');
      this.appendValueInput('ITEMS').setCheck(['String']).appendField('with items at component state path');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_make_template_form_schema_at_path = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '{}';
    var argument2 = Blockly.JavaScript.valueToCode(block, 'ITEMS', Blockly.JavaScript.ORDER_ASSIGNMENT) || '[]';
    return "this.makeTemplate(".concat(argument0, ", ").concat(argument1, ", ").concat(argument2, ")\n");
  }; // clear template for schema at path


  Blockly.Blocks.app_clear_template_form_schema_at_path = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').appendField('clear template for schema at path');
      this.appendValueInput('IDS').setCheck('String').appendField('and keep ids (, separated list)');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_clear_template_form_schema_at_path = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'IDS', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.clearTemplate(".concat(argument0, ", ").concat(argument1, ")\n");
  }; // append to form schema at path


  Blockly.Blocks.app_append_form_schema_at_path = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').appendField('merge to form schema at path');
      this.appendValueInput('VAL').setCheck(['Array', 'String', 'Object', 'Number', 'Boolean']).appendField('with value');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_append_form_schema_at_path = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.appendNestedPathValue(this[this.getFormSchemaPropName()], ".concat(argument0, ", ").concat(argument1, ")\n");
  }; // append to form blockly code


  Blockly.Blocks.app_append_form_blockly_code = {
    init: function init() {
      this.appendValueInput('XML').setCheck('String').appendField('merge to form functions');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_append_form_blockly_code = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'XML', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.appendFormFunctions(".concat(argument0, ")\n");
  }; // append to form options


  Blockly.Blocks.app_append_form_options = {
    init: function init() {
      this.appendValueInput('XML').setCheck('String').appendField('merge to form options');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_append_form_options = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'XML', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.appendFormOptions(".concat(argument0, ")\n");
  }; // append to form sources


  Blockly.Blocks.app_append_form_sources = {
    init: function init() {
      this.appendValueInput('XML').setCheck('String').appendField('merge to form sources');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_append_form_sources = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'XML', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.appendFormSources(".concat(argument0, ")\n");
  }; // reset form schema


  Blockly.Blocks.app_reset_form_schema = {
    init: function init() {
      this.appendValueInput('XML').setCheck('String').appendField('reset form schema');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_reset_form_schema = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'XML', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.resetFormSchema(".concat(argument0, ")\n");
  }; // set form value at path


  Blockly.Blocks.app_set_form_value_at_path = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').appendField('set form value at path');
      this.appendValueInput('VAL').setCheck(['Array', 'String', 'Object', 'Number', 'Boolean']).appendField('to value');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_set_form_value_at_path = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.setNestedPathValue(this[this.getFormValuePropName()], ".concat(argument0, ", ").concat(argument1, ")\n");
  }; // append to form value at path


  Blockly.Blocks.app_append_form_value_at_path = {
    init: function init() {
      this.appendValueInput('PATH').setCheck('String').appendField('merge with form value at path');
      this.appendValueInput('VAL').setCheck(['Array', 'String', 'Object', 'Number', 'Boolean']).appendField('with value');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_append_form_value_at_path = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.appendNestedPathValue(this[this.getFormValuePropName()], ".concat(argument0, ", ").concat(argument1, ")\n");
  }; // app set auth token and user


  Blockly.Blocks.app_auth_user = {
    init: function init() {
      this.appendValueInput('USER').setCheck('Object').appendField('Set user');
      this.appendValueInput('AUTH').setCheck('String').appendField('authenticated with token');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_auth_user = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'AUTH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.authenticateUserWithToken(".concat(argument0, ", ").concat(argument1, ")\n");
  }; // app console log


  Blockly.Blocks.app_console_log = {
    init: function init() {
      this.appendValueInput('LOG').setCheck(['Array', 'String', 'Object', 'Number', 'Boolean']).appendField('console log');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(110);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.app_console_log = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'LOG', Blockly.JavaScript.ORDER_ASSIGNMENT) || 'this';
    return "console.log(".concat(argument0, ")\n");
  };
});
var CategoryApp = "\n<category id=\"catApp\" colour=\"110\" name=\"App\">\n    <block type=\"app_register_channel\"></block>\n    <block type=\"app_new_filtered_from_state\"></block>\n    <block type=\"app_get_route_path_parts\"></block>\n    <block type=\"app_append_form_blockly_code\"></block>\n    <block type=\"app_append_form_options\"></block>\n    <block type=\"app_append_form_sources\"></block>\n    <block type=\"app_reset_form_schema\"></block>\n    <block type=\"app_get_from_state\"></block>\n    <block type=\"app_form_value_at_path\"></block>\n    <block type=\"app_form_response_alert\"></block>\n    <block type=\"app_form_values\"></block>\n    <block type=\"app_form_schema_at_path\"></block>\n    <block type=\"app_append_form_schema_at_path\"></block>\n    <block type=\"app_form_validations\"></block>\n    <block type=\"app_form_remove_validations\"></block>\n    <block type=\"app_set_form_schema_at_path\"></block>\n    <block type=\"app_set_form_value_at_path\"></block>\n    <block type=\"app_append_form_value_at_path\"></block>\n    <block type=\"app_make_template_form_schema_at_path\"></block>\n    <block type=\"app_clear_template_form_schema_at_path\"></block>\n    <block type=\"app_change_state\"></block>\n    <block type=\"app_commit_mutation\"></block>\n    <block type=\"app_go_to_page\"></block>\n    <block type=\"app_load_schema\"></block>\n    <block type=\"app_auth_user\"></block>\n    <block type=\"app_show_alert\"></block>\n    <block type=\"app_console_log\"></block>\n</category>\n";

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/blocks/object.js":
/*!***************************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/Blockly/blocks/object.js ***!
  \***************************************************************************/
/*! exports provided: default, CategoryObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryObject", function() { return CategoryObject; });
/* harmony default export */ __webpack_exports__["default"] = (function (Blockly) {
  // json stringify
  Blockly.Blocks.obj_json_stringify = {
    init: function init() {
      this.appendValueInput('OBJ').setCheck(['Array', 'String', 'Object', 'Number', 'Boolean']).appendField('stringify');
      this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField('pretty').appendField(new Blockly.FieldCheckbox('FALSE'), 'PRETTY');
      this.setOutput(true, 'String');
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_json_stringify = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var pretty = block.getFieldValue('PRETTY');
    console.log(pretty);
    return ["JSON.stringify(".concat(argument0, " ").concat(pretty === 'TRUE' ? ', null, 4' : '', ")\n"), Blockly.JavaScript.ORDER_ASSIGNMENT];
  }; // json parse


  Blockly.Blocks.obj_json_parse = {
    init: function init() {
      this.appendValueInput('jsonStr').setCheck('String').appendField('parse');
      this.setOutput(true, ['Object', 'Array', 'String']);
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_json_parse = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'jsonStr', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return ["JSON.parse(".concat(argument0, ")\n"), Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }; // get nested


  Blockly.Blocks.obj_get_nested = {
    init: function init() {
      this.appendValueInput('OBJ').setCheck('Object').appendField('Get nested value in object');
      this.appendValueInput('PATH').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('at path');
      this.setOutput(true, ['Object', 'String', 'Number', 'Array', 'Boolean']);
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_get_nested = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return ["this.getNestedPathValue(".concat(argument0, ", ").concat(argument1, ")\n"), Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }; // object assign


  Blockly.Blocks.obj_assign = {
    init: function init() {
      this.appendValueInput('OBJ').setCheck('Object').appendField('Assign to object');
      this.appendValueInput('VAL').setCheck('Object').setAlign(Blockly.ALIGN_RIGHT).appendField('with value');
      this.setOutput(true, ['Object', 'String', 'Number', 'Array', 'Boolean']);
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_assign = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return ["Object.assign(".concat(argument0, ", ").concat(argument2, ")\n"), Blockly.JavaScript.ORDER_ASSIGNMENT];
  }; // array push


  Blockly.Blocks.arr_push = {
    init: function init() {
      this.appendValueInput('OBJ').setCheck('Array').appendField(new Blockly.FieldDropdown([['unshift', 'unshift'], ['push', 'push']]), 'MODE').appendField('(to) array');
      this.appendValueInput('VAL').setCheck('Array').setAlign(Blockly.ALIGN_RIGHT).appendField('with values');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.arr_push = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var dropdownMode = block.getFieldValue('MODE');
    return "this.blockly.__tempArr = ".concat(argument2, "; if (Array.isArray(this.blockly.__tempArr)) { this.blockly.__tempArr.forEach((item) => { ").concat(argument0, ".").concat(dropdownMode, "(item) }) }\n");
  }; // array merge/replace


  Blockly.Blocks.arr_merge = {
    init: function init() {
      this.appendValueInput('OBJ').setCheck('Array').appendField(new Blockly.FieldDropdown([['merge', 'merge'], ['replace', 'replace']]), 'MODE').appendField('in array');
      this.appendValueInput('VAL').setCheck('Array').setAlign(Blockly.ALIGN_RIGHT).appendField('with values');
      this.appendValueInput('KEY').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('key propery(id)');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.arr_merge = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument3 = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ASSIGNMENT) || '`id`';
    var dropdownMode = block.getFieldValue('MODE');
    return "this.arrayMergeWithObjects(".concat(argument0, ", ").concat(argument2, ", ").concat(argument3, ", '").concat(dropdownMode, "')\n");
  }; // append nested


  Blockly.Blocks.obj_assign = {
    init: function init() {
      this.appendValueInput('OBJ').setCheck(null).appendField('Assign to object');
      this.appendValueInput('VAL').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('with value');
      this.setOutput(true, ['Object', 'String', 'Number', 'Array', 'Boolean']);
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_assign = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return ["Object.assign(".concat(argument0, ", ").concat(argument2, ")\n"), Blockly.JavaScript.ORDER_ASSIGNMENT];
  }; // set nested


  Blockly.Blocks.obj_set_nested = {
    init: function init() {
      this.appendValueInput('OBJ').setCheck('Object').appendField('Set nested value in object');
      this.appendValueInput('PATH').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('at path');
      this.appendValueInput('VAL').setCheck(['Object', 'Array', 'Boolean', 'Number', 'String']).setAlign(Blockly.ALIGN_RIGHT).appendField('to Value');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_set_nested = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.setNestedPathValue(".concat(argument0, ", ").concat(argument1, ", ").concat(argument2, ")\n");
  }; // create empty object


  Blockly.Blocks.obj_create_new = {
    init: function init() {
      this.appendDummyInput().appendField('Create new object');
      this.setOutput(true, 'String');
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_create_new = function (block) {
    return ["{}", Blockly.JavaScript.ORDER_NEW];
  }; // set key value


  Blockly.Blocks.obj_set_key_value = {
    init: function init() {
      this.appendValueInput('KEY').setCheck('String').appendField('Set key ');
      this.appendValueInput('OBJ').setCheck('Object').setAlign(Blockly.ALIGN_RIGHT).appendField('for object');
      this.appendValueInput('VAL').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('to value');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_set_key_value = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "".concat(argument1, "[").concat(argument0, "] = ").concat(argument2, "\n");
  }; // append nested


  Blockly.Blocks.obj_append_nested = {
    init: function init() {
      this.appendValueInput('OBJ').setCheck(null).appendField('Append to nested value in object');
      this.appendValueInput('PATH').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('at path');
      this.appendValueInput('VAL').setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField('to Value');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_append_nested = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.appendNestedPathValue(".concat(argument0, ", ").concat(argument1, ", ").concat(argument2, ")\n");
  }; // is set nested


  Blockly.Blocks.obj_is_set_nested = {
    init: function init() {
      this.appendValueInput('OBJ').setCheck(null).appendField('Is set nested value in object');
      this.appendValueInput('PATH').setCheck('String').setAlign(Blockly.ALIGN_RIGHT).appendField('at path');
      this.setOutput(true, null);
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_is_set_nested = function (block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    return "this.isSetNested(".concat(argument0, ", ").concat(argument1, "\n");
  }; // foreach nested


  Blockly.Blocks.obj_foreach_nested = {
    init: function init() {
      this.appendValueInput('OBJ').setCheck(null).appendField('for each key').appendField(new Blockly.FieldVariable('key'), 'KEY').appendField(',').appendField(new Blockly.FieldVariable('value'), 'VAL').appendField(',').appendField(new Blockly.FieldVariable('index'), 'IDX').appendField('in');
      this.appendStatementInput('DO').setCheck(null).appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(105);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.JavaScript.obj_foreach_nested = function (block) {
    var varKey = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('KEY'), Blockly.Variables.NAME_TYPE);
    var varVal = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
    var varIdx = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('IDX'), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || '';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    branch = Blockly.JavaScript.addLoopTrap(branch, block);
    return "let indexer = 0;\nlet target = ".concat(argument0, ";\nfor (const prop in target) {\n  this.blockly.").concat(varKey, " = prop;\n  this.blockly.").concat(varVal, " = target[prop];\n  this.blockly.").concat(varIdx, " = indexer;\n").concat(branch, ";\n  indexer++;\n}\n");
  };
});
var CategoryObject = "\n<category id=\"catObj\" colour=\"105\" name=\"Object\">\n    <block type=\"obj_create_new\"></block>\n    <block type=\"obj_set_key_value\"></block>\n    <block type=\"obj_get_nested\"></block>\n    <block type=\"obj_set_nested\"></block>\n    <block type=\"obj_assign\"></block>\n    <block type=\"obj_is_set_nested\"></block>\n    <block type=\"obj_json_stringify\"></block>\n    <block type=\"obj_json_parse\"></block>\n    <block type=\"obj_foreach_nested\"></block>\n    <block type=\"obj_append_nested\"></block>\n</category>\n";

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/toolbox.js":
/*!*********************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/Blockly/toolbox.js ***!
  \*********************************************************************/
/*! exports provided: default, CategoryLogic, CategoryLoops, CategoryMath, CategoryText, CategoryLists, CategoryColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterBlocksAndGetToolbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryLogic", function() { return CategoryLogic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryLoops", function() { return CategoryLoops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMath", function() { return CategoryMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryText", function() { return CategoryText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryLists", function() { return CategoryLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryColor", function() { return CategoryColor; });
/* harmony import */ var _blocks_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/api */ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/blocks/api.js");
/* harmony import */ var _blocks_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/app */ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/blocks/app.js");
/* harmony import */ var _blocks_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/object */ "./resources/js/Lib/vuetify-formjson/Fields/Blockly/blocks/object.js");



function RegisterBlocksAndGetToolbox(Blockly, options) {
  var categoriesList = [];
  var blocks = {
    api: function api() {
      Object(_blocks_api__WEBPACK_IMPORTED_MODULE_0__["default"])(Blockly, options && options.crud && options.crud.resources ? options.crud.resources : [['users', 'Users'], ['domains', 'Domains']]);
      categoriesList.push(_blocks_api__WEBPACK_IMPORTED_MODULE_0__["CategoryAPI"]);
    },
    app: function app() {
      Object(_blocks_app__WEBPACK_IMPORTED_MODULE_1__["default"])(Blockly);
      categoriesList.push(_blocks_app__WEBPACK_IMPORTED_MODULE_1__["CategoryApp"]);
    },
    text: function text() {
      categoriesList.push(CategoryText);
    },
    object: function object() {
      Object(_blocks_object__WEBPACK_IMPORTED_MODULE_2__["default"])(Blockly);
      categoriesList.push(_blocks_object__WEBPACK_IMPORTED_MODULE_2__["CategoryObject"]);
    },
    lists: function lists() {
      categoriesList.push(CategoryLists);
    },
    math: function math() {
      categoriesList.push(CategoryMath);
    },
    color: function color() {
      categoriesList.push(CategoryColor);
    },
    sep: function sep() {
      categoriesList.push('<sep></sep>');
    },
    logic: function logic() {
      categoriesList.push(CategoryLogic);
    },
    loops: function loops() {
      categoriesList.push(CategoryLoops);
    }
  };

  if (options.blocks && Array.isArray(options.blocks)) {
    options.blocks.forEach(function (b) {
      if (blocks[b]) {
        blocks[b]();
      }
    });
  }

  for (var prop in blocks) {
    if (blocks[prop]) {
      blocks[prop]();
    }
  }

  Blockly.JavaScript['controls_for'] = function (block) {
    // For loop.
    var variable0 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
    var argument0 = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    var increment = Blockly.JavaScript.valueToCode(block, 'BY', Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    branch = Blockly.JavaScript.addLoopTrap(branch, block);
    var code;

    if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) && Blockly.isNumber(increment)) {
      // All arguments are simple numbers.
      var up = Number(argument0) <= Number(argument1);
      code = 'for (this.blockly.' + variable0 + ' = ' + argument0 + '; this.blockly.' + variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' + variable0;
      var step = Math.abs(Number(increment));

      if (step == 1) {
        code += up ? '++' : '--';
      } else {
        code += (up ? ' += ' : ' -= ') + step;
      }

      code += ') {\n' + branch + '}\n';
    } else {
      code = ''; // Cache non-trivial values to variables to prevent repeated look-ups.

      var startVar = argument0;

      if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
        startVar = Blockly.JavaScript.variableDB_.getDistinctName(variable0 + '_start', Blockly.VARIABLE_CATEGORY_NAME);
        code += 'var ' + startVar + ' = ' + argument0 + ';\n';
      }

      var endVar = argument1;

      if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
        endVar = Blockly.JavaScript.variableDB_.getDistinctName(variable0 + '_end', Blockly.VARIABLE_CATEGORY_NAME);
        code += 'var ' + endVar + ' = ' + argument1 + ';\n';
      } // Determine loop direction at start, in case one of the bounds
      // changes during loop execution.


      var incVar = Blockly.JavaScript.variableDB_.getDistinctName(variable0 + '_inc', Blockly.VARIABLE_CATEGORY_NAME);
      code += 'var ' + incVar + ' = ';

      if (Blockly.isNumber(increment)) {
        code += Math.abs(increment) + ';\n';
      } else {
        code += 'Math.abs(' + increment + ');\n';
      }

      code += 'if (' + startVar + ' > ' + endVar + ') {\n';
      code += Blockly.JavaScript.INDENT + incVar + ' = -' + incVar + ';\n';
      code += '}\n';
      code += 'for (this.blockly.' + variable0 + ' = ' + startVar + '; ' + incVar + ' >= 0 ? ' + 'this.blockly.' + variable0 + ' <= ' + endVar + ' : ' + 'this.blockly.' + variable0 + ' >= ' + endVar + '; ' + 'this.blockly.' + variable0 + ' += ' + incVar + ') {\n' + branch + '}\n';
    }

    return code;
  };

  var toolbox = "\n    <xml xmlns=\"https://developers.google.com/blockly/xml\" id=\"toolbox\" style=\"display: none\">\n    ".concat(categoriesList.join('\n'), "\n    <sep></sep>\n    <category name=\"Functions\" colour=\"#995ba5\" custom=\"PROCEDURE\"></category>\n    <category name=\"Variables\" colour=\"#a55b80\" custom=\"VARIABLE\"></category>\n    </xml>");
  return toolbox;
}
var CategoryLogic = "\n<category id=\"catLogic\" colour=\"210\" name=\"Logic\">\n    <block type=\"controls_if\"></block>\n    <block type=\"logic_compare\"></block>\n    <block type=\"logic_operation\"></block>\n    <block type=\"logic_negate\"></block>\n    <block type=\"logic_boolean\"></block>\n    <block type=\"logic_null\"></block>\n    <block type=\"logic_ternary\"></block>\n</category>\n";
var CategoryLoops = "\n<category id=\"catLoops\" colour=\"120\" name=\"Loops\">\n    <block type=\"controls_repeat_ext\">\n    <value name=\"TIMES\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">10</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"controls_whileUntil\"></block>\n    <block type=\"controls_for\">\n    <value name=\"FROM\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">1</field>\n        </shadow>\n    </value>\n    <value name=\"TO\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">10</field>\n        </shadow>\n    </value>\n    <value name=\"BY\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">1</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"controls_forEach\"></block>\n    <block type=\"controls_flow_statements\"></block>\n</category>\n";
var CategoryMath = "\n<category id=\"catMath\" colour=\"230\" name=\"Math\">\n    <block type=\"math_number\"></block>\n    <block type=\"math_arithmetic\">\n    <value name=\"A\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">1</field>\n        </shadow>\n    </value>\n    <value name=\"B\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">1</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"math_single\">\n    <value name=\"NUM\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">9</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"math_trig\">\n    <value name=\"NUM\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">45</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"math_constant\"></block>\n    <block type=\"math_number_property\">\n    <value name=\"NUMBER_TO_CHECK\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"math_change\">\n    <value name=\"DELTA\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">1</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"math_round\">\n    <value name=\"NUM\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">3.1</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"math_on_list\"></block>\n    <block type=\"math_modulo\">\n    <value name=\"DIVIDEND\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">64</field>\n        </shadow>\n    </value>\n    <value name=\"DIVISOR\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">10</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"math_constrain\">\n    <value name=\"VALUE\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">50</field>\n        </shadow>\n    </value>\n    <value name=\"LOW\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">1</field>\n        </shadow>\n    </value>\n    <value name=\"HIGH\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">100</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"math_random_int\">\n    <value name=\"FROM\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">1</field>\n        </shadow>\n    </value>\n    <value name=\"TO\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">100</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"math_random_float\"></block>\n</category>\n";
var CategoryText = "\n<category id=\"catText\" colour=\"160\" name=\"Text\">\n    <block type=\"text\"></block>\n    <block type=\"text_join\"></block>\n    <block type=\"text_append\">\n    <value name=\"TEXT\">\n        <shadow type=\"text\"></shadow>\n    </value>\n    </block>\n    <block type=\"text_length\">\n    <value name=\"VALUE\">\n        <shadow type=\"text\">\n        <field name=\"TEXT\">abc</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"text_isEmpty\">\n    <value name=\"VALUE\">\n        <shadow type=\"text\">\n        <field name=\"TEXT\"></field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"text_indexOf\">\n    <value name=\"VALUE\">\n        <block type=\"variables_get\">\n        <field name=\"VAR\">text</field>\n        </block>\n    </value>\n    <value name=\"FIND\">\n        <shadow type=\"text\">\n        <field name=\"TEXT\">abc</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"text_charAt\">\n    <value name=\"VALUE\">\n        <block type=\"variables_get\">\n        <field name=\"VAR\">text</field>\n        </block>\n    </value>\n    </block>\n    <block type=\"text_getSubstring\">\n    <value name=\"STRING\">\n        <block type=\"variables_get\">\n        <field name=\"VAR\">text</field>\n        </block>\n    </value>\n    </block>\n    <block type=\"text_changeCase\">\n    <value name=\"TEXT\">\n        <shadow type=\"text\">\n        <field name=\"TEXT\">abc</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"text_trim\">\n    <value name=\"TEXT\">\n        <shadow type=\"text\">\n        <field name=\"TEXT\">abc</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"text_print\">\n    <value name=\"TEXT\">\n        <shadow type=\"text\">\n        <field name=\"TEXT\">abc</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"text_prompt_ext\">\n    <value name=\"TEXT\">\n        <shadow type=\"text\">\n        <field name=\"TEXT\">abc</field>\n        </shadow>\n    </value>\n    </block>\n</category>\n";
var CategoryLists = "\n<category id=\"catLists\" colour=\"260\" name=\"Lists\">\n    <block type=\"lists_create_with\">\n    <mutation items=\"0\"></mutation>\n    </block>\n    <block type=\"lists_create_with\"></block>\n    <block type=\"arr_push\"></block>\n    <block type=\"arr_merge\"></block>\n    <block type=\"lists_repeat\">\n    <value name=\"NUM\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">5</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"lists_length\"></block>\n    <block type=\"lists_isEmpty\"></block>\n    <block type=\"lists_indexOf\">\n    <value name=\"VALUE\">\n        <block type=\"variables_get\">\n        <field name=\"VAR\">list</field>\n        </block>\n    </value>\n    </block>\n    <block type=\"lists_getIndex\">\n    <value name=\"VALUE\">\n        <block type=\"variables_get\">\n        <field name=\"VAR\">list</field>\n        </block>\n    </value>\n    </block>\n    <block type=\"lists_setIndex\">\n    <value name=\"LIST\">\n        <block type=\"variables_get\">\n        <field name=\"VAR\">list</field>\n        </block>\n    </value>\n    </block>\n    <block type=\"lists_getSublist\">\n    <value name=\"LIST\">\n        <block type=\"variables_get\">\n        <field name=\"VAR\">list</field>\n        </block>\n    </value>\n    </block>\n    <block type=\"lists_split\">\n    <value name=\"DELIM\">\n        <shadow type=\"text\">\n        <field name=\"TEXT\">,</field>\n        </shadow>\n    </value>\n    </block>\n</category>\n";
var CategoryColor = "\n<category id=\"catColour\" colour=\"20\" name=\"Colour\">\n    <block type=\"colour_picker\"></block>\n    <block type=\"colour_random\"></block>\n    <block type=\"colour_rgb\">\n    <value name=\"RED\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">100</field>\n        </shadow>\n    </value>\n    <value name=\"GREEN\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">50</field>\n        </shadow>\n    </value>\n    <value name=\"BLUE\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n        </shadow>\n    </value>\n    </block>\n    <block type=\"colour_blend\">\n    <value name=\"COLOUR1\">\n        <shadow type=\"colour_picker\">\n        <field name=\"COLOUR\">#ff0000</field>\n        </shadow>\n    </value>\n    <value name=\"COLOUR2\">\n        <shadow type=\"colour_picker\">\n        <field name=\"COLOUR\">#3333ff</field>\n        </shadow>\n    </value>\n    <value name=\"RATIO\">\n        <shadow type=\"math_number\">\n        <field name=\"NUM\">0.5</field>\n        </shadow>\n    </value>\n    </block>\n</category>\n";

/***/ }),

/***/ "./resources/js/Lib/vuetify-formjson/Fields/mixins.js":
/*!************************************************************!*\
  !*** ./resources/js/Lib/vuetify-formjson/Fields/mixins.js ***!
  \************************************************************/
/*! exports provided: default, DecoratableComponent, EasyNestedObject, JSONWorkspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratableComponent", function() { return DecoratableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyNestedObject", function() { return EasyNestedObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONWorkspace", function() { return JSONWorkspace; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      devalue: this.value
    };
  },
  computed: {
    fieldProps: function fieldProps() {
      return _objectSpread({}, this.field.props);
    },
    eventHandlers: function eventHandlers() {
      return this.field.props && this.field.props['v-on'] ? this.field.props['v-on'] : {};
    },
    rules: function rules() {
      var _this = this;

      var rules = [];

      if (this.field.validations) {
        var _loop = function _loop(rule) {
          switch (rule) {
            case 'required':
              if (_this.field.validations[rule]) {
                rules.push(function (value) {
                  return !!value || 'پر کردن این قسمت الزامی است';
                });
              }

              break;

            case 'minLength':
              if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(_this.field.validations[rule])) {
                rules.push(function (value) {
                  return value.length >= _this.field.validations[rule] || 'حداقل تعداد کاراکتر ها ' + _this.field.validations[rule] + ' است ';
                });
              }

              break;

            case 'maxLength':
              if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(_this.field.validations[rule])) {
                rules.push(function (value) {
                  return value.length <= _this.field.validations[rule] || 'جداکثر تعداد کاراکتر ها ' + _this.field.validations[rule] + ' است ';
                });
              }

              break;

            case 'numeric':
              if (_this.field.validations[rule]) {
                rules.push(function (value) {
                  return !isNaN(parseFloat(value)) && isFinite(value) || 'مقدار ورودی باید عدد باشد، لطفا مقدار مورد نظر را با حروف انگلیسی وارد کنید';
                });
              }

              break;

            case 'ascii':
              if (_this.field.validations[rule]) {
                rules.push(function (value) {
                  return /^[\x00-\x7F]*$/.test(value) || 'لطفا این قسمت را با حروف انگلیسی پر کنید';
                });
              }

              break;

            case 'farsi':
              if (_this.field.validations[rule]) {
                rules.push(function (value) {
                  return /^[\u0600-\u06FF ]*$/.test(value) || 'لطفا این قسمت را با حروف فارسی پر کنید';
                });
              }

              break;
          }
        };

        for (var rule in this.field.validations) {
          _loop(rule);
        }
      }

      return rules;
    }
  },
  watch: {
    value: {
      deep: true,
      handler: function handler() {
        this.devalue = this.value;
      }
    },
    'field.props': {
      deep: true,
      handler: function handler() {
        console.log('updated', this.field);
        this.$forceUpdate();
      }
    }
  }
});
var DecoratableComponent = {
  computed: {
    decorator: function decorator() {
      var props = {};

      if (this.field.decorator && this.field.decorator.labels) {
        var labels = this.field.decorator.labels.split(',');

        for (var l in labels) {
          props[labels[l]] = labels[l];
        }
      }

      return _objectSpread(_objectSpread({
        id: 'id',
        title: 'title',
        label: ':id#:title'
      }, props), this.field.decorator);
    }
  },
  methods: {
    getDecorableLabel: function getDecorableLabel(item) {
      return this.getDecorableProperty(item, 'label');
    },
    getDecorableProperty: function getDecorableProperty(item, property) {
      var decorator = this.decorator;

      var getNestedPathValue = function getNestedPathValue(item, path) {
        var parts = path.split('.');
        var val = item;
        parts.forEach(function (p) {
          if (val) {
            val = val[p];
          }
        });
        return val;
      };

      var label = decorator[property];

      for (var prop in decorator) {
        label = label.replace(':' + prop, getNestedPathValue(item, decorator[prop]));
      }

      return label;
    }
  }
};
var EasyNestedObject = {
  methods: {
    setNestedPathValue: function setNestedPathValue(obj, path, val) {
      var parts = path.split('.');
      parts.forEach(function (p, indexer) {
        if (indexer === parts.length - 1) {
          obj[p] = val;
        } else {
          if (!obj[p]) {
            obj[p] = {};
          }

          obj = obj[p];
        }
      });
    },
    appendNestedPathValue: function appendNestedPathValue(obj, path, val) {
      var parts = path.split('.');
      parts.forEach(function (p, indexer) {
        if (indexer === parts.length - 1) {
          if (obj[p]) {
            Object.assign(obj[p], val);
          } else {
            obj[p] = val;
          }
        } else {
          if (!obj[p]) {
            obj[p] = {};
          }

          obj = obj[p];
        }
      });
    },
    getNestedPathValue: function getNestedPathValue(item, path) {
      var parts = path.split('.');
      var val = item;
      parts.forEach(function (p) {
        if (p.length > 0) {
          if (val) {
            val = val[p];
          }
        }
      });
      return val;
    },
    isSetNested: function isSetNested(obj, path) {
      var parts = path.split('.');
      var isSet = false;
      parts.forEach(function (p, indexer) {
        if (indexer === parts.length - 1) {
          if (obj && obj[p]) {
            isSet = true;
          }
        } else {
          obj = obj[p];
        }
      });
      return isSet;
    },
    flattenObject: function flattenObject(obj) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var out = {};

      var iterate = function iterate(nested, path, level) {
        for (var prop in nested) {
          if (nested[prop] instanceof Object && (level <= 0 || level < depth)) {
            iterate(nested[prop], path + '.' + prop, level + 1);
          } else {
            out[path + '.' + prop] = nested[prop];
          }
        }
      };

      iterate(obj, '', 0);
      return out;
    }
  }
};
var JSONWorkspace = {
  methods: {
    startJSONDownload: function startJSONDownload(data) {
      return function () {
        var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', 'schema.json');
        document.body.appendChild(downloadAnchorNode); // required for firefox

        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      };
    },
    startJSONUpload: function startJSONUpload(onUploaded) {
      return function () {
        var downloadAnchorNode = document.createElement('input');
        downloadAnchorNode.setAttribute('type', 'file');
        document.body.appendChild(downloadAnchorNode); // required for firefox

        downloadAnchorNode.click();
        downloadAnchorNode.addEventListener('change', function (event) {
          var fileToRead = event.target;
          var files = fileToRead.files;

          if (files.length) {
            var file = files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
              try {
                var json = JSON.parse(e.target.result);
                onUploaded(json);
              } catch (e) {
                console.error(e);
              }
            };

            reader.readAsText(file);
          }
        }, false);
        downloadAnchorNode.remove();
      };
    }
  }
};

/***/ })

}]);