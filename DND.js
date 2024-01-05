const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragstart);
fill.addEventListener("dragend", dragend);

function dragstart() {
    this.classname = "hold";
    setTimeout(() => (this.classname = "invisible"), 0);
}

function dragend {
    this.classname = 'fill'

}
for (const empty of empties) {
    empty.addEventListener('dragover', dragover);
    empty.addEventListener('dragenter', dragenter);
    empty.addEventListener('dragleave', dragleave);
    empty.addEventListener('drop', dragDrop);
}

function dragover(e) {
    e.preventDefault();
}

function dragenter(e) {
    e.preventDefault();
    this.classname += 'hovered';
}

function dragleave() {
    this.classname = 'empty';
}

function dragDrop() {
    this.classname = 'empty';
    this.append(fill);
}