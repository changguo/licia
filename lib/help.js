const readTpl = require('./helper/readTpl');
const util = require('./util');

module.exports = function() {
    let cmdName = options.argv.remain[0];
    util.contain(['benchmark', 'test', 'pack', 'update'], cmdName)
        ? output(cmdName)
        : outputAll();
};

function outputAll() {
    readTpl('help', function(err, tpl) {
        if (err) return console.log(err);

        console.log(tpl(help));
    });
}

function output(name) {
    readTpl('helpCmd', function(err, tpl) {
        if (err) return console.log(err);

        console.log(tpl(helpData[name]));
    });
}

let help = {
    usage: ['<command> [<options>]'],
    commands: {
        test: 'Generate test files',
        benchmark: 'Generate benchmark files',
        update: 'Update module info and documentation',
        pack: 'Transform files into commonjs modules',
        help: 'Display help information'
    }
};

let helpData = {
    test: {
        command: 'test',
        desc: 'Generate test files.',
        usage: ['test <module-name> [<options>]', 'test lpad --karma'],
        options: [
            {
                shorthand: '-k',
                flag: '--karma',
                desc: 'True if test should run in a browser.'
            },
            {
                shorthand: '-a',
                flag: '--all',
                desc: 'Generate all tests.'
            },
            {
                shorthand: '-d',
                flag: '--demo',
                desc: 'Generate Html test file.'
            },
            {
                flag: '--ts',
                desc: 'Generate typescript test file.'
            },
            {
                shorthand: '-s',
                flag: '--silent',
                desc: 'Disable output log.'
            }
        ]
    },
    benchmark: {
        command: 'benchmark',
        desc: 'Generate benchmark files.',
        usage: ['benchmark <module-name>']
    },
    update: {
        command: 'update',
        desc: 'Update module info and documentation.',
        usage: ['update']
    },
    pack: {
        command: 'pack',
        desc: 'Transform files into commonjs modules.',
        usage: ['pack']
    }
};
