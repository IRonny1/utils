import LinkedList from "./LinkedList.js";

describe('Linked list tests', () => {
    describe('Should verify append method of linked list', () => {
        it('Should verify append method of linked list with integer data', () => {
            const linkedList = new LinkedList();

            linkedList.append(1).append(2).append(3);

            expect(linkedList.values()).toBe([1, 2, 3]);
        });
    })
})