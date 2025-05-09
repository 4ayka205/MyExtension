"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const markdown_it_container_1 = __importDefault(require("markdown-it-container"));
const markdown_it_emoji_1 = __importDefault(require("markdown-it-emoji"));
function activate(context) {
    return {
        extendMarkdownIt(md) {
            md.use(markdown_it_container_1.default, 'spoiler', {
                marker: '?',
                validate: () => true,
                render: (tokens, idx) => {
                    const title = tokens[idx].info.replace('spoiler', '').trim();
                    return tokens[idx].nesting === 1 ?
                        `<details class="spoiler"><summary>${title}</summary><div>` :
                        '</div></details>';
                }
            });
            md.use(markdown_it_container_1.default, 'alert', {
                validate: () => true,
                render: (tokens, idx) => {
                    return tokens[idx].nesting === 1 ?
                        '<div class="alert">' :
                        '</div>';
                }
            });
            md.use(markdown_it_emoji_1.default);
            return md;
        }
    };
}
//# sourceMappingURL=extension.js.map