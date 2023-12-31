import * as vscode from "vscode";
import { packageNamesCIP } from "./autocomplete/packageNames";
import { packageVersionsCIP } from "./autocomplete/packageVersions";
import { decorate, clearDecorations } from "./decorator/decorator";
import { packageHoverProvider } from "./hover/hover";
import { ComposerExtension } from "./composer/composer";
const global = require("./util/globals");

export function activate(context: vscode.ExtensionContext) {
  console.log("composer-intellisense activated");

  const composer = new ComposerExtension();
  context.subscriptions.push(composer);

  global.extensionContext = context;

  context.subscriptions.push(packageNamesCIP);
  context.subscriptions.push(packageVersionsCIP);
  context.subscriptions.push(packageHoverProvider);

  vscode.workspace.onDidOpenTextDocument(() => {
    const openEditor = vscode.window.visibleTextEditors.filter((editor) =>
      editor.document.uri.path.endsWith("composer.json")
    );

    if (openEditor.length) {
      decorate(openEditor[0]);
    }
  });

  vscode.workspace.onDidChangeTextDocument(() => {
    const openEditor = vscode.window.visibleTextEditors.filter((editor) =>
      editor.document.uri.path.endsWith("composer.json")
    );

    if (openEditor.length) {
      clearDecorations();
    }
  });

  vscode.workspace.onWillSaveTextDocument(() => {
    const openEditor = vscode.window.visibleTextEditors.filter((editor) =>
      editor.document.uri.path.endsWith("composer.json")
    );

    if (openEditor.length) {
      decorate(openEditor[0]);
    }
  });
}

export function deactivate() {
  clearDecorations();
}
