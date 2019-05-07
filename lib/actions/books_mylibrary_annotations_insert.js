/**
 * Auto-generated action file for "Books" API.
 *
 * Generated at: 2019-05-07T14:41:15.236Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-books-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'books.mylibrary.annotations.insert'
 * Endpoint Path: '/mylibrary/annotations'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "annotationId",
    "country",
    "showOnlySummaryInResponse",
    "source",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "annotationId": "annotationId",
    "country": "country",
    "showOnlySummaryInResponse": "showOnlySummaryInResponse",
    "source": "source",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "afterSelectedText": "afterSelectedText",
    "beforeSelectedText": "beforeSelectedText",
    "endOffset": "endOffset",
    "endPosition": "endPosition",
    "startOffset": "startOffset",
    "startPosition": "startPosition",
    "cfiRange": "cfiRange",
    "contentVersion": "contentVersion",
    "gbImageRange": "gbImageRange",
    "gbTextRange": "gbTextRange",
    "imageCfiRange": "imageCfiRange",
    "clientVersionRanges": "clientVersionRanges",
    "created": "created",
    "currentVersionRanges": "currentVersionRanges",
    "data": "data",
    "deleted": "deleted",
    "highlightStyle": "highlightStyle",
    "id": "id",
    "kind": "kind",
    "layerId": "layerId",
    "allowedCharacterCount": "allowedCharacterCount",
    "limitType": "limitType",
    "remainingCharacterCount": "remainingCharacterCount",
    "layerSummary": "layerSummary",
    "pageIds": "pageIds",
    "selectedText": "selectedText",
    "selfLink": "selfLink",
    "updated": "updated",
    "volumeId": "volumeId",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'books.mylibrary.annotations.insert',
        pathName: '/mylibrary/annotations',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}