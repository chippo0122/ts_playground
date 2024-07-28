import './style.css';

const insertBtn: HTMLButtonElement | null = document.querySelector('.insertBtn');
const insertSlot: HTMLInputElement | null = document.querySelector('.insert-slot');
const items: NodeListOf<HTMLDivElement> | null =  document.querySelectorAll('.list-item');

interface Item {
    id: number,
    content: string,
    status: boolean,
}

const todos: Item[] = [];

const insert = (): void => {
    let text: string = '';

    if(insertSlot) {
        console.log(insertSlot.value);
        text = insertSlot.value;
        console.table(items);
    }
}

const init = (): void => {
    console.log('init');
    if(insertBtn) {
        insertBtn.addEventListener('click', insert)
    }
}

init();