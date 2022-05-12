const divRedFire = document.getElementById("redfire")
const divOrangeFire = document.getElementById("orangefire")
const divGreenFire = document.getElementById("greenfire")
const main = document.getElementById("main")
const btn = document.getElementById("btn")


const stoplightState = {
    "state": "orange"
}
updateStoplight("orange")


btn.onclick = (e) => {
    e.preventDefault()
    switch (stoplightState.state) {
        case 'red':
            var dmc_setTimeout = setTimeout(updateState, 5000)
            break;
        case 'orange':
            var dmc_setTimeout = setTimeout(updateState, 1000)
            break
        case 'green':
            var dmc_setTimeout = setTimeout(updateState, 5000)
            break;
        default:
            console.log("Error in btn.click");
    }
}






// PARTIE FONCTIONS //

function updateState() {
    switch (stoplightState.state) {
        case 'red':
            stoplightState.state = "green"
            updateStoplight("green")
            break;
        case 'orange':
            stoplightState.state = "red"
            updateStoplight("red")
            break
        case 'green':
            stoplightState.state = "orange"
            updateStoplight("orange")
            break
        default:
            console.log("Error in updateState");
    }
}


function updateStoplight(color) {
    switch (color) {
        case 'red':
            divRedFire.setAttribute("state", "active")
            divGreenFire.setAttribute("state", "inactive")
            divOrangeFire.setAttribute("state", "inactive")
            break
        case 'orange':
            divRedFire.setAttribute("state", "inactive")
            divGreenFire.setAttribute("state", "inactive")
            divOrangeFire.setAttribute("state", "active")
            break
        case 'green':
            divRedFire.setAttribute("state", "inactive")
            divGreenFire.setAttribute("state", "active")
            divOrangeFire.setAttribute("state", "inactive")
            break
        default:
            console.log("Error");
    }
}


// fonctions pour actualiser le dom plus rapidemment
function ml(tagName, props, nest) {
    var el = document.createElement(tagName);
    if (props) {
        for (var name in props) {
            if (name.indexOf("on") === 0) {
                el.addEventListener(name.substr(2).toLowerCase(), props[name], false)
            } else {
                el.setAttribute(name, props[name]);
            }
        }
    }
    if (!nest) {
        return el;
    }
    return nester(el, nest)
}

function nester(el, n) {
    if (typeof n === "string") {
        var t = document.createTextNode(n);
        el.appendChild(t);
    } else if (n instanceof Array) {
        for (var i = 0; i < n.length; i++) {
            if (typeof n[i] === "string") {
                var t = document.createTextNode(n[i]);
                el.appendChild(t);
            } else if (n[i] instanceof Node) {
                el.appendChild(n[i]);
            }
        }
    } else if (n instanceof Node) {
        el.appendChild(n)
    }
    return el;
}