import * as vscode from 'vscode';
import markdownItContainer from 'markdown-it-container';
import markdownItEmoji from 'markdown-it-emoji';

export function activate(context: vscode.ExtensionContext) {
	return {
		extendMarkdownIt(md: any) {
			md.use(markdownItContainer, 'spoiler', {
				marker: '?',
				validate: () => true,
				render: (tokens: any, idx: number) => {
					const title = tokens[idx].info.replace('spoiler', '').trim();
					return tokens[idx].nesting === 1 ?
						`<details class="spoiler"><summary>${title}</summary><div>` :
						'</div></details>';
				}
			});

			md.use(markdownItContainer, 'alert', {
				validate: () => true,
				render: (tokens: any, idx: number) => {
					return tokens[idx].nesting === 1 ?
						'<div class="alert">' :
						'</div>';
				}
			});

			md.use(markdownItEmoji);

			return md;
		}
	};
}