class Form {
    username: Form.Item='';
    password: Form.Item='';
}
namespace Form {
    export class Item {}
}

function greeting(name: string): string {
    return greeting.words+name;
}

namespace greeting {
    export let words = "Hello,";
}

enum Color {
    red = 1,
    yellow = 2,
    blue = 3
}

namespace Color {
    export const green=4;
    export const purple=5;
}
console.log(Color.green)