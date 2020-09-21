const canvas = document.getElementById("lab03");
const contextCanvas = canvas.getContext("2d");
let flag = 0;

canvas.addEventListener("click", function(evt){
    if (!flag) {
        x_0 = evt.offsetX;
        y_0 = evt.offsetY;
        flag = 1;
    } else {
        x1 = evt.offsetX;
        y1 = evt.offsetY;
        lineDraw(contextCanvas, x_0, y_0, x1, y1);
        flag = 0;
    }
});


function lineDraw(context, x, y, x_1, y_1) {
    const deltaX = Math.abs(x_1 - x);
    const deltaY = Math.abs(y_1 - y);

    let val = deltaX - deltaY;

    const signX = x < x_1 ? 1 : -1;
    const signY = y < y_1 ? 1 : -1;

    context.fillRect(x1, y1, 1, 1);
        while (x != x1 || y != y1) {
            context.fillRect(x, y, 1, 1);
            let valRes = val * 2;
            if(valRes > -deltaY) {
                val -= deltaY;
                x += signX;
            }
            if (valRes < deltaX) {
                val += deltaX;
                y += signY;
            }
        }
}

