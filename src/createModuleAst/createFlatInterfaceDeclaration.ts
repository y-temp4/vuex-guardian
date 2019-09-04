import * as ts from 'typescript'
import flatten from 'lodash.flatten'
import { FileInfo, Constants } from '../types'
import {
  isExpectedIdentifierVariableStatement,
  getVariableDeclarationFromVariableStatement,
  getMethodDeclarationNamesFromVariableDeclaration
} from './helpers'
//_______________________________________________________
//
function getSignature(
  fileInfo: FileInfo,
  wrapUtilityTypeName: string,
  variableDeclarationName: string,
  identifier: string,
  constants: Constants
) {
  return ts.createPropertySignature(
    undefined,
    ts.createIdentifier(identifier),
    undefined,
    ts.createTypeReferenceNode(
      ts.createIdentifier(wrapUtilityTypeName),
      [
        ts.createIndexedAccessTypeNode(
          ts.createIndexedAccessTypeNode(
            ts.createIndexedAccessTypeNode(
              ts.createTypeReferenceNode(
                ts.createIdentifier(constants.MODULES),
                undefined
              ),
              ts.createLiteralTypeNode(
                ts.createStringLiteral(fileInfo.nameSpace)
              )
            ),
            ts.createLiteralTypeNode(
              ts.createStringLiteral(
                variableDeclarationName
              )
            )
          ),
          ts.createLiteralTypeNode(
            ts.createStringLiteral(identifier)
          )
        )
      ]
    ),
    undefined
  )
}
function createPropertySignatures(
  node: ts.VariableDeclaration | null,
  fileInfo: FileInfo,
  wrapUtilityTypeName: string,
  variableDeclarationName: string,
  constants: Constants
) {
  const identifiers = getMethodDeclarationNamesFromVariableDeclaration(
    node
  )
  return identifiers.map(identifier =>
    getSignature(
      fileInfo,
      wrapUtilityTypeName,
      variableDeclarationName,
      identifier,
      constants
    )
  )
}
function createPropertySignaturesFromSourceFile(
  sourceFile: ts.SourceFile,
  fileInfo: FileInfo,
  wrapUtilityTypeName: string,
  variableDeclarationName: string,
  constants: Constants
) {
  const typeDefinitions = sourceFile.getChildAt(0)
  return flatten(
    typeDefinitions
      .getChildren()
      .filter(ts.isVariableStatement)
      .filter(node =>
        isExpectedIdentifierVariableStatement(
          node,
          variableDeclarationName
        )
      )
      .map(getVariableDeclarationFromVariableStatement)
      .map(node =>
        createPropertySignatures(
          node,
          fileInfo,
          wrapUtilityTypeName,
          variableDeclarationName,
          constants
        )
      )
      .filter(
        (node): node is ts.PropertySignature[] =>
          node !== undefined
      )
  )
}
//_______________________________________________________
//
export const createFlatInterfaceDeclaration = (
  sourceFile: ts.SourceFile,
  fileInfo: FileInfo,
  distTypeName: string,
  wrapUtilityTypeName: string,
  variableDeclarationName: string,
  constants: Constants
) =>
  ts.createInterfaceDeclaration(
    undefined,
    undefined,
    ts.createIdentifier(distTypeName),
    undefined,
    undefined,
    [
      ts.createPropertySignature(
        undefined,
        ts.createStringLiteral(fileInfo.nameSpace),
        undefined,
        ts.createTypeLiteralNode(
          createPropertySignaturesFromSourceFile(
            sourceFile,
            fileInfo,
            wrapUtilityTypeName,
            variableDeclarationName,
            constants
          )
        ),
        undefined
      )
    ]
  )
