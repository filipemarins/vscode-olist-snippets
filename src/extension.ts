import * as vscode from 'vscode';
import * as snippets from './snippets';

export function activate(context: vscode.ExtensionContext): void {
  const commands = [
    vscode.commands.registerCommand('snippets.getColor', snippets.getColor),
  ];

  commands.forEach(command => context.subscriptions.push(command));
}
