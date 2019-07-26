import * as ts from "typescript";
import { Constants } from "../types";
//_______________________________________________________
//
export default (constants: Constants) => [
  ts.createInterfaceDeclaration(
    undefined,
    undefined,
    ts.createIdentifier(constants.STRICT_DISPATCH),
    [
      ts.createTypeParameterDeclaration(
        ts.createIdentifier("A"),
        undefined,
        undefined
      )
    ],
    undefined,
    [
      ts.createCallSignature(
        [
          ts.createTypeParameterDeclaration(
            ts.createIdentifier("T"),
            ts.createTypeOperatorNode(
              ts.createTypeReferenceNode(ts.createIdentifier("A"), undefined)
            ),
            undefined
          )
        ],
        [
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            ts.createIdentifier("type"),
            undefined,
            ts.createTypeReferenceNode(ts.createIdentifier("T"), undefined),
            undefined
          ),
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            ts.createIdentifier("payload"),
            ts.createToken(ts.SyntaxKind.QuestionToken),
            ts.createIndexedAccessTypeNode(
              ts.createTypeReferenceNode(ts.createIdentifier("A"), undefined),
              ts.createTypeReferenceNode(ts.createIdentifier("T"), undefined)
            ),
            undefined
          ),
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            ts.createIdentifier("options"),
            ts.createToken(ts.SyntaxKind.QuestionToken),
            ts.createTypeReferenceNode(
              ts.createIdentifier("DispatchOptions"),
              undefined
            ),
            undefined
          )
        ],
        ts.createTypeReferenceNode(ts.createIdentifier("Promise"), [
          ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
        ])
      )
    ]
  ),
  ts.createInterfaceDeclaration(
    undefined,
    undefined,
    ts.createIdentifier(constants.STRICT_DISPATCH),
    [
      ts.createTypeParameterDeclaration(
        ts.createIdentifier("A"),
        undefined,
        undefined
      )
    ],
    undefined,
    [
      ts.createCallSignature(
        [
          ts.createTypeParameterDeclaration(
            ts.createIdentifier("T"),
            ts.createTypeOperatorNode(
              ts.createTypeReferenceNode(ts.createIdentifier("A"), undefined)
            ),
            undefined
          )
        ],
        [
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            ts.createIdentifier("payloadWithType"),
            undefined,
            ts.createIntersectionTypeNode([
              ts.createTypeLiteralNode([
                ts.createPropertySignature(
                  undefined,
                  ts.createIdentifier("type"),
                  undefined,
                  ts.createTypeReferenceNode(
                    ts.createIdentifier("T"),
                    undefined
                  ),
                  undefined
                )
              ]),
              ts.createIndexedAccessTypeNode(
                ts.createTypeReferenceNode(ts.createIdentifier("A"), undefined),
                ts.createTypeReferenceNode(ts.createIdentifier("T"), undefined)
              )
            ]),
            undefined
          ),
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            ts.createIdentifier("options"),
            ts.createToken(ts.SyntaxKind.QuestionToken),
            ts.createTypeReferenceNode(
              ts.createIdentifier("DispatchOptions"),
              undefined
            ),
            undefined
          )
        ],
        ts.createTypeReferenceNode(ts.createIdentifier("Promise"), [
          ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
        ])
      )
    ]
  )
];
