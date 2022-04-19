export class Checklist{
    #title;
    #maxItems=1;
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
    returnCheckslist(){
        return {
            title: this.#title,
            maxItems: this.#maxItems,
            listItems: this.#listItems
        }
    }
}