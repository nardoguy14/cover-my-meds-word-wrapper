var assert = require('assert');
const DocumentWrapper = require('./DocumentWrapper');

describe('parseDocument', function() {
    it('should return back an array with the proper amount of lines', function() {
        DocumentWrapper.parseDocument("sampleText.txt", function(linesOfDocument){
            assert.equal(linesOfDocument.length, 61);
        })
    });
});

describe('combineLines', function() {
    it('should add strings together into one line that aren\'t empty lines', function() {
        var linesOfDocument = [
            'hello ',
            'there ',
            '',
            'whats ',
            'up'
        ]
        DocumentWrapper.combineLines(linesOfDocument, function(linesOfDocument){
            assert.equal(linesOfDocument.length, 3);
        })
    });

    it('should return back the proper amount of lines for just empty lines', function() {
        var linesOfDocument = [
            '',
            '',
            ''
        ]
        DocumentWrapper.combineLines(linesOfDocument, function(linesOfDocument){
            assert.equal(linesOfDocument.length, 3);
        })
    });
});

describe('lookForLastSpace', function() {
    it('should return the proper index of the last space in the string', function() {
        var testString = "hello there how are you"

        var index = DocumentWrapper.lookForLastSpace(testString, 6)
        assert.equal(index, 5);

    });
});

describe('parse', function() {
    it('should return set of lines in a list where no line is longer than the defined max length', function() {
        var document = [
            'word word word word word word',
            '',
            'word word word word word  word word word word word word word word word word word word word word word word',
            'word word word word word'
        ]
        var maxLength = 10
        var newDocument = DocumentWrapper.parse(document, maxLength)
        var brokeUpLines = []
        for(var i =0; i< newDocument.length; i++){
            var broken = newDocument[i].split('\n')
            for(var j = 0; j< broken.length; j++){
                brokeUpLines.push(broken[j])
            }
        }
        for(var i =0; i< brokeUpLines.length; i++){
            var lineLength = brokeUpLines[i].length
            assert.equal(lineLength <= maxLength, true);
        }
    });
});