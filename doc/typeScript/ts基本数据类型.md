# 1.增加数据类型
为了让程序有价值，我们需要能够处理最简单的数据单元：数字，字符串，结构体，布尔值等。 TypeScript支持与JavaScript几乎相同的数据类型。
## 1.1 布尔值
let isFlag: boolean = false;
## 1.2 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
## 1.3 字符串
let name: string = "bob";
JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 string表示文本数据类型。 和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。
**注意：曾经在别人的代码规范中看到，最好使用[单引号（'）] ,因为浏览器会把双引号转成单引号，直接用单引号效率会更高。** -------其实没有多大影响
## 1.4 使用模版字符串
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.
I'll be ${ age + 1 } years old next month.
## 1.5 数组
**方法一**
TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let list: number[] = [1, 2, 3];
**方法二**
第二种方式是使用数组泛型，Array<元素类型>：
let list: Array<number> = [1, 2, 3];
## 1.6 元组 Tuple
元组类型允许表示一个**已知元素数量和类型的数组**，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
## 1.7   枚举
感觉作用不大
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
## 1.8 Any
有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

## 1.9 Void
某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser(): void {
    alert("This is my warning message");
}
注意：声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable: void = undefined;

## 1.10 Null 和 Undefined

TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
##1.11Never
never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

下面是一些返回never类型的函数：
```
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
```
##1.12类型断言
有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是“尖括号”语法：
```
类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

另一个为as语法：
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
**注意:两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。**













