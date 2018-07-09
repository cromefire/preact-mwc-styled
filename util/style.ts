const counts: { [id: string]: number } = {};

function use(id) {
    if (!counts.hasOwnProperty(id)) {
        counts[id] = 1;
        return true;
    } else {
        counts[id]++;
        return counts[id] <= 1;
    }
}

function unuse(id) {
    if (!counts.hasOwnProperty(id)) {
        counts[id] = 0;
        return true;
    } else {
        counts[id]--;
        return counts[id] <= 0;
    }
}

export function load_styles(styles: Array<{ style: string | { use?: () => void }, id: string }>) {
    for (const style_def of styles) {
        if (typeof style_def.style === "string") {
            let elem = document.getElementById(`mwc_${style_def.id}_style`);
            if (!elem) {
                elem = document.createElement("style");
                elem.id = `mwc_${style_def.id}_style`;
            }
            if (use(style_def.id)) {
                elem.innerText = "";
                elem.appendChild(document.createTextNode(style_def.style));
            }
        } else {
            if (style_def.style.use) {
                style_def.style.use();
            }
        }
    }
}

export function unload_styles(styles: Array<{ style: string | { unuse?: () => void }, id: string }>) {
    for (const style_def of styles) {
        if (typeof style_def.style === "string") {
            let elem = document.getElementById(`mwc_${style_def.id}_style`);
            if (!elem) {
                elem = document.createElement("style");
                elem.id = `mwc_${style_def.id}_style`;
            }
            if (unuse(style_def.id)) {
                elem.innerText = "";
            }
        } else {
            if (style_def.style.unuse) {
                style_def.style.unuse();
            }
        }
    }
}
