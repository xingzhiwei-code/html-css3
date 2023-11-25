interface Article {
  title: string;
  content: string;
  author: string;
  date: Date;
  readCount: number;
}

/**
 * 用于获取某个对象的某个属性值时，提供类型提示
 * 知道不确定的对象中存在要访问属性的字段提示
 * @param obj
 * @param name
 */
export function getValue<T extends object, K extends keyof T>(obj: T, name: K): T[K] {
  return obj[name];
}

/**
 * 用于对现有接口生成指定内部属性为可选的新接口
 */
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;



/**
 * 从字段到函数推导
 */
type Watcher<T> = {
  on<K extends string & keyof T>(
    eventName: `${K}Changed`,
    callback: (oldValue: T[K], newValue: T[K]) => void
  ): void
}
declare function watch<T>(obj: T): Watcher<T>;

const personWatcher = watch({
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sex: "male",
})

personWatcher.on(
  'firstNameChanged',
  (oldValue, newValue) => {
    console.log(oldValue, newValue);
  }
)



/**
 * 训练灵活使用 infer 类型推断关键字
 * 
 * TS 内部已有实现 Returntypre 
 * 1. 拿到指定函数的返回类型
 * 2. 拿到Promise里面传入的范型值
 * 3. 拿到传入函数的第一个参数类型
 * 4. 拿到传入数组中的类型集合
 */
type Return<T> = T extends (...args: any[]) => infer R ? R : T;

type PromiseType<T> = T extends Promise<infer R> ? PromiseType<R> : T;
type pt = PromiseType<Promise<Promise<string>>>;

type FirstArg<T> = T extends (first: infer R, ...args: any[]) => any ? R : T;
type fa = FirstArg<(name: string, age: number) => void>

type ArrayType<T> = T extends Array<infer R> ? R : T;
type ItemType1 = ArrayType<string[]>;
type ItemType2 = ArrayType<[string, number, boolean]>;



/**
 * 为函数科里化做参数类型推断
 */
type Curried<A, R> = A extends []
  ? () => R
  : A extends [infer ARGF]
  ? (param: ARGF) => R
  : A extends [infer ARGF, ...infer REST]
  ? (param: ARGF) => Curried<REST, R>
  : never;

declare function curry<A extends any[], R>(fn: (...args: A) => R): Curried<A, R>;

function sum(a: string, b: number, c: object) {
  return 123;
}
const currySum = curry(sum);
currySum('dsf')(13)({});


