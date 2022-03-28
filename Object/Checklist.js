export class Checklist{
    #title;
    #maxItems;
    #description;
    #date;
    #level;
    #hourInit;
    #hourEnd;

    getTitle() { return this.#title; }
    getMaxItems() { return this.#maxItems; }
    getDescription() { return this.#description; }
    getDate() { return this.#date; }
    getLevel() { return this.#level; }
    getHourInit() { return this.#hourInit; }
    getHourEnd() { return this.#hourEnd; }

    setTitle(title) { this.#title = title; }
    setMaxItems(maxItems) { this.#maxItems = maxItems; }
    setDescription(description) { this.#description = description; }
    setDate(date) { this.#date = date; }
    setLevel(level) { this.#level = level; }
    setHourInit(hourInit) { this.#hourInit = hourInit; }
    setHourEnd(hourEnd) { this.#hourEnd = hourEnd; }

    
}