import RegisterAPIBlocks, {
    CategoryAPI
} from './blocks/api'
import RegisterAppBlocks, {
    CategoryApp
} from './blocks/app'
import RegisterObjectBlocks, {
    CategoryObject
} from './blocks/object'

export default function RegisterBlocksAndGetToolbox(Blockly, options) {
    const categoriesList = []
    const blocks = {
        api: function () {
            RegisterAPIBlocks(Blockly, options && options.crud && options.crud.resources ? options.crud.resources : [
                ['users', 'Users'],
                ['domains', 'Domains']
            ])
            categoriesList.push(CategoryAPI)
        },
        app: function () {
            RegisterAppBlocks(Blockly)
            categoriesList.push(CategoryApp)
        },
        text: function () {
            categoriesList.push(CategoryText)
        },
        object: function () {
            RegisterObjectBlocks(Blockly)
            categoriesList.push(CategoryObject)
        },
        lists: function () {
            categoriesList.push(CategoryLists)
        },
        math: function () {
            categoriesList.push(CategoryMath)
        },
        color: function () {
            categoriesList.push(CategoryColor)
        },
        sep: function () {
            categoriesList.push('<sep></sep>')
        },
        logic: function () {
            categoriesList.push(CategoryLogic)
        },
        loops: function () {
            categoriesList.push(CategoryLoops)
        }
    }

    if (options.blocks && Array.isArray(options.blocks)) {
        options.blocks.forEach((b) => {
            if (blocks[b]) {
                blocks[b]()
            }
        })
    }
    for (const prop in blocks) {
        if (blocks[prop]) {
            blocks[prop]()
        }
    }


    Blockly.JavaScript['controls_for'] = function (block) {
        // For loop.
        var variable0 = Blockly.JavaScript.variableDB_.getName(
            block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
        var argument0 = Blockly.JavaScript.valueToCode(block, 'FROM',
            Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
        var argument1 = Blockly.JavaScript.valueToCode(block, 'TO',
            Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
        var increment = Blockly.JavaScript.valueToCode(block, 'BY',
            Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
        var branch = Blockly.JavaScript.statementToCode(block, 'DO');
        branch = Blockly.JavaScript.addLoopTrap(branch, block);
        var code;
        if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
            Blockly.isNumber(increment)) {
            // All arguments are simple numbers.
            var up = Number(argument0) <= Number(argument1);
            code = 'for (this.blockly.' + variable0 + ' = ' + argument0 + '; this.blockly.' +
                variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
                variable0;
            var step = Math.abs(Number(increment));
            if (step == 1) {
                code += up ? '++' : '--';
            } else {
                code += (up ? ' += ' : ' -= ') + step;
            }
            code += ') {\n' + branch + '}\n';
        } else {
            code = '';
            // Cache non-trivial values to variables to prevent repeated look-ups.
            var startVar = argument0;
            if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
                startVar = Blockly.JavaScript.variableDB_.getDistinctName(
                    variable0 + '_start', Blockly.VARIABLE_CATEGORY_NAME);
                code += 'var ' + startVar + ' = ' + argument0 + ';\n';
            }
            var endVar = argument1;
            if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
                endVar = Blockly.JavaScript.variableDB_.getDistinctName(
                    variable0 + '_end', Blockly.VARIABLE_CATEGORY_NAME);
                code += 'var ' + endVar + ' = ' + argument1 + ';\n';
            }
            // Determine loop direction at start, in case one of the bounds
            // changes during loop execution.
            var incVar = Blockly.JavaScript.variableDB_.getDistinctName(
                variable0 + '_inc', Blockly.VARIABLE_CATEGORY_NAME);
            code += 'var ' + incVar + ' = ';
            if (Blockly.isNumber(increment)) {
                code += Math.abs(increment) + ';\n';
            } else {
                code += 'Math.abs(' + increment + ');\n';
            }
            code += 'if (' + startVar + ' > ' + endVar + ') {\n';
            code += Blockly.JavaScript.INDENT + incVar + ' = -' + incVar + ';\n';
            code += '}\n';
            code += 'for (this.blockly.' + variable0 + ' = ' + startVar + '; ' +
                incVar + ' >= 0 ? ' +
                'this.blockly.' + variable0 + ' <= ' + endVar + ' : ' +
                'this.blockly.' + variable0 + ' >= ' + endVar + '; ' +
                'this.blockly.' + variable0 + ' += ' + incVar + ') {\n' +
                branch + '}\n';
        }
        return code;
    };


    const toolbox = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    ${categoriesList.join('\n')}
    <sep></sep>
    <category name="Functions" colour="#995ba5" custom="PROCEDURE"></category>
    <category name="Variables" colour="#a55b80" custom="VARIABLE"></category>
    </xml>`

    return toolbox
}

export const CategoryLogic =
    `
<category id="catLogic" colour="210" name="Logic">
    <block type="controls_if"></block>
    <block type="logic_compare"></block>
    <block type="logic_operation"></block>
    <block type="logic_negate"></block>
    <block type="logic_boolean"></block>
    <block type="logic_null"></block>
    <block type="logic_ternary"></block>
</category>
`

export const CategoryLoops =
    `
<category id="catLoops" colour="120" name="Loops">
    <block type="controls_repeat_ext">
    <value name="TIMES">
        <shadow type="math_number">
        <field name="NUM">10</field>
        </shadow>
    </value>
    </block>
    <block type="controls_whileUntil"></block>
    <block type="controls_for">
    <value name="FROM">
        <shadow type="math_number">
        <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="math_number">
        <field name="NUM">10</field>
        </shadow>
    </value>
    <value name="BY">
        <shadow type="math_number">
        <field name="NUM">1</field>
        </shadow>
    </value>
    </block>
    <block type="controls_forEach"></block>
    <block type="controls_flow_statements"></block>
</category>
`

export const CategoryMath =
    `
<category id="catMath" colour="230" name="Math">
    <block type="math_number"></block>
    <block type="math_arithmetic">
    <value name="A">
        <shadow type="math_number">
        <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="B">
        <shadow type="math_number">
        <field name="NUM">1</field>
        </shadow>
    </value>
    </block>
    <block type="math_single">
    <value name="NUM">
        <shadow type="math_number">
        <field name="NUM">9</field>
        </shadow>
    </value>
    </block>
    <block type="math_trig">
    <value name="NUM">
        <shadow type="math_number">
        <field name="NUM">45</field>
        </shadow>
    </value>
    </block>
    <block type="math_constant"></block>
    <block type="math_number_property">
    <value name="NUMBER_TO_CHECK">
        <shadow type="math_number">
        <field name="NUM">0</field>
        </shadow>
    </value>
    </block>
    <block type="math_change">
    <value name="DELTA">
        <shadow type="math_number">
        <field name="NUM">1</field>
        </shadow>
    </value>
    </block>
    <block type="math_round">
    <value name="NUM">
        <shadow type="math_number">
        <field name="NUM">3.1</field>
        </shadow>
    </value>
    </block>
    <block type="math_on_list"></block>
    <block type="math_modulo">
    <value name="DIVIDEND">
        <shadow type="math_number">
        <field name="NUM">64</field>
        </shadow>
    </value>
    <value name="DIVISOR">
        <shadow type="math_number">
        <field name="NUM">10</field>
        </shadow>
    </value>
    </block>
    <block type="math_constrain">
    <value name="VALUE">
        <shadow type="math_number">
        <field name="NUM">50</field>
        </shadow>
    </value>
    <value name="LOW">
        <shadow type="math_number">
        <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="HIGH">
        <shadow type="math_number">
        <field name="NUM">100</field>
        </shadow>
    </value>
    </block>
    <block type="math_random_int">
    <value name="FROM">
        <shadow type="math_number">
        <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="math_number">
        <field name="NUM">100</field>
        </shadow>
    </value>
    </block>
    <block type="math_random_float"></block>
</category>
`

export const CategoryText =
    `
<category id="catText" colour="160" name="Text">
    <block type="text"></block>
    <block type="text_join"></block>
    <block type="text_append">
    <value name="TEXT">
        <shadow type="text"></shadow>
    </value>
    </block>
    <block type="text_length">
    <value name="VALUE">
        <shadow type="text">
        <field name="TEXT">abc</field>
        </shadow>
    </value>
    </block>
    <block type="text_isEmpty">
    <value name="VALUE">
        <shadow type="text">
        <field name="TEXT"></field>
        </shadow>
    </value>
    </block>
    <block type="text_indexOf">
    <value name="VALUE">
        <block type="variables_get">
        <field name="VAR">text</field>
        </block>
    </value>
    <value name="FIND">
        <shadow type="text">
        <field name="TEXT">abc</field>
        </shadow>
    </value>
    </block>
    <block type="text_charAt">
    <value name="VALUE">
        <block type="variables_get">
        <field name="VAR">text</field>
        </block>
    </value>
    </block>
    <block type="text_getSubstring">
    <value name="STRING">
        <block type="variables_get">
        <field name="VAR">text</field>
        </block>
    </value>
    </block>
    <block type="text_changeCase">
    <value name="TEXT">
        <shadow type="text">
        <field name="TEXT">abc</field>
        </shadow>
    </value>
    </block>
    <block type="text_trim">
    <value name="TEXT">
        <shadow type="text">
        <field name="TEXT">abc</field>
        </shadow>
    </value>
    </block>
    <block type="text_print">
    <value name="TEXT">
        <shadow type="text">
        <field name="TEXT">abc</field>
        </shadow>
    </value>
    </block>
    <block type="text_prompt_ext">
    <value name="TEXT">
        <shadow type="text">
        <field name="TEXT">abc</field>
        </shadow>
    </value>
    </block>
</category>
`

export const CategoryLists =
    `
<category id="catLists" colour="260" name="Lists">
    <block type="lists_create_with">
    <mutation items="0"></mutation>
    </block>
    <block type="lists_create_with"></block>
    <block type="arr_push"></block>
    <block type="arr_merge"></block>
    <block type="arr_remove_with_key"></block>
    <block type="arr_contains_obj"></block>
    <block type="arr_contains"></block>
    <block type="lists_repeat">
    <value name="NUM">
        <shadow type="math_number">
        <field name="NUM">5</field>
        </shadow>
    </value>
    </block>
    <block type="lists_length"></block>
    <block type="lists_isEmpty"></block>
    <block type="lists_indexOf">
    <value name="VALUE">
        <block type="variables_get">
        <field name="VAR">list</field>
        </block>
    </value>
    </block>
    <block type="lists_getIndex">
    <value name="VALUE">
        <block type="variables_get">
        <field name="VAR">list</field>
        </block>
    </value>
    </block>
    <block type="lists_setIndex">
    <value name="LIST">
        <block type="variables_get">
        <field name="VAR">list</field>
        </block>
    </value>
    </block>
    <block type="lists_getSublist">
    <value name="LIST">
        <block type="variables_get">
        <field name="VAR">list</field>
        </block>
    </value>
    </block>
    <block type="lists_split">
    <value name="DELIM">
        <shadow type="text">
        <field name="TEXT">,</field>
        </shadow>
    </value>
    </block>
</category>
`

export const CategoryColor =
    `
<category id="catColour" colour="20" name="Colour">
    <block type="colour_picker"></block>
    <block type="colour_random"></block>
    <block type="colour_rgb">
    <value name="RED">
        <shadow type="math_number">
        <field name="NUM">100</field>
        </shadow>
    </value>
    <value name="GREEN">
        <shadow type="math_number">
        <field name="NUM">50</field>
        </shadow>
    </value>
    <value name="BLUE">
        <shadow type="math_number">
        <field name="NUM">0</field>
        </shadow>
    </value>
    </block>
    <block type="colour_blend">
    <value name="COLOUR1">
        <shadow type="colour_picker">
        <field name="COLOUR">#ff0000</field>
        </shadow>
    </value>
    <value name="COLOUR2">
        <shadow type="colour_picker">
        <field name="COLOUR">#3333ff</field>
        </shadow>
    </value>
    <value name="RATIO">
        <shadow type="math_number">
        <field name="NUM">0.5</field>
        </shadow>
    </value>
    </block>
</category>
`
