import * as ts from "typescript";
import { Constants } from "../types";
//_______________________________________________________
//
export default (constants: Constants) => [
  ts.createTypeAliasDeclaration(
    undefined,
    undefined,
    ts.createIdentifier(constants.ARGUMENT_2),
    [
      ts.createTypeParameterDeclaration(
        ts.createIdentifier("T"),
        undefined,
        undefined
      )
    ],
    ts.createConditionalTypeNode(
      ts.createTypeReferenceNode(ts.createIdentifier("T"), undefined),
      ts.createFunctionTypeNode(
        undefined,
        [
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            ts.createIdentifier("a1"),
            undefined,
            ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
            undefined
          ),
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            ts.createIdentifier("a2"),
            undefined,
            ts.createInferTypeNode(
              ts.createTypeParameterDeclaration(
                ts.createIdentifier("I"),
                undefined,
                undefined
              )
            ),
            undefined
          )
        ],
        ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
      ),
      ts.createTypeReferenceNode(ts.createIdentifier("I"), undefined),
      ts.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
    )
  )
];
