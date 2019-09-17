const DocumentWrapper = require('./DocumentWrapper');

DocumentWrapper.getParams(function(parametersList){
    var N = parametersList[1]
    DocumentWrapper.parseDocument(parametersList[0], function(linesOfDocument){
        var adjustedDocument = DocumentWrapper.parse(linesOfDocument, N)
        for(var i = 0; i < adjustedDocument.length; i++){
            console.log(adjustedDocument[i])
        }
    })
})