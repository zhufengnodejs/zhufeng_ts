import  sinon from "sinon";
import { expect } from "chai";
import Todos from "../src/todos";
/**
describe("测试 Todos", () => {
  it("spy print", () => {
    let store = {save(){}};
    const t = new Todos(store);
    // 用 sinon.spy 监控 console.log 函数的执行，并不替换其原有的实现
    sinon.spy(console, "log");
    t.add("eat");
    t.add("sleep");
    t.print();
    // @ts-ignore console.log.calledOnce 无法识别 注释功能。这些注释是一种轻量级的方法来抑制下一行中出现的任何错误。
    // 如果 spy 监控的 console.log 函数刚好被调用一次，则返回 true
    expect(console.log.calledOnce).to.be.true;
  });
});

describe("测试 Todos", () => {
  it("stub", () => {
    let store = {save(){}};
    const todos = new Todos(store);
    // 用 stub 模拟 t.add 函数，stubAdd 函数被模拟为一个空函数
    const stubAdd = sinon.stub(todos, "add").callsFake(() => {});
    // 执行被模拟的 stubAdd 函数，这时候 'eat' 并没有被真正地 push
    stubAdd("eat");
    // 尝试打印，会打印出 []
    todos.print();
    // 我们期望 stubAdd 被执行了一次
    expect(stubAdd.calledOnce).to.be.true;
  });
});

 */
describe("测试 Todos", () => {
  it("mock", () => {
    let store = {save(){}};
    const todos = new Todos(store);
    // 这时候 console 已经被 mock 完全 mock 了
    // 这里可以调用console下的任何方法，但并不会执行
    const mock = sinon.mock(console);
    // 由于 console 已经完全被 mock了，所以我们这里可以提前描述我们预期的行为
    mock.expects("log").calledOnce;
    todos.add("eat");
    todos.print();
    // 校验
    mock.verify();
  });
});


