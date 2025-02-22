import * as ts from "typescript";
import { Constants, FileTree } from "../types";
import argument2 from "./argument2";
import strictCommit from "./strictCommit";
import strictDispatch from "./strictDispatch";
import strictContext from "./strictContext";
import strictStore from "./strictStore";
import rootState from "./rootState";
import rootContext from "./rootContext";
//_______________________________________________________
//
export default (
  printer: ts.Printer,
  emptyFile: ts.SourceFile,
  fileTree: FileTree[],
  constants: Constants
) =>
  printer.printList(
    ts.ListFormat.MultiLine,
    ts.createNodeArray([
      ts.createImportDeclaration(
        undefined,
        undefined,
        undefined,
        ts.createStringLiteral(constants.VUEX)
      ),
      ts.createModuleDeclaration(
        undefined,
        [ts.createModifier(ts.SyntaxKind.DeclareKeyword)],
        ts.createStringLiteral(constants.VUEX),
        ts.createModuleBlock([
          ...argument2(constants),
          ...strictCommit(constants),
          ...strictDispatch(constants),
          ...strictContext(constants),
          ...strictStore(constants),
          ...rootState(fileTree, constants),
          ...rootContext(constants)
        ])
      )
    ]),
    emptyFile
  );
