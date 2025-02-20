"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts = __importStar(require("typescript"));
//_______________________________________________________
//
function createPropertySignatures(typeFile, wrapUtilityTypeName, variableDeclarationName, constants) {
    return [
        ts.createPropertySignature(undefined, ts.createStringLiteral(typeFile.namespace), undefined, ts.createTypeReferenceNode(ts.createIdentifier(wrapUtilityTypeName), [
            ts.createIndexedAccessTypeNode(ts.createIndexedAccessTypeNode(ts.createTypeReferenceNode(ts.createIdentifier(constants.MODULES), undefined), ts.createLiteralTypeNode(ts.createStringLiteral(typeFile.namespace))), ts.createLiteralTypeNode(ts.createStringLiteral(variableDeclarationName)))
        ]), undefined)
    ];
}
//_______________________________________________________
//
exports.default = (function (typeFile, distTypeName, wrapUtilityTypeName, variableDeclarationName, constants) {
    return ts.createInterfaceDeclaration(undefined, undefined, ts.createIdentifier(distTypeName), undefined, undefined, createPropertySignatures(typeFile, wrapUtilityTypeName, variableDeclarationName, constants));
});
