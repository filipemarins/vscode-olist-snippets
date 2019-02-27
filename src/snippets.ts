import * as vscode from 'vscode';
import searchColor from './searchColor';

function replaceColor(){
  const textEditor = vscode.window.activeTextEditor;
  const decType = vscode.window.createTextEditorDecorationType({});
  if (textEditor) {
    const selection = textEditor.selection;
    const text = textEditor.document.getText(new vscode.Range(selection.start, selection.end));

    if(text.includes('#')) {
      const color = searchColor(text);
      const decoration = {
        range: new vscode.Range(selection.start, selection.end),
        hoverMessage: color,
      };
      if (color.length) {
        textEditor.edit(editBuilder => {
          editBuilder.replace(selection, color[0]);
        });
        return textEditor.setDecorations(decType, [decoration]);
      }
    }
  }
  return;
}

export const getColor = () => replaceColor();
