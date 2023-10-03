const betterchalk = {
    blue: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}34m` + str + "\x1b[0m";
    },
    red: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}31m` + str + "\x1b[0m";
    },
    green: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}32m` + str + "\x1b[0m";
    },
    purple: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}35m` + str + "\x1b[0m";
    },
    cyan: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}36m` + str + "\x1b[0m";
    },
    white: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}37m` + str + "\x1b[0m";
    },
    black: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}30m` + str + "\x1b[0m";
    },
    yellow: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}33m` + str + "\x1b[0m";
    },
    orange: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}33m` + str + "\x1b[0m";
    },
    pink: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}35m` + str + "\x1b[0m";
    },
    darkblue: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}34m` + str + "\x1b[0m";
    },
    darkpurple: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}35m` + str + "\x1b[0m";
    },
    darkcyan: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}36m` + str + "\x1b[0m";
    },
    darkred: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}31m` + str + "\x1b[0m";
    },
    darkgreen: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}32m` + str + "\x1b[0m";
    },
    darkyellow: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}33m` + str + "\x1b[0m";
    },
    gray: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}90m` + str + "\x1b[0m";
    },
    darkpink: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}35m` + str + "\x1b[0m";
    },
    darkyellow: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}33m` + str + "\x1b[0m";
    },
    darkorange: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}33m` + str + "\x1b[0m";
    },
    darkgray: (str, bold = false) => {
        return `\x1b[${bold ? '1;' : ''}90m` + str + "\x1b[0m";
    },
    hex: (hexCode, bold = false) => {
        const colorCode = getColorCodeFromHex(hexCode);
        if (colorCode !== null) {
            return `\x1b[${bold ? '1;' : ''}38;5;${colorCode}m`;
        } else {
            return '';
        }
    },
    bghex: (hexCode, bold = false) => {
        const colorCode = getColorCodeFromHex(hexCode);
        if (colorCode !== null) {
            return `\x1b[${bold ? '1;' : ''}48;5;${colorCode}m`;
        } else {
            return '';
        }
    },
};
function getColorCodeFromHex(hexCode) {
    const match = hexCode.match(/^#([0-9a-fA-F]{6})$/);
    if (match) {
        const hexColor = match[1];
        const r = parseInt(hexColor.substring(0, 2), 16);
        const g = parseInt(hexColor.substring(2, 4), 16);
        const b = parseInt(hexColor.substring(4, 6), 16);
        return rgbToAnsi256(r, g, b);
    } else {
        return null;
    }
}
function rgbToAnsi256(r, g, b) {
    if (r === g && g === b) {
        if (r < 8) return 16;
        if (r > 248) return 231;
        return Math.round(((r - 8) / 247) * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
}
module.exports = betterchalk;