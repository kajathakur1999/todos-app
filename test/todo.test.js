const expect = require("chai").expect;
const Todo = require("../src/todo");

describe("Todo class", () => {
    //Arrange
    let todo;
    beforeEach(() => {
        todo = new Todo();
    })

    afterEach(() => {
        todo.resetTodoList();
    })

    it("Should add new item in TodoList", () => {
        //Act
        todo.addItem({label : "grocery"});
        todo.addItem({label : "shopping"});

        //Assert
       // expect(todo.getItem()).to.be.an("Array");
        expect(todo.getItem()).to.have.lengthOf(2);
    })

    it("Should remove item fro todolist based on index position", () => {
        todo.removeItem(0);
        expect(todo.getItem()).to.have.lengthOf(0);
    })
})