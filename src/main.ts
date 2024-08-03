import './style.css';

const insertBtn: HTMLButtonElement | null = document.querySelector('.insertBtn');
const insertSlot: HTMLInputElement | null = document.querySelector('.insert-slot');
const listContainer: HTMLDivElement | null = document.querySelector('.list');

interface Item {
    id: number,
    content: string,
    status: boolean,
}

class ListItem implements Item {
    id: number
    content: string
    status: boolean

    public constructor(item: Item) {
        this.id = item.id
        this.content = item.content
        this.status = item.status
    }

    public getItemDOM(): string {
        const dom = `
            <li class="list-item">
              <input class="check" type="checkbox" data-id="${this.id}" value="${this.status}">
              <p class="content">
                ${this.content}
              </p>
              <a class="del" data-id="${this.id}" href="javascript:void(0)">X</a>
            </li>
        `
        return dom
    }
}

const todos: ListItem[] = [];

const storeTodos = (item: ListItem): void => {
    todos.push(item);
    renderTodos();
}

const insert = (): void => {
    let text: string = '';

    if(insertSlot) {
        text = insertSlot.value;

        if(text) {
            const timestamp = Date.now()
            const item:Item = {
                id: timestamp,
                content: text,
                status: false
            }

            storeTodos(new ListItem(item));
        }
    }
}

const renderTodos = (): void => {
    let str: string = '';

    todos.forEach(el => {
        str += el.getItemDOM()
    })

    if(listContainer) {
        listContainer.innerHTML = str;
    }
}

const changeStatus = (id: string): void => {

}

const deleteItem = (id: string): void => {
    let idx: number = -1;

    todos.forEach((item, index) => {
        if(String(item.id) === id) {
            idx = index
        }
    })

    if(idx !== -1) {
        todos.splice(idx, 1)
        renderTodos()
    }
}

const behavior = (event: Event): void => {
    const { target } = event

    if(target instanceof HTMLElement) {
        if(target.classList.contains('del')) {
            const id: string = target.dataset.id || '';
            deleteItem(id)
        }

        if(target.classList.contains('check')) {
            const id: string = target.dataset.id || '';
            changeStatus(id)
        }
    }
}

const init = (): void => {
    if(insertBtn) {
        insertBtn.addEventListener('click', insert)
    }

    if(listContainer) {
        listContainer.addEventListener('click', behavior)
    }

    renderTodos();
}

init();