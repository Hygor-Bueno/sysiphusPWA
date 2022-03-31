export class Checklist{
    #title;
    #maxItems;
    #listItems={};
    
    getTitle() { return this.#title; }
    getMaxItems() { return this.#maxItems; }
    getListItems() { return this.#listItems; }

    setTitle(title) { this.#title = title; }
    setMaxItems(maxItems) { this.#maxItems = maxItems; }    
    setListItem(listItem) { this.#listItems = listItem; }

    addItemList(key,value){
        this.#listItems[key] = value;
    }
}