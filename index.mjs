// Reference:
// https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html

export const RESET = '\u001b[0m';

export const BLACK = '\u001b[30m';
export const RED = '\u001b[31m';
export const GREEN = '\u001b[32m';
export const YELLOW = '\u001b[33m';
export const BLUE = '\u001b[34m';
export const MAGENTA = '\u001b[35m';
export const CYAN = '\u001b[36m';
export const WHITE = '\u001b[37m';

export const BRIGHT_BLACK = '\u001b[30;1m';
export const BRIGHT_RED = '\u001b[31;1m';
export const BRIGHT_GREEN = '\u001b[32;1m';
export const BRIGHT_YELLOW = '\u001b[33;1m';
export const BRIGHT_BLUE = '\u001b[34;1m';
export const BRIGHT_MAGENTA = '\u001b[35;1m';
export const BRIGHT_CYAN = '\u001b[36;1m';
export const BRIGHT_WHITE = '\u001b[37;1m';

export function colour(id) {
	return `\u001b[38;5;${id}m`;
}

export const BG_BLACK = '\u001b[40m';
export const BG_RED = '\u001b[41m';
export const BG_GREEN = '\u001b[42m';
export const BG_YELLOW = '\u001b[43m';
export const BG_BLUE = '\u001b[44m';
export const BG_MAGENTA = '\u001b[45m';
export const BG_CYAN = '\u001b[46m';
export const BG_WHITE = '\u001b[47m';

export const BG_BRIGHT_BLACK = '\u001b[40;1m';
export const BG_BRIGHT_RED = '\u001b[41;1m';
export const BG_BRIGHT_GREEN = '\u001b[42;1m';
export const BG_BRIGHT_YELLOW = '\u001b[43;1m';
export const BG_BRIGHT_BLUE = '\u001b[44;1m';
export const BG_BRIGHT_MAGENTA = '\u001b[45;1m';
export const BG_BRIGHT_CYAN = '\u001b[46;1m';
export const BG_BRIGHT_WHITE = '\u001b[47;1m';

export function bgColour(id) {
	return `\u001b[48;5;${id}m`;
}

export const BOLD = '\u001b[1m';
export const UNDERLINE = '\u001b[4m';
export const REVERSED = '\u001b[7m';

export function up(places) {
    return `\u001b[${places}A`;
}
export function down(places) {
    return `\u001b[${places}B`;
}
export function right(places) {
    return `\u001b[${places}C`;
}
export function left(places) {
    return `\u001b[${places}D`;
}
