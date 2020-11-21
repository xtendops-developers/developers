---
id: code-review-reference
title: Code Review Reference
sidebar_label: Code Review Reference
slug: /documentations/code-review-reference
---

A masterlist of code review to make it easy for developers to pull up as reference.

[Proceed to Masterlist](#masterlist)

## Things to remember

* There is no perfect code: good enough is usually good enough. That being said, try to keep the number of WTFs per minute to a minimum.

![](https://i2.wp.com/commadot.com/wp-content/uploads/2009/02/wtf.png?w=550)

* Accept that many programming decisions are opinions.  Discuss tradeoffs, which you prefer, and reach a resolution quickly.
* Ask for clarification. ("I didn't understand. Can you clarify?")
* Offer clarification, explain the decisions you made to reach a solution in question.
* Avoid using terms that could be seen as referring to personal traits. ("dumb", "stupid"). Assume everyone is intelligent and well-meaning.
* Be humble. ("I'm not sure - let's look it up.")
* Don't use hyperbole. ("always", "never", "endlessly", "nothing") Don't use sarcasm.
* Remember that you're both on the same side - the goal is to make the code better. Understand that sometimes your ideas will be overruled. Even if you do turn out to be right, don't take revenge or say, "I told you so".
* Talk synchronously (e.g. chat, screensharing, in person) if there are too many "I didn't understand" or "Alternative solution:" comments. Pull requests should not be the place for long discussions, architectural or otherwise.
* Put notes on what's missing or could be improved in the PR description or comments. You can also make a Trello card with discussions points and possible problems or things to do and discuss it offline.

## As a code submitter

* PRs should be about one thing. If you do multiple things in one PR, it's hard to review. If you're fixing stuff as you go, you might want to make atomic commits and then cherry-pick those commits into separate branches, leaving the PR clean.
* Try to keep the PRs small. There has been some research to indicate that beyond 400 LOC the ability to detect defects diminishes. (We're talking about LOC proper, unit tests and layouts don't count)
* Having a PR description is useful. Additionally, you can also link to the card on Trello.
* Ideally, the PR should be finished when submitted. If the PR is work in progress, add (WIP) or [WIP] to the title. 
* You should have tests that at least cover the logic, and ideally also cover the input/output parameters and methods. (depends on context)

## As a reviewer

* Reviewing code is part of a normal workday. You should check for open/updated PRs at least once a day. 
* Ask, don’t tell. (“What do you think about trying…?” rather than “Don’t do…”)
* Offer ways to simplify or improve code.
* Code beautification and refactoring ought to be tasks in the next sprint, except for obvious and easy-to-fix things.
* Communicate which ideas you feel strongly about and those you don't. Explain your reasons why code should be changed. (Not in line with the style guide? A personal preference?)
* If you disagree strongly, consider giving it a few minutes before responding; think before you react.
* Offer alternative implementations, but assume the author already considered them. ("What do you think about using a custom validator here?")
* If discussions turn too theoretical or touch big architectural questions, move the discussion offline. In the meantime, let the author make the final decision on alternative implementations.
* Don't keep the code hostage. Keep in mind the context and the most important thing - does it work?

## Responding to feedback

* Try to respond to every comment. Be grateful for the reviewer's suggestions. ("Good call. I'll make that change.")
* Be aware of how hard it is to convey emotion online and how easy it is to misinterpret feedback. If a review seems aggressive or angry or otherwise personal, consider if it is intended to be read that way and ask the person for clarification of intent, in person if possible.
* Link to any follow up commits or Pull Requests. (“Good call! Done in 1682851”)
* Wait to merge the branch until Continuous Integration tells you the test suite is green in the branch. Merge once you feel confident in the code and its impact on the project.

## Masterlist

> TIP: Clicking the `#` beside the title will create an appended URL link. The generated URL will provide a redirect to the section.

Table of Contents

* [1.0 General](#1.0-general)
* [2.0 Code](#2.0-code)
* [3.0 Frontend](#3.0-frontend)
* [4.0 Backend](#4.0-backend)
* [5.0 DevOps](#5.0-devops)
* [6.0 Security](#6.0-security)
* [7.0 Testing](#7.0-testing)
* [8.0 Database](#8.0-database)
* [9.0 Blacklisted](#9.0-blacklisted)

### 1.0 General

---

* 1.1 Apply KISS principle

    KISS, an acronym for &quot;keep it simple, stupid&quot; or &quot;keep it stupid simple&quot;, is a design principle noted by the U.S. Navy in 1960. The KISS principle states that most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design, and unnecessary complexity should be avoided. The phrase has been associated with aircraft engineer Kelly Johnson. The term &quot;KISS principle&quot; was in popular use by 1970. Variations on the phrase include: &quot;Keep it simple, silly&quot;, &quot;keep it short and simple&quot;, &quot;keep it simple and straightforward&quot;, &quot;keep it small and simple&quot;, or &quot;keep it stupid simple&quot;.

    refer: https://en.wikipedia.org/wiki/KISS_principle

* 1.2 BEM Model

    We utilize the BEM model in our CSS naming convention. BEM stands for Block, Element, and Modifier. It’s a CSS naming convention for writing cleaner and more readable CSS classes.

    refer: http://getbem.com/introduction/ | https://codeburst.io/understanding-css-bem-naming-convention-a8cca116d252

* 1.3 DRY(Don't Repeat Yourself)

    Don&#39;t repeat yourself (DRY, or sometimes do not repeat yourself) is a principle of software development aimed at reducing repetition of software patterns, replacing it with abstractions or using data normalization to avoid redundancy. The DRY principle is stated as &quot;Every piece of knowledge must have a single, unambiguous, authoritative representation within a system&quot;. The principle has been formulated by Andy Hunt and Dave Thomas in their book The Pragmatic Programmer. They apply it quite broadly to include &quot;database schemas, test plans, the build system, even documentation&quot;. When the DRY
    principle is applied successfully, a modification of any single element of a system does not require a change in other logically unrelated elements. Additionally, elements that are logically related all change predictably and uniformly, and are thus kept in sync. Besides using methods and subroutines in their code, Thomas and Hunt rely on code generators, automatic build
    systems, and scripting languages to observe the DRY principle across layers.

    refer: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

* 1.4 SOLID(Single Responsibility Principle (SRP))

    As stated in Clean Code, "There should never be more than one reason for a class to change". It's tempting to jam-pack a class with a lot of functionality, like when you can only take one suitcase on your flight. The issue with this is that your class won't be conceptually cohesive and it will give it many reasons to change. Minimizing the amount of times you need to change a class is important. It's important because if too much functionality is in one class and you modify a piece of it, it can be difficult to understand how that will affect other dependent modules in your codebase.

    **Bad:**

    ```ts
    class UserSettings {
    constructor(private readonly user: User) {
    }

    changeSettings(settings: UserSettings) {
        if (this.verifyCredentials()) {
        // ...
        }
    }

    verifyCredentials() {
        // ...
    }
    }
    ```

    **Good:**

    ```ts
    class UserAuth {
    constructor(private readonly user: User) {
    }

    verifyCredentials() {
        // ...
    }
    }


    class UserSettings {
    private readonly auth: UserAuth;

    constructor(private readonly user: User) {
        this.auth = new UserAuth(user);
    }

    changeSettings(settings: UserSettings) {
        if (this.auth.verifyCredentials()) {
        // ...
        }
    }
    }
    ```

* 1.5 Open/Closed Principle (OCP)

    As stated by Bertrand Meyer, "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification." What does that mean though? This principle basically states that you should allow users to add new functionalities without changing existing code.

    **Bad:**

    ```ts
    class AjaxAdapter extends Adapter {
    constructor() {
        super();
    }

    // ...
    }

    class NodeAdapter extends Adapter {
    constructor() {
        super();
    }

    // ...
    }

    class HttpRequester {
    constructor(private readonly adapter: Adapter) {
    }

    async fetch<T>(url: string): Promise<T> {
        if (this.adapter instanceof AjaxAdapter) {
        const response = await makeAjaxCall<T>(url);
        // transform response and return
        } else if (this.adapter instanceof NodeAdapter) {
        const response = await makeHttpCall<T>(url);
        // transform response and return
        }
    }
    }

    function makeAjaxCall<T>(url: string): Promise<T> {
    // request and return promise
    }

    function makeHttpCall<T>(url: string): Promise<T> {
    // request and return promise
    }
    ```

    **Good:**

    ```ts
    abstract class Adapter {
    abstract async request<T>(url: string): Promise<T>;

    // code shared to subclasses ...
    }

    class AjaxAdapter extends Adapter {
    constructor() {
        super();
    }

    async request<T>(url: string): Promise<T>{
        // request and return promise
    }

    // ...
    }

    class NodeAdapter extends Adapter {
    constructor() {
        super();
    }

    async request<T>(url: string): Promise<T>{
        // request and return promise
    }

    // ...
    }

    class HttpRequester {
    constructor(private readonly adapter: Adapter) {
    }

    async fetch<T>(url: string): Promise<T> {
        const response = await this.adapter.request<T>(url);
        // transform response and return
    }
    }
    ```

* 1.6 Liskov Substitution Principle (LSP)

    This is a scary term for a very simple concept. It's formally defined as "If S is a subtype of T, then objects of type T may be replaced with objects of type S (i.e., objects of type S may substitute objects of type T) without altering any of the desirable properties of that program (correctness, task performed, etc.)." That's an even scarier definition.  
    
    The best explanation for this is if you have a parent class and a child class, then the parent class and child class can be used interchangeably without getting incorrect results. This might still be confusing, so let's take a look at the classic Square-Rectangle example. Mathematically, a square is a rectangle, but if you model it using the "is-a" relationship via inheritance, you quickly get into trouble.

    **Bad:**

    ```ts
    class Rectangle {
    constructor(
        protected width: number = 0,
        protected height: number = 0) {

    }

    setColor(color: string): this {
        // ...
    }

    render(area: number) {
        // ...
    }

    setWidth(width: number): this {
        this.width = width;
        return this;
    }

    setHeight(height: number): this {
        this.height = height;
        return this;
    }

    getArea(): number {
        return this.width * this.height;
    }
    }

    class Square extends Rectangle {
    setWidth(width: number): this {
        this.width = width;
        this.height = width;
        return this;
    }

    setHeight(height: number): this {
        this.width = height;
        this.height = height;
        return this;
    }
    }

    function renderLargeRectangles(rectangles: Rectangle[]) {
    rectangles.forEach((rectangle) => {
        const area = rectangle
        .setWidth(4)
        .setHeight(5)
        .getArea(); // BAD: Returns 25 for Square. Should be 20.
        rectangle.render(area);
    });
    }

    const rectangles = [new Rectangle(), new Rectangle(), new Square()];
    renderLargeRectangles(rectangles);
    ```

    **Good:**

    ```ts
    abstract class Shape {
    setColor(color: string): this {
        // ...
    }

    render(area: number) {
        // ...
    }

    abstract getArea(): number;
    }

    class Rectangle extends Shape {
    constructor(
        private readonly width = 0,
        private readonly height = 0) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
    }

    class Square extends Shape {
    constructor(private readonly length: number) {
        super();
    }

    getArea(): number {
        return this.length * this.length;
    }
    }

    function renderLargeShapes(shapes: Shape[]) {
    shapes.forEach((shape) => {
        const area = shape.getArea();
        shape.render(area);
    });
    }

    const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
    renderLargeShapes(shapes);
    ```

* 1.7 Interface Segregation Principle (ISP)

    ISP states that "Clients should not be forced to depend upon interfaces that they do not use.". This principle is very much related to the Single Responsibility Principle.
    What it really means is that you should always design your abstractions in a way that the clients that are using the exposed methods do not get the whole pie instead. That also include imposing the clients with the burden of implementing methods that they don’t actually need.

    **Bad:**

    ```ts
    interface SmartPrinter {
    print();
    fax();
    scan();
    }

    class AllInOnePrinter implements SmartPrinter {
    print() {
        // ...
    }  

    fax() {
        // ...
    }

    scan() {
        // ...
    }
    }

    class EconomicPrinter implements SmartPrinter {
    print() {
        // ...
    }  

    fax() {
        throw new Error('Fax not supported.');
    }

    scan() {
        throw new Error('Scan not supported.');
    }
    }
    ```

    **Good:**

    ```ts
    interface Printer {
    print();
    }

    interface Fax {
    fax();
    }

    interface Scanner {
    scan();
    }

    class AllInOnePrinter implements Printer, Fax, Scanner {
    print() {
        // ...
    }  

    fax() {
        // ...
    }

    scan() {
        // ...
    }
    }

    class EconomicPrinter implements Printer {
    print() {
        // ...
    }
    }
    ```

* 1.8 Dependency Inversion Principle (DIP)

    This principle states two essential things:

    1. High-level modules should not depend on low-level modules. Both should depend on abstractions.

    2. Abstractions should not depend upon details. Details should depend on abstractions.

    This can be hard to understand at first, but if you've worked with Angular, you've seen an implementation of this principle in the form of Dependency Injection (DI). While they are not identical concepts, DIP keeps high-level modules from knowing the details of its low-level modules and setting them up. It can accomplish this through DI. A huge benefit of this is that it reduces the coupling between modules. Coupling is a very bad development pattern because it makes your code hard to refactor.  

    DIP is usually achieved by a using an inversion of control (IoC) container. An example of a powerful IoC container for TypeScript is [InversifyJs](https://www.npmjs.com/package/inversify)

    **Bad:**

    ```ts
    import { readFile as readFileCb } from 'fs';
    import { promisify } from 'util';

    const readFile = promisify(readFileCb);

    type ReportData = {
    // ..
    }

    class XmlFormatter {
    parse<T>(content: string): T {
        // Converts an XML string to an object T
    }
    }

    class ReportReader {

    // BAD: We have created a dependency on a specific request implementation.
    // We should just have ReportReader depend on a parse method: `parse`
    private readonly formatter = new XmlFormatter();

    async read(path: string): Promise<ReportData> {
        const text = await readFile(path, 'UTF8');
        return this.formatter.parse<ReportData>(text);
    }
    }

    // ...
    const reader = new ReportReader();
    await report = await reader.read('report.xml');
    ```

    **Good:**

    ```ts
    import { readFile as readFileCb } from 'fs';
    import { promisify } from 'util';

    const readFile = promisify(readFileCb);

    type ReportData = {
    // ..
    }

    interface Formatter {
    parse<T>(content: string): T;
    }

    class XmlFormatter implements Formatter {
    parse<T>(content: string): T {
        // Converts an XML string to an object T
    }
    }


    class JsonFormatter implements Formatter {
    parse<T>(content: string): T {
        // Converts a JSON string to an object T
    }
    }

    class ReportReader {
    constructor(private readonly formatter: Formatter) {
    }

    async read(path: string): Promise<ReportData> {
        const text = await readFile(path, 'UTF8');
        return this.formatter.parse<ReportData>(text);
    }
    }

    // ...
    const reader = new ReportReader(new XmlFormatter());
    await report = await reader.read('report.xml');

    // or if we had to read a json report
    const reader = new ReportReader(new JsonFormatter());
    await report = await reader.read('report.json');
    ```

* 1.9 JSDoc

    Is a docuentation pattern widely used by the open source community. JSDoc's purpose is to document the API of your JavaScript application or library. It is assumed that you will want to document things like modules, namespaces, classes, methods, method parameters, and so on.

    Sample Usage:

    ```ts
    /**
    * Represents a book.
    * @constructor
    * @param {string} title - The title of the book.
    * @param {string} author - The author of the book.
    */
    function ExampleFunction(title, author) {
    }
    ```

    If your codebase is geared towards scaling. Make sure to utilize this approach.

    Read more here: https://jsdoc.app/

* 1.10 ESLint rules

    We highly abide the eslint configuration usually found in the root folder. Usage of `eslint-disable` should be minimize.

    refer: https://eslint.org/

* 1.11 Commit pattern

    refer: https://github.com/xtendops-developers/docs/blob/master/commits.md

* 1.12 Branch naming

    refer: https://github.com/xtendops-developers/docs/blob/master/branch.md

* 1.13 Versioning follows Semver format

    refer: https://semver.org/

* 1.14 Comment tagging

    To make it easier for us to search existing todos or bug in the code base. Kindly follow the folloing tagging format:

    ```ts
    /*
    * TODO | NOTE | BUG
    *
    * Description of the above
    */
    ```

    *Why `TODO` ?*

    Most IDE have special support for those kind of comments so that
    you can quickly go over the entire list of todos.  

    **Bad:**

    ```ts
    function getActiveSubscriptions(): Promise<Subscription[]> {
    // ensure `dueDate` is indexed.
    return db.subscriptions.find({ dueDate: { $lte: new Date() } });
    }
    ```

    **Good:**

    ```ts
    function getActiveSubscriptions(): Promise<Subscription[]> {
    // TODO: ensure `dueDate` is indexed.
    return db.subscriptions.find({ dueDate: { $lte: new Date() } });
    }

* 1.15 Follow the existing folder structure. If you have revision or addition. Please consult the team for approval.

* 1.16 Make use of lodash for your helper function needs

    https://lodash.com/

### 2.0 Code

---

* 2.1 Use meaningful variable names

    Distinguish names in such a way that the reader knows what the differences offer.

    **Bad:**

    ```ts
    function between<T>(a1: T, a2: T, a3: T): boolean {
    return a2 <= a1 && a1 <= a3;
    }

    ```

    **Good:**

    ```ts
    function between<T>(value: T, left: T, right: T): boolean {
    return left <= value && value <= right;
    }
    ```

* 2.2 Use pronounceable variable names

    If you can’t pronounce it, you can’t discuss it without sounding like an idiot.

    **Bad:**

    ```ts
    type DtaRcrd102 = {
    genymdhms: Date;
    modymdhms: Date;
    pszqint: number;
    }
    ```

    **Good:**

    ```ts
    type Customer = {
    generationTimestamp: Date;
    modificationTimestamp: Date;
    recordId: number;
    }
    ```

* 2.3 Use the same vocabulary for the same type of variable

    **Bad:**

    ```ts
    function getUserInfo(): User;
    function getUserDetails(): User;
    function getUserData(): User;
    ```

    **Good:**

    ```ts
    function getUser(): User;
    ```

* 2.4 Use searchable names

    We will read more code than we will ever write. It's important that the code we do write is readable and searchable. By *not* naming variables that end up being meaningful for understanding our program, we hurt our readers. Make your names searchable. Tools like [TSLint](https://palantir.github.io/tslint/rules/no-magic-numbers/) can help identify unnamed constants.

    **Bad:**

    ```ts
    // What the heck is 86400000 for?
    setTimeout(restart, 86400000);
    ```

    **Good:**

    ```ts
    // Declare them as capitalized named constants.
    const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;

    setTimeout(restart, MILLISECONDS_IN_A_DAY);
    ```

* 2.5 se explanatory variables

    **Bad:**

    ```ts
    declare const users: Map<string, User>;

    for (const keyValue of users) {
    // iterate through users map
    }
    ```

    **Good:**

    ```ts
    declare const users: Map<string, User>;

    for (const [id, user] of users) {
    // iterate through users map
    }
    ```

* 2.6 Avoid Mental Mapping

    Explicit is better than implicit.  
    *Clarity is king.*

    **Bad:**

    ```ts
    const u = getUser();
    const s = getSubscription();
    const t = charge(u, s);
    ```

    **Good:**

    ```ts
    const user = getUser();
    const subscription = getSubscription();
    const transaction = charge(user, subscription);
    ```

* 2.7 Don't add unneeded context

    If your class/object name tells you something, don't repeat that in your
    variable name.

    **Bad:**

    ```ts
    type Car = {
    carMake: string;
    carModel: string;
    carColor: string;
    }

    function print(car: Car): void {
    console.log(`${car.carMake} ${car.carModel} (${car.carColor})`);
    }
    ```

    **Good:**

    ```ts
    type Car = {
    make: string;
    model: string;
    color: string;
    }

    function print(car: Car): void {
    console.log(`${car.make} ${car.model} (${car.color})`);
    }
    ```

* 2.8 Use default arguments instead of short circuiting or conditionals

    Default arguments are often cleaner than short circuiting. Be aware that if you
    use them, your function will only provide default values for `undefined`
    arguments. Other "falsy" values such as `''`, `""`, `false`, `null`, `0`, and
    `NaN`, will not be replaced by a default value.

    **Bad:**

    ```ts
    function loadPages(count?: number) {
    const loadCount = count !== undefined ? count : 10;
    // ...
    }
    ```

    **Good:**

    ```ts
    function loadPages(count: number = 10) {
    // ...
    }
    ```

* 2.9 Function arguments (2 or fewer ideally)

    Limiting the amount of function parameters is incredibly important because it
    makes testing your function easier. Having more than three leads to a
    combinatorial explosion where you have to test tons of different cases with
    each separate argument.

    One or two arguments is the ideal case, and three should be avoided if possible.
    Anything more than that should be consolidated. Usually, if you have
    more than two arguments then your function is trying to do too much. In cases
    where it's not, most of the time a higher-level object will suffice as an
    argument.

    Since JavaScript allows you to make objects on the fly, without a lot of class
    boilerplate, you can use an object if you are finding yourself needing a
    lot of arguments.

    To make it obvious what properties the function expects, you can use the ES2015/ES6
    destructuring syntax. This has a few advantages:

    1. When someone looks at the function signature, it's immediately clear what
    properties are being used.
    2. It can be used to simulate named parameters.
    3. Destructuring also clones the specified primitive values of the argument
    object passed into the function. This can help prevent side effects. Note:
    objects and arrays that are destructured from the argument object are NOT
    cloned.
    4. Linters can warn you about unused properties, which would be impossible
    without destructuring.

    **Bad:**

    ```ts
    function createMenu(title: string, body: string, buttonText: string, cancellable: boolean) {
    // ...
    }

    createMenu('Foo', 'Bar', 'Baz', true);
    ```

    **Good:**

    ```ts
    function createMenu(options: { title: string, body: string, buttonText: string, cancellable: boolean }) {
    // ...
    }

    createMenu({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
    });
    ```

    You can further improve readability by using [type aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases):

    ```ts

    type MenuOptions = { title: string, body: string, buttonText: string, cancellable: boolean };

    function createMenu(options: MenuOptions) {
    // ...
    }

    createMenu({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
    });
    ```

* 2.10 Functions should do one thing

    This is by far the most important rule in software engineering. When functions
    do more than one thing, they are harder to compose, test, and reason about.
    When you can isolate a function to just one action, it can be refactored
    easily and your code will read much cleaner. If you take nothing else away from
    this guide other than this, you'll be ahead of many developers.

   **Bad:**

    ```ts
    function emailClients(clients: Client[]) {
    clients.forEach((client) => {
        const clientRecord = database.lookup(client);
        if (clientRecord.isActive()) {
        email(client);
        }
    });
    }
    ```

    **Good:**

    ```ts
    function emailClients(clients: Client[]) {
    clients.filter(isActiveClient).forEach(email);
    }

    function isActiveClient(client: Client) {
    const clientRecord = database.lookup(client);
    return clientRecord.isActive();
    }
    ```

* 2.11 Function names should say what they do

    **Bad:**

    ```ts
    function addToDate(date: Date, month: number): Date {
    // ...
    }

    const date = new Date();

    // It's hard to tell from the function name what is added
    addToDate(date, 1);
    ```

    **Good:**

    ```ts
    function addMonthToDate(date: Date, month: number): Date {
    // ...
    }

    const date = new Date();
    addMonthToDate(date, 1);
    ```

* 2.12 Functions should only be one level of abstraction

    When you have more than one level of abstraction your function is usually
    doing too much. Splitting up functions leads to reusability and easier
    testing.

    **Bad:**

    ```ts
    function parseCode(code: string) {
    const REGEXES = [ /* ... */ ];
    const statements = code.split(' ');
    const tokens = [];

    REGEXES.forEach((regex) => {
        statements.forEach((statement) => {
        // ...
        });
    });

    const ast = [];
    tokens.forEach((token) => {
        // lex...
    });

    ast.forEach((node) => {
        // parse...
    });
    }
    ```

    **Good:**

    ```ts
    const REGEXES = [ /* ... */ ];

    function parseCode(code: string) {
    const tokens = tokenize(code);
    const syntaxTree = parse(tokens);

    syntaxTree.forEach((node) => {
        // parse...
    });
    }

    function tokenize(code: string): Token[] {
    const statements = code.split(' ');
    const tokens: Token[] = [];

    REGEXES.forEach((regex) => {
        statements.forEach((statement) => {
        tokens.push( /* ... */ );
        });
    });

    return tokens;
    }

    function parse(tokens: Token[]): SyntaxTree {
    const syntaxTree: SyntaxTree[] = [];
    tokens.forEach((token) => {
        syntaxTree.push( /* ... */ );
    });

    return syntaxTree;
    }
    ```

* 2.13 Remove duplicate code

    Do your absolute best to avoid duplicate code. Duplicate code is bad because it
    means that there's more than one place to alter something if you need to change
    some logic.

    Imagine if you run a restaurant and you keep track of your inventory: all your
    tomatoes, onions, garlic, spices, etc. If you have multiple lists that
    you keep this on, then all have to be updated when you serve a dish with
    tomatoes in them. If you only have one list, there's only one place to update!

    Oftentimes you have duplicate code because you have two or more slightly
    different things, that share a lot in common, but their differences force you
    to have two or more separate functions that do much of the same things. Removing
    duplicate code means creating an abstraction that can handle this set of
    different things with just one function/module/class.

    Getting the abstraction right is critical, that's why you should follow the
    SOLID principles laid out in the _Classes_ section. Bad abstractions can be
    worse than duplicate code, so be careful! Having said this, if you can make
    a good abstraction, do it! Don't repeat yourself, otherwise you'll find yourself
    updating multiple places anytime you want to change one thing.

    **Bad:**

    ```ts
    function showDeveloperList(developers: Developer[]) {
    developers.forEach((developer) => {
        const expectedSalary = developer.calculateExpectedSalary();
        const experience = developer.getExperience();
        const githubLink = developer.getGithubLink();

        const data = {
        expectedSalary,
        experience,
        githubLink
        };

        render(data);
    });
    }

    function showManagerList(managers: Manager[]) {
    managers.forEach((manager) => {
        const expectedSalary = manager.calculateExpectedSalary();
        const experience = manager.getExperience();
        const portfolio = manager.getMBAProjects();

        const data = {
        expectedSalary,
        experience,
        portfolio
        };

        render(data);
    });
    }
    ```

    **Good:**

    ```ts
    class Developer {
    // ...
    getExtraDetails() {
        return {
        githubLink: this.githubLink,
        }
    }
    }

    class Manager {
    // ...
    getExtraDetails() {
        return {
        portfolio: this.portfolio,
        }
    }
    }

    function showEmployeeList(employee: Developer | Manager) {
    employee.forEach((employee) => {
        const expectedSalary = employee.calculateExpectedSalary();
        const experience = employee.getExperience();
        const extra = employee.getExtraDetails();

        const data = {
        expectedSalary,
        experience,
        extra,
        };

        render(data);
    });
    }
    ```

    You should be critical about code duplication. Sometimes there is a tradeoff between duplicated code and increased complexity by introducing unnecessary abstraction. When two implementations from two different modules look similar but live in different domains, duplication might be acceptable and preferred over extracting the common code. The extracted common code in this case introduces an indirect dependency between the two modules.

* 2.14 Set default objects with Object.assign

   **Bad:**

    ```ts
    type MenuConfig = { title?: string, body?: string, buttonText?: string, cancellable?: boolean };

    function createMenu(config: MenuConfig) {
    config.title = config.title || 'Foo';
    config.body = config.body || 'Bar';
    config.buttonText = config.buttonText || 'Baz';
    config.cancellable = config.cancellable !== undefined ? config.cancellable : true;

    // ...
    }

    createMenu({ body: 'Bar' });
    ```

    **Good:**

    ```ts
    type MenuConfig = { title?: string, body?: string, buttonText?: string, cancellable?: boolean };

    function createMenu(config: MenuConfig) {
    const menuConfig = Object.assign({
        title: 'Foo',
        body: 'Bar',
        buttonText: 'Baz',
        cancellable: true
    }, config);

    // ...
    }

    createMenu({ body: 'Bar' });
    ```

    Alternatively, you can use destructuring with default values:

    ```ts
    type MenuConfig = { title?: string, body?: string, buttonText?: string, cancellable?: boolean };

    function createMenu({ title = 'Foo', body = 'Bar', buttonText = 'Baz', cancellable = true }: MenuConfig) {
    // ...
    }

    createMenu({ body: 'Bar' });
    ```

    To avoid any side effects and unexpected behavior by passing in explicitly the `undefined` or `null` value, you can tell the TypeScript compiler to not allow it.
    See [`--strictNullChecks`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#--strictnullchecks) option in TypeScript.

* 2.15 Don't use flags as function parameters

    Flags tell your user that this function does more than one thing. Functions should do one thing. Split out your functions if they are following different code paths based on a boolean.

    **Bad:**

    ```ts
    function createFile(name: string, temp: boolean) {
    if (temp) {
        fs.create(`./temp/${name}`);
    } else {
        fs.create(name);
    }
    }
    ```

    **Good:**

    ```ts
    function createTempFile(name: string) {
    createFile(`./temp/${name}`);
    }

    function createFile(name: string) {
    fs.create(name);
    }
    ```

* 2.16 Avoid Side Effects (part 1)

    A function produces a side effect if it does anything other than take a value in
    and return another value or values. A side effect could be writing to a file,
    modifying some global variable, or accidentally wiring all your money to a
    stranger.

    Now, you do need to have side effects in a program on occasion. Like the previous
    example, you might need to write to a file. What you want to do is to
    centralize where you are doing this. Don't have several functions and classes
    that write to a particular file. Have one service that does it. One and only one.

    The main point is to avoid common pitfalls like sharing state between objects
    without any structure, using mutable data types that can be written to by anything,
    and not centralizing where your side effects occur. If you can do this, you will
    be happier than the vast majority of other programmers.

    **Bad:**

    ```ts
    // Global variable referenced by following function.
    let name = 'Robert C. Martin';

    function toBase64() {
    name = btoa(name);
    }

    toBase64();
    // If we had another function that used this name, now it'd be a Base64 value

    console.log(name); // expected to print 'Robert C. Martin' but instead 'Um9iZXJ0IEMuIE1hcnRpbg=='
    ```

    **Good:**

    ```ts
    const name = 'Robert C. Martin';

    function toBase64(text: string): string {
    return btoa(text);
    }

    const encodedName = toBase64(name);
    console.log(name);
    ```

* 2.17 Avoid Side Effects (part 2)

    In JavaScript, some values are unchangeable (immutable) and some are changeable 
    (mutable). Objects and arrays are two kinds of mutable values so it's important 
    to handle them carefully when they're passed as parameters to a function. A 
    JavaScript function can change an object's properties or alter the contents of 
    an array which could easily cause bugs elsewhere.

    Suppose there's a function that accepts an array parameter representing a 
    shopping cart. If the function makes a change in that shopping cart array - 
    by adding an item to purchase, for example - then any other function that 
    uses that same `cart` array will be affected by this addition. That may be 
    great, however it could also be bad. Let's imagine a bad situation:

    The user clicks the "Purchase" button which calls a `purchase` function that
    spawns a network request and sends the `cart` array to the server. Because
    of a bad network connection, the `purchase` function has to keep retrying the
    request. Now, what if in the meantime the user accidentally clicks an "Add to Cart"
    button on an item they don't actually want before the network request begins?
    If that happens and the network request begins, then that purchase function
    will send the accidentally added item because the `cart` array was modified.

    A great solution would be for the `addItemToCart` function to always clone the 
    `cart`, edit it, and return the clone. This would ensure that functions that are still
    using the old shopping cart wouldn't be affected by the changes.

    Two caveats to mention to this approach:

    1. There might be cases where you actually want to modify the input object,
    but when you adopt this programming practice you will find that those cases
    are pretty rare. Most things can be refactored to have no side effects!

    2. Cloning big objects can be very expensive in terms of performance. Luckily,
    this isn't a big issue in practice because there are
    [great libraries](https://facebook.github.io/immutable-js/) that allow
    this kind of programming approach to be fast and not as memory intensive as
    it would be for you to manually clone objects and arrays.

    **Bad:**

    ```ts
    function addItemToCart(cart: CartItem[], item: Item): void {
    cart.push({ item, date: Date.now() });
    };
    ```

    **Good:**

    ```ts
    function addItemToCart(cart: CartItem[], item: Item): CartItem[] {
    return [...cart, { item, date: Date.now() }];
    };
    ```

* 2.18 Don't write to global functions

    Polluting globals is a bad practice in JavaScript because you could clash with another
    library and the user of your API would be none-the-wiser until they get an
    exception in production. Let's think about an example: what if you wanted to
    extend JavaScript's native Array method to have a `diff` method that could
    show the difference between two arrays? You could write your new function
    to the `Array.prototype`, but it could clash with another library that tried
    to do the same thing. What if that other library was just using `diff` to find
    the difference between the first and last elements of an array? This is why it
    would be much better to just use ES2015/ES6 classes and simply extend the `Array` global.

    **Bad:**

    ```ts
    declare global {
    interface Array<T> {
        diff(other: T[]): Array<T>;
    }
    }

    if (!Array.prototype.diff) {
    Array.prototype.diff = function <T>(other: T[]): T[] {
        const hash = new Set(other);
        return this.filter(elem => !hash.has(elem));
    };
    }
    ```

    **Good:**

    ```ts
    class MyArray<T> extends Array<T> {
    diff(other: T[]): T[] {
        const hash = new Set(other);
        return this.filter(elem => !hash.has(elem));
    };
    }
    ```

* 2.19 Favor functional programming over imperative programming

    JavaScript isn't a functional language in the way that Haskell is, but it has
    a functional flavor to it. Functional languages can be cleaner and easier to test.
    Favor this style of programming when you can.

    **Bad:**

    ```ts
    const contributions = [
    {
        name: 'Uncle Bobby',
        linesOfCode: 500
    }, {
        name: 'Suzie Q',
        linesOfCode: 1500
    }, {
        name: 'Jimmy Gosling',
        linesOfCode: 150
    }, {
        name: 'Gracie Hopper',
        linesOfCode: 1000
    }
    ];

    let totalOutput = 0;

    for (let i = 0; i < contributions.length; i++) {
    totalOutput += contributions[i].linesOfCode;
    }
    ```

    **Good:**

    ```ts
    const contributions = [
    {
        name: 'Uncle Bobby',
        linesOfCode: 500
    }, {
        name: 'Suzie Q',
        linesOfCode: 1500
    }, {
        name: 'Jimmy Gosling',
        linesOfCode: 150
    }, {
        name: 'Gracie Hopper',
        linesOfCode: 1000
    }
    ];

    const totalOutput = contributions
    .reduce((totalLines, output) => totalLines + output.linesOfCode, 0);
    ```

* 2.20 Encapsulate conditionals

    **Bad:**

    ```ts
    if (subscription.isTrial || account.balance > 0) {
    // ...
    }
    ```

    **Good:**

    ```ts
    function canActivateService(subscription: Subscription, account: Account) {
    return subscription.isTrial || account.balance > 0;
    }

    if (canActivateService(subscription, account)) {
    // ...
    }
    ```

* 2.20 Avoid negative conditionals

    **Bad:**

    ```ts
    function isEmailNotUsed(email: string): boolean {
    // ...
    }

    if (isEmailNotUsed(email)) {
    // ...
    }
    ```

    **Good:**

    ```ts
    function isEmailUsed(email: string): boolean {
    // ...
    }

    if (!isEmailUsed(node)) {
    // ...
    }
    ```

* 2.20 Avoid conditionals

    This seems like an impossible task. Upon first hearing this, most people say,
    "how am I supposed to do anything without an `if` statement?" The answer is that
    you can use polymorphism to achieve the same task in many cases. The second
    question is usually, "well that's great but why would I want to do that?" The
    answer is a previous clean code concept we learned: a function should only do
    one thing. When you have classes and functions that have `if` statements, you
    are telling your user that your function does more than one thing. Remember,
    just do one thing.

    **Bad:**

    ```ts
    class Airplane {
    private type: string;
    // ...

    getCruisingAltitude() {
        switch (this.type) {
        case '777':
            return this.getMaxAltitude() - this.getPassengerCount();
        case 'Air Force One':
            return this.getMaxAltitude();
        case 'Cessna':
            return this.getMaxAltitude() - this.getFuelExpenditure();
        default:
            throw new Error('Unknown airplane type.');
        }
    }

    private getMaxAltitude(): number {
        // ...
    }
    }
    ```

    **Good:**

    ```ts
    abstract class Airplane {
    protected getMaxAltitude(): number {
        // shared logic with subclasses ...
    }

    // ...
    }

    class Boeing777 extends Airplane {
    // ...
    getCruisingAltitude() {
        return this.getMaxAltitude() - this.getPassengerCount();
    }
    }

    class AirForceOne extends Airplane {
    // ...
    getCruisingAltitude() {
        return this.getMaxAltitude();
    }
    }

    class Cessna extends Airplane {
    // ...
    getCruisingAltitude() {
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
    }
    ```

* 2.21 Avoid type checking

    TypeScript is a strict syntactical superset of JavaScript and adds optional static type checking to the language.
    Always prefer to specify types of variables, parameters and return values to leverage the full power of TypeScript features.
    It makes refactoring more easier.

    **Bad:**

    ```ts
    function travelToTexas(vehicle: Bicycle | Car) {
    if (vehicle instanceof Bicycle) {
        vehicle.pedal(currentLocation, new Location('texas'));
    } else if (vehicle instanceof Car) {
        vehicle.drive(currentLocation, new Location('texas'));
    }
    }
    ```

    **Good:**

    ```ts
    type Vehicle = Bicycle | Car;

    function travelToTexas(vehicle: Vehicle) {
    vehicle.move(currentLocation, new Location('texas'));
    }
    ```

* 2.22 Don't over-optimize

    Modern browsers do a lot of optimization under-the-hood at runtime. A lot of times, if you are optimizing then you are just wasting your time. There are good [resources](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers) for seeing where optimization is lacking. Target those in the meantime, until they are fixed if they can be.

    **Bad:**

    ```ts
    // On old browsers, each iteration with uncached `list.length` would be costly
    // because of `list.length` recomputation. In modern browsers, this is optimized.
    for (let i = 0, len = list.length; i < len; i++) {
    // ...
    }
    ```

    **Good:**

    ```ts
    for (let i = 0; i < list.length; i++) {
    // ...
    }
    ```

* 2.23 Remove dead code

    Dead code is just as bad as duplicate code. There's no reason to keep it in your codebase.
    If it's not being called, get rid of it! It will still be safe in your version history if you still need it.

    **Bad:**

    ```ts
    function oldRequestModule(url: string) {
    // ...
    }

    function requestModule(url: string) {
    // ...
    }

    const req = requestModule;
    inventoryTracker('apples', req, 'www.inventory-awesome.io');
    ```

    **Good:**

    ```ts
    function requestModule(url: string) {
    // ...
    }

    const req = requestModule;
    inventoryTracker('apples', req, 'www.inventory-awesome.io');
    ```

* 2.24 Use iterators and generators

    Use generators and iterables when working with collections of data used like a stream.  
    There are some good reasons:

    - decouples the callee from the generator implementation in a sense that callee decides how many
    items to access
    - lazy execution, items are streamed on demand
    - built-in support for iterating items using the `for-of` syntax
    - iterables allow to implement optimized iterator patterns

    **Bad:**

    ```ts
    function fibonacci(n: number): number[] {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const items: number[] = [0, 1];
    while (items.length < n) {
        items.push(items[items.length - 2] + items[items.length - 1]);
    }

    return items;
    }

    function print(n: number) {
    fibonacci(n).forEach(fib => console.log(fib));
    }

    // Print first 10 Fibonacci numbers.
    print(10);
    ```

    **Good:**

    ```ts
    // Generates an infinite stream of Fibonacci numbers.
    // The generator doesn't keep the array of all numbers.
    function* fibonacci(): IterableIterator<number> {
    let [a, b] = [0, 1];

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
    }

    function print(n: number) {
    let i = 0;
    for (const fib of fibonacci()) {
        if (i++ === n) break;  
        console.log(fib);
    }  
    }

    // Print first 10 Fibonacci numbers.
    print(10);
    ```

    There are libraries that allow working with iterables in a similar way as with native arrays, by
    chaining methods like `map`, `slice`, `forEach` etc. See [itiriri](https://www.npmjs.com/package/itiriri) for
    an example of advanced manipulation with iterables (or [itiriri-async](https://www.npmjs.com/package/itiriri-async) for manipulation of async iterables).

    ```ts
    import itiriri from 'itiriri';

    function* fibonacci(): IterableIterator<number> {
    let [a, b] = [0, 1];

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
    }

    itiriri(fibonacci())
    .take(10)
    .forEach(fib => console.log(fib));
    ```

* 2.25 Use getters and setters

    TypeScript supports getter/setter syntax.
    Using getters and setters to access data from objects that encapsulate behavior could be better than simply looking for a property on an object.
    "Why?" you might ask. Well, here's a list of reasons:

    - When you want to do more beyond getting an object property, you don't have to look up and change every accessor in your codebase.
    - Makes adding validation simple when doing a `set`.
    - Encapsulates the internal representation.
    - Easy to add logging and error handling when getting and setting.
    - You can lazy load your object's properties, let's say getting it from a server.

    **Bad:**

    ```ts
    type BankAccount = {
    balance: number;
    // ...
    }

    const value = 100;
    const account: BankAccount = {
    balance: 0,
    // ...
    };

    if (value < 0) {
    throw new Error('Cannot set negative balance.');
    }

    account.balance = value;
    ```

    **Good:**

    ```ts
    class BankAccount {
    private accountBalance: number = 0;

    get balance(): number {
        return this.accountBalance;
    }

    set balance(value: number) {
        if (value < 0) {
        throw new Error('Cannot set negative balance.');
        }

        this.accountBalance = value;
    }

    // ...
    }

    // Now `BankAccount` encapsulates the validation logic.
    // If one day the specifications change, and we need extra validation rule,
    // we would have to alter only the `setter` implementation,
    // leaving all dependent code unchanged.
    const account = new BankAccount();
    account.balance = 100;
    ```

* 2.26 Make objects have private/protected members

    TypeScript supports `public` *(default)*, `protected` and `private` accessors on class members.  

    **Bad:**

    ```ts
    class Circle {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }

    surface() {
        return Math.PI * this.radius * this.radius;
    }
    }
    ```

    **Good:**

    ```ts
    class Circle {
    constructor(private readonly radius: number) {
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }

    surface() {
        return Math.PI * this.radius * this.radius;
    }
    }
    ```

* 2.27 Prefer immutability

    TypeScript's type system allows you to mark individual properties on an interface / class as *readonly*. This allows you to work in a functional way (unexpected mutation is bad).  
    For more advanced scenarios there is a built-in type `Readonly` that takes a type `T` and marks all of its properties as readonly using mapped types (see [mapped types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types)).

    **Bad:**

    ```ts
    interface Config {
    host: string;
    port: string;
    db: string;
    }
    ```

    **Good:**

    ```ts
    interface Config {
    readonly host: string;
    readonly port: string;
    readonly db: string;
    }
    ```

    Case of Array, you can create a read-only array by using `ReadonlyArray<T>`.
    do not allow changes such as `push()` and `fill()`, but can use features such as `concat()` and `slice()` that do not change the value.

    **Bad:**

    ```ts
    const array: number[] = [ 1, 3, 5 ];
    array = []; // error
    array.push(100); // array will updated
    ```

    **Good:**

    ```ts
    const array: ReadonlyArray<number> = [ 1, 3, 5 ];
    array = []; // error
    array.push(100); // error
    ```

    Declaring read-only arguments in [TypeScript 3.4 is a bit easier](https://github.com/microsoft/TypeScript/wiki/What's-new-in-TypeScript#improvements-for-readonlyarray-and-readonly-tuples).

    ```ts
    function hoge(args: readonly string[]) {
    args.push(1); // error
    }
    ```

    Prefer [const assertions](https://github.com/microsoft/TypeScript/wiki/What's-new-in-TypeScript#const-assertions) for literal values.

    **Bad:**

    ```ts
    const config = {
    hello: 'world'
    };
    config.hello = 'world'; // value is changed

    const array  = [ 1, 3, 5 ];
    array[0] = 10; // value is changed

    // writable objects is returned
    function readonlyData(value: number) {
    return { value };
    }

    const result = readonlyData(100);
    result.value = 200; // value is changed
    ```

    **Good:**

    ```ts
    // read-only object
    const config = {
    hello: 'world'
    } as const;
    config.hello = 'world'; // error

    // read-only array
    const array  = [ 1, 3, 5 ] as const;
    array[0] = 10; // error

    // You can return read-only objects
    function readonlyData(value: number) {
    return { value } as const;
    }

    const result = readonlyData(100);
    result.value = 200; // error
    ```

* 2.28 type vs. interface

    Use type when you might need a union or intersection. Use interface when you want `extends` or `implements`. There is no strict rule however, use the one that works for you.  
    For a more detailed explanation refer to this [answer](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types/54101543#54101543) about the differences between `type` and `interface` in TypeScript.

    **Bad:**

    ```ts
    interface EmailConfig {
    // ...
    }

    interface DbConfig {
    // ...
    }

    interface Config {
    // ...
    }

    //...

    type Shape = {
    // ...
    }
    ```

    **Good:**

    ```ts

    type EmailConfig = {
    // ...
    }

    type DbConfig = {
    // ...
    }

    type Config  = EmailConfig | DbConfig;

    // ...

    interface Shape {
    // ...
    }

    class Circle implements Shape {
    // ...
    }

    class Square implements Shape {
    // ...
    }
    ```

* 2.29 Classes should be small

    The class' size is measured by its responsibility. Following the *Single Responsibility principle* a class should be small.

    **Bad:**

    ```ts
    class Dashboard {
    getLanguage(): string { /* ... */ }
    setLanguage(language: string): void { /* ... */ }
    showProgress(): void { /* ... */ }
    hideProgress(): void { /* ... */ }
    isDirty(): boolean { /* ... */ }
    disable(): void { /* ... */ }
    enable(): void { /* ... */ }
    addSubscription(subscription: Subscription): void { /* ... */ }
    removeSubscription(subscription: Subscription): void { /* ... */ }
    addUser(user: User): void { /* ... */ }
    removeUser(user: User): void { /* ... */ }
    goToHomePage(): void { /* ... */ }
    updateProfile(details: UserDetails): void { /* ... */ }
    getVersion(): string { /* ... */ }
    // ...
    }

    ```

    **Good:**

    ```ts
    class Dashboard {
    disable(): void { /* ... */ }
    enable(): void { /* ... */ }
    getVersion(): string { /* ... */ }
    }

    // split the responsibilities by moving the remaining methods to other classes
    // ...
    ```

* 2.30 High cohesion and low coupling

    Cohesion defines the degree to which class members are related to each other. Ideally, all fields within a class should be used by each method.
    We then say that the class is *maximally cohesive*. In practice, this however is not always possible, nor even advisable. You should however prefer cohesion to be high.  

    Coupling refers to how related or dependent are two classes toward each other. Classes are said to be low coupled if changes in one of them doesn't affect the other one.  
    
    Good software design has **high cohesion** and **low coupling**.

    **Bad:**

    ```ts
    class UserManager {
    // Bad: each private variable is used by one or another group of methods.
    // It makes clear evidence that the class is holding more than a single responsibility.
    // If I need only to create the service to get the transactions for a user,
    // I'm still forced to pass and instance of `emailSender`.
    constructor(
        private readonly db: Database,
        private readonly emailSender: EmailSender) {
    }

    async getUser(id: number): Promise<User> {
        return await db.users.findOne({ id });
    }

    async getTransactions(userId: number): Promise<Transaction[]> {
        return await db.transactions.find({ userId });
    }

    async sendGreeting(): Promise<void> {
        await emailSender.send('Welcome!');
    }

    async sendNotification(text: string): Promise<void> {
        await emailSender.send(text);
    }

    async sendNewsletter(): Promise<void> {
        // ...
    }
    }
    ```

    **Good:**

    ```ts
    class UserService {
    constructor(private readonly db: Database) {
    }

    async getUser(id: number): Promise<User> {
        return await this.db.users.findOne({ id });
    }

    async getTransactions(userId: number): Promise<Transaction[]> {
        return await this.db.transactions.find({ userId });
    }
    }

    class UserNotifier {
    constructor(private readonly emailSender: EmailSender) {
    }

    async sendGreeting(): Promise<void> {
        await this.emailSender.send('Welcome!');
    }

    async sendNotification(text: string): Promise<void> {
        await this.emailSender.send(text);
    }

    async sendNewsletter(): Promise<void> {
        // ...
    }
    }
    ```

* 2.31 Prefer composition over inheritance

    As stated famously in [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns) by the Gang of Four, you should *prefer composition over inheritance* where you can. There are lots of good reasons to use inheritance and lots of good reasons to use composition. The main point for this maxim is that if your mind instinctively goes for inheritance, try to think if composition could model your problem better. In some cases it can.  
    
    You might be wondering then, "when should I use inheritance?" It depends on your problem at hand, but this is a decent list of when inheritance makes more sense than composition:

    1. Your inheritance represents an "is-a" relationship and not a "has-a" relationship (Human->Animal vs. User->UserDetails).

    2. You can reuse code from the base classes (Humans can move like all animals).

    3. You want to make global changes to derived classes by changing a base class. (Change the caloric expenditure of all animals when they move).

    **Bad:**

    ```ts
    class Employee {
    constructor(
        private readonly name: string,
        private readonly email: string) {
    }

    // ...
    }

    // Bad because Employees "have" tax data. EmployeeTaxData is not a type of Employee
    class EmployeeTaxData extends Employee {
    constructor(
        name: string,
        email: string,
        private readonly ssn: string,
        private readonly salary: number) {
        super(name, email);
    }

    // ...
    }
    ```

    **Good:**

    ```ts
    class Employee {
    private taxData: EmployeeTaxData;

    constructor(
        private readonly name: string,
        private readonly email: string) {
    }

    setTaxData(ssn: string, salary: number): Employee {
        this.taxData = new EmployeeTaxData(ssn, salary);
        return this;
    }

    // ...
    }

    class EmployeeTaxData {
    constructor(
        public readonly ssn: string,
        public readonly salary: number) {
    }

    // ...
    }
    ```

* 2.32 Use method chaining

    This pattern is very useful and commonly used in many libraries. It allows your code to be expressive, and less verbose. For that reason, use method chaining and take a look at how clean your code will be.

    **Bad:**

    ```ts
    class QueryBuilder {
    private collection: string;
    private pageNumber: number = 1;
    private itemsPerPage: number = 100;
    private orderByFields: string[] = [];

    from(collection: string): void {
        this.collection = collection;
    }

    page(number: number, itemsPerPage: number = 100): void {
        this.pageNumber = number;
        this.itemsPerPage = itemsPerPage;
    }

    orderBy(...fields: string[]): void {
        this.orderByFields = fields;
    }

    build(): Query {
        // ...
    }
    }

    // ...

    const queryBuilder = new QueryBuilder();
    queryBuilder.from('users');
    queryBuilder.page(1, 100);
    queryBuilder.orderBy('firstName', 'lastName');

    const query = queryBuilder.build();
    ```

    **Good:**

    ```ts
    class QueryBuilder {
    private collection: string;
    private pageNumber: number = 1;
    private itemsPerPage: number = 100;
    private orderByFields: string[] = [];

    from(collection: string): this {
        this.collection = collection;
        return this;
    }

    page(number: number, itemsPerPage: number = 100): this {
        this.pageNumber = number;
        this.itemsPerPage = itemsPerPage;
        return this;
    }

    orderBy(...fields: string[]): this {
        this.orderByFields = fields;
        return this;
    }

    build(): Query {
        // ...
    }
    }

    // ...

    const query = new QueryBuilder()
    .from('users')
    .page(1, 100)
    .orderBy('firstName', 'lastName')
    .build();
    ```

* 2.33 Always use Error for throwing or rejecting

    JavaScript as well as TypeScript allow you to `throw` any object. A Promise can also be rejected with any reason object. It is advisable to use the `throw` syntax with an `Error` type. This is because your error might be caught in higher level code with a `catch` syntax.

    It would be very confusing to catch a string message there and would make
    [debugging more painful](https://basarat.gitbook.io/typescript/type-system/exceptions#always-use-error).  
    For the same reason you should reject promises with `Error` types.

    **Bad:**

    ```ts
    function calculateTotal(items: Item[]): number {
    throw 'Not implemented.';
    }

    function get(): Promise<Item[]> {
    return Promise.reject('Not implemented.');
    }
    ```

    **Good:**

    ```ts
    function calculateTotal(items: Item[]): number {
    throw new Error('Not implemented.');
    }

    function get(): Promise<Item[]> {
    return Promise.reject(new Error('Not implemented.'));
    }

    // or equivalent to:

    async function get(): Promise<Item[]> {
    throw new Error('Not implemented.');
    }
    ```

    The benefit of using `Error` types is that it is supported by the syntax `try/catch/finally` and implicitly all errors have the `stack` property which
    is very powerful for debugging.  
    There are also another alternatives, not to use the `throw` syntax and instead always return custom error objects. TypeScript makes this even easier.
    Consider following example:

    ```ts
    type Result<R> = { isError: false, value: R };
    type Failure<E> = { isError: true, error: E };
    type Failable<R, E> = Result<R> | Failure<E>;

    function calculateTotal(items: Item[]): Failable<number, 'empty'> {
    if (items.length === 0) {
        return { isError: true, error: 'empty' };
    }

    // ...
    return { isError: false, value: 42 };
    }
    ```

    For the detailed explanation of this idea refer to the [original post](https://medium.com/@dhruvrajvanshi/making-exceptions-type-safe-in-typescript-c4d200ee78e9).

* 2.34 Don't ignore caught errors

    Doing nothing with a caught error doesn't give you the ability to ever fix or react to said error. Logging the error to the console (`console.log`) isn't much better as often times it can get lost in a sea of things printed to the console. If you wrap any bit of code in a `try/catch` it means you think an error may occur there and therefore you should have a plan, or create a code path, for when it occurs.

    **Bad:**

    ```ts
    try {
    functionThatMightThrow();
    } catch (error) {
    console.log(error);
    }

    // or even worse

    try {
    functionThatMightThrow();
    } catch (error) {
    // ignore error
    }
    ```

    **Good:**

    ```ts
    import { logger } from './logging'

    try {
    functionThatMightThrow();
    } catch (error) {
    logger.log(error);
    }
    ```

* 2.35 Don't ignore rejected promises

    For the same reason you shouldn't ignore caught errors from `try/catch`.

    **Bad:**

    ```ts
    getUser()
    .then((user: User) => {
        return sendEmail(user.email, 'Welcome!');
    })
    .catch((error) => {
        console.log(error);
    });
    ```

    **Good:**

    ```ts
    import { logger } from './logging'

    getUser()
    .then((user: User) => {
        return sendEmail(user.email, 'Welcome!');
    })
    .catch((error) => {
        logger.log(error);
    });

    // or using the async/await syntax:

    try {
    const user = await getUser();
    await sendEmail(user.email, 'Welcome!');
    } catch (error) {
    logger.log(error);
    }
    ```

* 2.36 Use consistent capitalization

    Capitalization tells you a lot about your variables, functions, etc. These rules are subjective, so your team can choose whatever they want. The point is, no matter what you all choose, just *be consistent*.

    **Bad:**

    ```ts
    const DAYS_IN_WEEK = 7;
    const daysInMonth = 30;

    const songs = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
    const Artists = ['ACDC', 'Led Zeppelin', 'The Beatles'];

    function eraseDatabase() {}
    function restore_database() {}

    type animal = { /* ... */ }
    type Container = { /* ... */ }
    ```

    **Good:**

    ```ts
    const DAYS_IN_WEEK = 7;
    const DAYS_IN_MONTH = 30;

    const SONGS = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
    const ARTISTS = ['ACDC', 'Led Zeppelin', 'The Beatles'];

    function eraseDatabase() {}
    function restoreDatabase() {}

    type Animal = { /* ... */ }
    type Container = { /* ... */ }
    ```

    Prefer using `PascalCase` for class, interface, type and namespace names.  
    Prefer using `camelCase` for variables, functions and class members.
    Prefer using `UPPER_CASE` for global constants

* 2.37 Function callers and callees should be close

    If a function calls another, keep those functions vertically close in the source file. Ideally, keep the caller right above the callee.
    We tend to read code from top-to-bottom, like a newspaper. Because of this, make your code read that way.

    **Bad:**

    ```ts
    class PerformanceReview {
    constructor(private readonly employee: Employee) {
    }

    private lookupPeers() {
        return db.lookup(this.employee.id, 'peers');
    }

    private lookupManager() {
        return db.lookup(this.employee, 'manager');
    }

    private getPeerReviews() {
        const peers = this.lookupPeers();
        // ...
    }

    review() {
        this.getPeerReviews();
        this.getManagerReview();
        this.getSelfReview();

        // ...
    }

    private getManagerReview() {
        const manager = this.lookupManager();
    }

    private getSelfReview() {
        // ...
    }
    }

    const review = new PerformanceReview(employee);
    review.review();
    ```

    **Good:**

    ```ts
    class PerformanceReview {
    constructor(private readonly employee: Employee) {
    }

    review() {
        this.getPeerReviews();
        this.getManagerReview();
        this.getSelfReview();

        // ...
    }

    private getPeerReviews() {
        const peers = this.lookupPeers();
        // ...
    }

    private lookupPeers() {
        return db.lookup(this.employee.id, 'peers');
    }

    private getManagerReview() {
        const manager = this.lookupManager();
    }

    private lookupManager() {
        return db.lookup(this.employee, 'manager');
    }

    private getSelfReview() {
        // ...
    }
    }

    const review = new PerformanceReview(employee);
    review.review();
    ```

* 2.38 Organize imports

    With clean and easy to read import statements you can quickly see the dependencies of current code. Make sure you apply following good practices for `import` statements:

    - Import statements should be alphabetized and grouped.
    - Unused imports should be removed.
    - Named imports must be alphabetized (i.e. `import {A, B, C} from 'foo';`)
    - Import sources must be alphabetized within groups, i.e.: `import * as foo from 'a'; import * as bar from 'b';`
    - Groups of imports are delineated by blank lines.
    - Groups must respect following order:
    - Polyfills (i.e. `import 'reflect-metadata';`)
    - Node builtin modules (i.e. `import fs from 'fs';`)
    - external modules (i.e. `import { query } from 'itiriri';`)
    - internal modules (i.e `import { UserService } from 'src/services/userService';`)
    - modules from a parent directory (i.e. `import foo from '../foo'; import qux from '../../foo/qux';`)
    - modules from the same or a sibling's directory (i.e. `import bar from './bar'; import baz from './bar/baz';`)

    **Bad:**

    ```ts
    import { TypeDefinition } from '../types/typeDefinition';
    import { AttributeTypes } from '../model/attribute';
    import { ApiCredentials, Adapters } from './common/api/authorization';
    import fs from 'fs';
    import { ConfigPlugin } from './plugins/config/configPlugin';
    import { BindingScopeEnum, Container } from 'inversify';
    import 'reflect-metadata';
    ```

    **Good:**

    ```ts
    import 'reflect-metadata';

    import fs from 'fs';
    import { BindingScopeEnum, Container } from 'inversify';

    import { AttributeTypes } from '../model/attribute';
    import { TypeDefinition } from '../types/typeDefinition';

    import { ApiCredentials, Adapters } from './common/api/authorization';
    import { ConfigPlugin } from './plugins/config/configPlugin';
    ```

* 2.39 Use typescript aliases

    Create prettier imports by defining the paths and baseUrl properties in the compilerOptions section in the `tsconfig.json`

    This will avoid long relative paths when doing imports.

    **Bad:**

    ```ts
    import { UserService } from '../../../services/UserService';
    ```

    **Good:**

    ```ts
    import { UserService } from '@services/UserService';
    ```

    ```js
    // tsconfig.json
    ...
    "compilerOptions": {
        ...
        "baseUrl": "src",
        "paths": {
        "@services": ["services/*"]
        }
        ...
    }
    ...
    ```

* 2.40 Excessive line breaks

    Line break should not exceed > 1

    ```ts
    const val = 1;

                    // <------ excessive line break. Remove this line.
    const fnc = () => {};
    ```

    Don't add line break before function opening

    *Bad:*

    ```ts
    const fnc = () => {

        const a = 'a';

        console.log(a);
    }
    ```

    *Good:*

    ```ts
    const fnc = () => {
        const a = 'a';

        console.log(a);
    }
    ```

### 3.0 Frontend

---

* 3.1 Shared vs Common vs Partials

    ```ts
    components
        container_folder
            common // <--- shared within container group(ex: admin only)
                common_comp
                    index.tsx
            component_1
                partials // <--- aka supporting component
                    partial_comp.tsx
                index.tsx
        shared // <--- shared across all containers(public, admin)
            shared_comp
                index.tsx
    ```

* 3.2 Import Pattern

    ```ts
    import React from 'react'; // always import high level(eg: react, react-redux, react-router-doom)
    import CONSTANT_VALUE from 'constants/constant_value';
    import SharedComponent from 'components/shared/shared-comp1';
    import CommonComponent from 'container-folder/container-folder/common/common-comp';
    import helperFunction from 'utils/helper';
    import globalStyles from 'styles/global';
    import PartialComponent from './partials/partial-comp';
    import subHelperFunction from './helper.tsx'
    import styles from './styles';
    ```

* 3.3 Component names should be in `TitleCase` format.

* 3.4 Use `Fragment` instead of `<>`

* 3.5 Importing material-ui

    To optimize the bundle producted by `material-ui`. They have suggested to follow this import pattern

    ```ts
    import { Button, TextField } from '@material-ui/core'; // importing cores
    import { makeStyles, createStyles } from '@material-ui/core/styles'; // import styles
    import AddIcon from '@material-ui/icons/Add'; // importing icons
    ```

    refer: https://material-ui.com/guides/minimizing-bundle-size/

* 3.6 Prefix container and parent name in all components that isn't shareable.

    ```ts
    const ContainerNameComponentName = () => {};

    const ContainerNameParentNamePartialName = () => {}'
    ```

    If it is under `forms/`, Append `Form` in front of `ContainerName`

    ```ts
    const FormContainerNmaeComponentName
    ```

    > This will greatly help us in terms of stack tracing

    ```ts
    // Example scenario of stack tracing

         _____ under "admin" container
        |
    FormAdminProfilePersonal <--- under "personal" partials
    ^             ^
    |             |_______________ under "profile" form component
    | 
    |__ under "forms" folder
    ```

* 3.7 Shareable functions should be stored under `utils` folder

* 3.8 The `providers` folder is intended for library injections.

* 2.9 We split React components in 2 types. Forms and Usual components. Usual components should be found under `components` folder while Forms should be under `forms` folder. Anything that tackles with regards to form submission(Usually if there is anything `<form>` or `react-final-form` in a component) is considered Form.

* 3.10 Redux Actions should be in `TITLE_CASE` format.

    Example:

    ```ts
    const FETCH_USER_SAGAS = 'FETCH_USER_SAGAS';
    ```

* 3.11 Parent reeducers should be named in `snakeCase` format and must be singular.

### 4.0 Backend

---

* 4.1 Patterns

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate metus nulla, sit amet pharetra dolor sagittis in. Sed eget velit sed lectus posuere luctus ut id magna. Proin aliquam diam eu vulputate facilisis. Curabitur sollicitudin egestas consequat. Duis sit amet neque est. Ut eu tellus eros. Mauris semper mattis diam. Maecenas tortor quam, tempus molestie dolor eu, posuere luctus turpis. Proin ut nibh id elit dapibus vehicula eu sed urna. Proin congue dictum elit, lacinia porttitor nisi ultrices a. Curabitur vitae neque eu sem pellentesque gravida. Fusce sodales nisi vel faucibus luctus.

* 4.2 Hello World

    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas aliquet ultrices eleifend. Fusce aliquam aliquam felis non tempor. Nulla neque lorem, ornare ac purus vitae, volutpat semper arcu.

    ```ts
    import Hello from 'world';
    ```

* 4.3 Controller routes should always be in plural form

    ```bash
    GET /examples ✅
    GET /examples/1 ✅

    GET /example ❌ # The problem arises here, this route servers multiple data but states itself as singular
    GET /example/1 ❌
    ```

### 5.0 Security

Head over to OWASP to learn more about web security

refer: https://owasp.org/

---

### 6.0 DevOps

### 7.0 Testing

Testing is more important than shipping. If you have no tests or an inadequate amount, then every time you ship code you won't be sure that you didn't break anything.

Deciding on what constitutes an adequate amount is up to your team, but having 100% coverage (all statements and branches)
is how you achieve very high confidence and developer peace of mind. This means that in addition to having a great testing framework, you also need to use a good [coverage tool](https://github.com/gotwarlost/istanbul).

There's no excuse to not write tests. There are [plenty of good JS test frameworks](http://jstherightway.org/#testing-tools) with typings support for TypeScript, so find one that your team prefers. When you find one that works for your team, then aim to always write tests for every new feature/module you introduce. If your preferred method is Test Driven Development (TDD), that is great, but the main point is to just make sure you are reaching your coverage goals before launching any feature, or refactoring an existing one.

#### The three laws of TDD

1. You are not allowed to write any production code unless it is to make a failing unit test pass.

2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.

3. You are not allowed to write any more productio

---

* 7.1 F.I.R.S.T. rules

    Clean tests should follow the rules:

    - **Fast** tests should be fast because we want to run them frequently.
    - **Independent** tests should not depend on each other. They should provide same output whether run independently or all together in any order.
    - **Repeatable** tests should be repeatable in any environment and there should be no excuse for why they fail.
    - **Self-Validating** a test should answer with either *Passed* or *Failed*. You don't need to compare log files to answer if a test passed.
    - **Timely** unit tests should be written before the production code. If you write tests after the production code, you might find writing tests too hard.

* 7.2 Single concept per test

    Tests should also follow the *Single Responsibility Principle*. Make only one assert per unit test.

    **Bad:**

    ```ts
    import { assert } from 'chai';

    describe('AwesomeDate', () => {
    it('handles date boundaries', () => {
        let date: AwesomeDate;

        date = new AwesomeDate('1/1/2015');
        assert.equal('1/31/2015', date.addDays(30));

        date = new AwesomeDate('2/1/2016');
        assert.equal('2/29/2016', date.addDays(28));

        date = new AwesomeDate('2/1/2015');
        assert.equal('3/1/2015', date.addDays(28));
    });
    });
    ```

    **Good:**

    ```ts
    import { assert } from 'chai';

    describe('AwesomeDate', () => {
    it('handles 30-day months', () => {
        const date = new AwesomeDate('1/1/2015');
        assert.equal('1/31/2015', date.addDays(30));
    });

    it('handles leap year', () => {
        const date = new AwesomeDate('2/1/2016');
        assert.equal('2/29/2016', date.addDays(28));
    });

    it('handles non-leap year', () => {
        const date = new AwesomeDate('2/1/2015');
        assert.equal('3/1/2015', date.addDays(28));
    });
    });
    ```

* 7.5 The name of the test should reveal its intention

    When a test fail, its name is the first indication of what may have gone wrong.

    **Bad:**

    ```ts
    describe('Calendar', () => {
    it('2/29/2020', () => {
        // ...
    });

    it('throws', () => {
        // ...
    });
    });
    ```

    **Good:**

    ```ts
    describe('Calendar', () => {
    it('should handle leap year', () => {
        // ...
    });

    it('should throw when format is invalid', () => {
        // ...
    });
    });
    ```

### 8.0 Database

Preferred Database

* MYSQL
* MongoDB

---

* 8.1 Primary key should always be named `id`. It should be Incremental, Unique and Not Nullable.

* 8.2 Tables should be in plural form, lowercase, and under_score format.

    ```bash
    account ❌
    accountUser ❌
    Account ❌

    accounts ✅
    account_user ✅
    ```

* 8.3 Primary and Foreign keys should be together at the top most part. Lower part should be timestamps and boolean values

* 8.4 Routes should be in `kebab-case` format

### 9.0 Blacklisted

---

* 9.1 Redux-Form

    Message from Redux-Form:

    If you're just getting started with your application and are looking for a form solution, the general consensus of the community is that you should not put your form state in Redux. The author of Redux Form took all of the lessons he learned about form use cases from maintaining Redux Form and built 🏁 React Final Form, which he recommends you use if you are just starting your project. It's also pretty easy to migrate to from Redux Form, because the `<Field>` component APIs are so similar. Here is a blog post where he explains his reasoning, or there are two talks if you prefer video. Formik is also a nice solution.

    The only good reason, in the author's view, to use Redux Form in your application is if you need really tight coupling of your form data with Redux, specifically if you need to subscribe to it and modify it from parts of your application far from your form component, e.g. on another route. If you don't have that requirement, use 🏁 React Final Form.

    > Alternatives: `react-final-form`

* 9.2 MomentJS

    From MomentJS:

    Moment.js is a legacy project, now in maintenance mode. In most cases, you should choose a different library.

    > Alternatives: `datefns`

* 9.3 JQuery

    Outdated

    > Alternatives: Vanilla Javascript

* 9.4 Bootstrap v4

    Includes unnecessary JQuery that could bloat the build.

    > Alternatives: `tailwind-css`, `scss`, `jss`

* 9.5 ChartJS

    Big library

    > Alternatives: `devexpress`

## Resources

* https://gist.github.com/mrsasha/8d511770ad9b282f3a5d0f5c8acdd10e
* https://github.com/ryanmcdermott/clean-code-javascript/blob/master/README.md
* https://github.com/labs42io/clean-code-typescript/blob/master/README.md