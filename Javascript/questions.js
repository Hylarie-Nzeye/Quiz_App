const questions = [
    {
        category: "Java",
        questions: [
            // Questions faciles
            {
                question: "What is the size of int in Java?",
                options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
                answer: 1,
            },
            {
                question: "Which of the following is not a Java feature?",
                options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic"],
                answer: 1,
            },
            {
                question: "What is the default value of a boolean variable in Java?",
                options: ["true", "false", "0", "null"],
                answer: 1,
            },
            {
                question: "What is the output of int[] a = new int[5]; System.out.println(a[0])?",
                options: ["null", "0", "5", "Compiler error"],
                answer: 1,
            },
            {
                question: "Which of the following is an immutable class in Java?",
                options: ["StringBuilder", "StringBuffer", "String", "ArrayList"],
                answer: 2,
            },
            {
                question: "Which package is automatically imported in all Java programs?",
                options: ["java.lang", "java.util", "java.io", "java.net"],
                answer: 0,
            },
            {
                question: "What is the range of byte data type in Java?",
                options: ["-128 to 127", "-32768 to 32767", "-2147483648 to 2147483647", "0 to 65535"],
                answer: 0,
            },
            {
                question: "Which method is used to start a thread in Java?",
                options: ["run()", "start()", "init()", "main()"],
                answer: 1,
            },
            // Questions de niveau moyen
            {
                question: "What is the output of System.out.println(\"5\" + 2 + 3)?",
                options: ["10", "523", "5 + 2 + 3", "Error"],
                answer: 1,
            },
            {
                question: "Which collection class in Java provides constant time performance for basic operations?",
                options: ["ArrayList", "LinkedList", "HashMap", "TreeMap"],
                answer: 2,
            },
            {
                question: "What is the difference between '==' and 'equals()' in Java?",
                options: ["No difference", "'==' compares references while equals() compares content", "'==' compares content while equals() compares references", "'==' is for primitives, equals() is for objects"],
                answer: 1,
            },
            {
                question: "Which of the following is not a valid access modifier in Java?",
                options: ["protected", "friendly", "private", "public"],
                answer: 1,
            },
            {
                question: "What does the 'synchronized' keyword do in Java?",
                options: ["Makes variables thread-safe", "Prevents method overriding", "Makes a class serializable", "Increases method execution speed"],
                answer: 0,
            },
            {
                question: "Which method is called when an object is garbage collected in Java?",
                options: ["dispose()", "finalize()", "destroy()", "delete()"],
                answer: 1,
            },
            {
                question: "Which functional interface represents a function that accepts one argument and produces a result?",
                options: ["Consumer", "Supplier", "Function", "Predicate"],
                answer: 2,
            },
            {
                question: "What is the output of the following code: System.out.println(1.0/0.0)?",
                options: ["0", "1", "Infinity", "ArithmeticException"],
                answer: 2,
            },
            // Questions complexes
            {
                question: "What is the purpose of the 'transient' keyword in Java?",
                options: ["To prevent serialization of a variable", "To make a variable thread-safe", "To make a variable final", "To make a variable static"],
                answer: 0,
            },
            {
                question: "Which of the following is true about the 'finally' block in Java?",
                options: ["It executes only if an exception occurs", "It executes only if no exception occurs", "It always executes regardless of exception", "It is optional in try-catch structure"],
                answer: 2,
            },
            {
                question: "Which of the following is not a component of JVM?",
                options: ["ClassLoader", "JIT compiler", "Garbage Collector", "Primitive Data Types"],
                answer: 3,
            },
            {
                question: "What is the purpose of the 'volatile' keyword in Java?",
                options: ["To make a variable thread-safe", "To indicate that a variable may change asynchronously", "To prevent variable modification", "To optimize variable access"],
                answer: 1,
            },
            {
                question: "Which collection interface guarantees that the elements are stored in ascending order?",
                options: ["Set", "List", "SortedSet", "Map"],
                answer: 2,
            },
            {
                question: "What is the time complexity of adding an element to a LinkedList in Java?",
                options: ["O(1) at the beginning, O(n) at the end", "O(1) at both ends", "O(n) for all operations", "O(log n) for all operations"],
                answer: 1,
            },
            {
                question: "Which design pattern is used by the 'java.lang.Runtime' class?",
                options: ["Factory", "Singleton", "Observer", "Decorator"],
                answer: 1,
            },
            {
                question: "What is a marker interface in Java?",
                options: ["Interface with one method", "Interface with no methods", "Interface that extends multiple interfaces", "Interface with static methods only"],
                answer: 1,
            },
            {
                question: "What is the purpose of the 'strictfp' keyword?",
                options: ["To restrict floating-point calculations to follow IEEE 754", "To make a method final", "To declare a variable as constant", "To optimize performance of floating-point operations"],
                answer: 0,
            },
        ],
    },
    {
        category: "Python",
        questions: [
            // Questions faciles
            {
                question: "What is the output of print(2 ** 3)?",
                options: ["5", "6", "7", "8"],
                answer: 3,
            },
            {
                question: "Which of the following is a mutable data type in Python?",
                options: ["List", "Tuple", "String", "Integer"],
                answer: 0,
            },
            {
                question: "What is the output of print('Hello' + 'World')?",
                options: ["Hello World", "HelloWorld", "Hello+World", "Error"],
                answer: 1,
            },
            {
                question: "Which keyword is used to define a function in Python?",
                options: ["func", "def", "function", "define"],
                answer: 1,
            },
            {
                question: "What does the 'len()' function do in Python?",
                options: ["Returns the length of an object", "Returns the last element of an object", "Returns the largest element", "Returns the data type"],
                answer: 0,
            },
            {
                question: "How do you create a comment in Python?",
                options: ["// Comment", "/* Comment */", "# Comment", "<!-- Comment -->"],
                answer: 2,
            },
            {
                question: "What is the correct file extension for Python files?",
                options: [".py", ".pt", ".python", ".p"],
                answer: 0,
            },
            {
                question: "Which of these data types does not allow duplicate elements?",
                options: ["List", "Tuple", "Dictionary", "Set"],
                answer: 3,
            },
            // Questions de niveau moyen
            {
                question: "What is the output of the following code: x = [1, 2, 3]; y = x; y.append(4); print(x)?",
                options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[1, 2, 3, [4]]", "Error"],
                answer: 1,
            },
            {
                question: "What is the purpose of __init__ method in Python?",
                options: ["To initialize module", "To initialize class attributes", "To initialize constructor", "To initialize object"],
                answer: 3,
            },
            {
                question: "What does the map() function do in Python?",
                options: ["Creates a map data structure", "Applies a function to all items in an input list", "Maps one data type to another", "Creates a memory map of an object"],
                answer: 1,
            },
            {
                question: "What is the output of the code: print([i for i in range(10) if i % 2 == 0])?",
                options: ["[0, 2, 4, 6, 8]", "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", "[1, 3, 5, 7, 9]", "Error"],
                answer: 0,
            },
            {
                question: "What is the purpose of the 'global' keyword in Python?",
                options: ["To create global variables", "To declare a variable as global in scope", "To access a module globally", "To make a function available globally"],
                answer: 1,
            },
            {
                question: "What is the output of the following code: print(''.join(['a', 'b', 'c']))?",
                options: ["['a', 'b', 'c']", "a,b,c", "abc", "Error"],
                answer: 2,
            },
            {
                question: "What is a decorator in Python?",
                options: ["A function that modifies another function", "A class that inherits from another class", "A way to decorate code with comments", "A built-in Python module"],
                answer: 0,
            },
            {
                question: "What is the output of the following code: print(sum(range(5), 10))?",
                options: ["10", "15", "20", "Error"],
                answer: 2,
            },
            // Questions complexes
            {
                question: "What is the time complexity of dictionary operations in Python?",
                options: ["O(1) average case", "O(n) average case", "O(log n) average case", "O(n²) average case"],
                answer: 0,
            },
            {
                question: "Which of the following is correct about generators in Python?",
                options: ["They use 'yield' keyword", "They return all values at once", "They cannot be iterated", "They are deprecated in Python 3"],
                answer: 0,
            },
            {
                question: "Which of the following is true about Python's GIL (Global Interpreter Lock)?",
                options: ["It allows multiple threads to execute Python bytecode simultaneously", "It prevents multiple threads from executing Python bytecode simultaneously", "It is a technique to optimize memory usage", "It is used to manage database locks"],
                answer: 1,
            },
            {
                question: "What is the purpose of the '__slots__' attribute in Python classes?",
                options: ["To define slots for multiple inheritance", "To optimize memory usage by restricting attributes", "To reserve method names", "To define static class attributes"],
                answer: 1,
            },
            {
                question: "Which of the following is true about Python namespaces?",
                options: ["They are implemented as dictionaries", "They are immutable", "They are ordered", "They can only contain function names"],
                answer: 0,
            },
            {
                question: "What is the output of print(type(lambda x: x))?",
                options: ["<class 'lambda'>", "<class 'function'>", "<class 'type'>", "<class 'object'>"],
                answer: 1,
            },
            {
                question: "What is the purpose of the 'nonlocal' keyword in Python?",
                options: ["To indicate a variable is not locally defined", "To access variables in the outer (enclosing) function scope", "To declare a variable as global", "To import non-local modules"],
                answer: 1,
            },
            {
                question: "What does the 'with' statement do in Python?",
                options: ["Implements exception handling", "Implements context management protocol", "Creates a with block for variable scoping", "Implements loop functionality"],
                answer: 1,
            },
            {
                question: "What is the purpose of the '__iter__' and '__next__' methods in Python?",
                options: ["To implement serialization", "To implement iteration protocol", "To implement comparison operators", "To implement context management"],
                answer: 1,
            }
        ]
    },
    {
        category: "C&C++",
        questions: [
            // Questions faciles
            {
                question: "Which of the following is used to declare a constant in C?",
                options: ["const", "#define", "constant", "final"],
                answer: 1,
            },
            {
                question: "What is the size of a double in C++?",
                options: ["4 bytes", "8 bytes", "10 bytes", "16 bytes"],
                answer: 1,
            },
            {
                question: "Which operator is used to access the value at the address stored in a pointer variable?",
                options: ["&", "*", "->", "."],
                answer: 1,
            },
            {
                question: "What is the output of the following code: printf(\"%d\", 10 + 20);?",
                options: ["10", "20", "30", "Error"],
                answer: 2,
            },
            {
                question: "What is the correct way to declare a pointer in C?",
                options: ["int p;", "int *p;", "pointer int p;", "int &p;"],
                answer: 1,
            },
            {
                question: "Which header file is needed for input/output operations in C++?",
                options: ["<stdio.h>", "<iostream>", "<iomanip>", "<string>"],
                answer: 1,
            },
            {
                question: "What is the output of the following C code: int x = 10; int y = x++; printf(\"%d %d\", x, y);",
                options: ["10 10", "11 10", "11 11", "10 11"],
                answer: 1,
            },
            {
                question: "Which symbol is used to access a member of a structure using a structure pointer in C?",
                options: [".", "->", "::", "*"],
                answer: 1,
            },
            // Questions de niveau moyen
            {
                question: "What is the difference between 'malloc()' and 'calloc()' in C?",
                options: ["malloc() allocates single block, calloc() allocates multiple blocks", "malloc() initializes memory to zero, calloc() doesn't", "calloc() initializes memory to zero, malloc() doesn't", "No difference"],
                answer: 2,
            },
            {
                question: "What is the purpose of 'volatile' keyword in C/C++?",
                options: ["To optimize variable access", "To make a variable thread-safe", "To indicate variable can be changed outside the program control", "To make a variable constant"],
                answer: 2,
            },
            {
                question: "What is a friend function in C++?",
                options: ["A function that can access private members of a class", "A function that is friendly to users", "A function that helps other functions", "A function that cannot throw exceptions"],
                answer: 0,
            },
            {
                question: "What is the purpose of the 'virtual' keyword in C++?",
                options: ["To create virtual memory", "To enable function overloading", "To enable dynamic binding", "To create abstract classes"],
                answer: 2,
            },
            {
                question: "What is the difference between 'new' and 'malloc()' in C++?",
                options: ["new is an operator, malloc() is a function", "new calls constructors, malloc() doesn't", "new returns typed pointer, malloc() returns void*", "All of the above"],
                answer: 3,
            },
            {
                question: "Which of the following is not a storage class specifier in C?",
                options: ["auto", "register", "volatile", "static"],
                answer: 2,
            },
            {
                question: "What is a memory leak in C/C++?",
                options: ["When a program uses too much memory", "When memory is allocated but never freed", "When memory is corrupted", "When memory is accessed after being freed"],
                answer: 1,
            },
            {
                question: "What is the main difference between a structure and a union in C?",
                options: ["Structures can have methods, unions cannot", "Structures use more memory, unions share memory", "Structures support inheritance, unions do not", "Structures are value types, unions are reference types"],
                answer: 1,
            },
            // Questions complexes
            {
                question: "What is a pure virtual function in C++?",
                options: ["A function that has no implementation", "A function that cannot be overridden", "A function that is automatically inlined", "A function that has no side effects"],
                answer: 0,
            },
            {
                question: "What is the output of the following C code: int x = 5; printf(\"%d %d %d\", x, x++, ++x);",
                options: ["5 5 7", "5 6 7", "7 6 5", "Undefined behavior"],
                answer: 3,
            },
            {
                question: "What is the concept of RAII in C++?",
                options: ["Random Access Indexed Iteration", "Resource Acquisition Is Initialization", "Runtime Array Index Inspection", "Recursive Allocation In Implementation"],
                answer: 1,
            },
            {
                question: "What is the time complexity of accessing an element in a C++ std::map?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                answer: 1,
            },
            {
                question: "What is memory alignment in C/C++?",
                options: ["Arranging memory to avoid fragmentation", "Arranging memory addresses to match data type size requirements", "A technique to optimize heap allocation", "A garbage collection strategy"],
                answer: 1,
            },
            {
                question: "What is the purpose of 'extern \"C\"' in C++?",
                options: ["To call external C functions", "To prevent name mangling for C functions", "To include C header files", "To make C++ code compatible with C"],
                answer: 1,
            },
            {
                question: "What is the purpose of the 'mutable' keyword in C++?",
                options: ["To allow modification of class members in const objects", "To prevent modification of variables", "To make a variable thread-safe", "To indicate a variable that can be mutated in multiple threads"],
                answer: 0,
            },
            {
                question: "What is a smart pointer in C++?",
                options: ["A pointer with a large memory capacity", "A class that manages the lifetime of dynamically allocated objects", "A pointer with built-in error checking", "A pointer with automated garbage collection"],
                answer: 1,
            },
            {
                question: "What happens when a virtual function is called from a constructor in C++?",
                options: ["Compiler error", "Runtime error", "The base class version is called, not the derived class", "The derived class version is called"],
                answer: 2,
            }
        ]
    },
    {
        category: "Angular",
        questions: [
            // Questions faciles
            {
                question: "What is Angular?",
                options: ["A programming language", "A JavaScript framework", "A database", "An operating system"],
                answer: 1,
            },
            {
                question: "Which directive is used to bind the application data to the HTML view in Angular?",
                options: ["ng-app", "ng-bind", "ng-model", "ng-controller"],
                answer: 1,
            },
            {
                question: "Which of the following is a valid Angular directive?",
                options: ["ng-if", "ng-for", "ng-while", "ng-do"],
                answer: 0,
            },
            {
                question: "What is the purpose of the Angular CLI?",
                options: ["To create a new Angular project", "To compile TypeScript code", "To serve the application", "All of the above"],
                answer: 3,
            },
            {
                question: "Which language is primarily used to write Angular applications?",
                options: ["JavaScript", "TypeScript", "CoffeeScript", "Dart"],
                answer: 1,
            },
            {
                question: "What is the file extension for Angular components?",
                options: [".ts", ".js", ".ng", ".component"],
                answer: 0,
            },
            {
                question: "Which character is used for property binding in Angular?",
                options: ["( )", "[ ]", "{ }", "< >"],
                answer: 1,
            },
            {
                question: "What is the default port for Angular development server?",
                options: ["3000", "4200", "8080", "9000"],
                answer: 1,
            },
            // Questions de niveau moyen
            {
                question: "Which of the following is used for dependency injection in Angular?",
                options: ["@Injectable", "@Component", "@NgModule", "@Directive"],
                answer: 0,
            },
            {
                question: "What is the purpose of NgModule in Angular?",
                options: ["To define a component", "To declare a service", "To group related components, directives, pipes and services", "To handle HTTP requests"],
                answer: 2,
            },
            {
                question: "Which directive is used for two-way data binding in Angular?",
                options: ["[(ngModel)]", "[ngClass]", "*ngFor", "[ngStyle]"],
                answer: 0,
            },
            {
                question: "What is the difference between 'constructor' and 'ngOnInit' in Angular?",
                options: ["Constructor is called before ngOnInit", "Constructor is for dependency injection, ngOnInit for initialization logic", "Constructor runs after component initialization, ngOnInit before", "There is no difference"],
                answer: 1,
            },
            {
                question: "What is the purpose of Angular guards?",
                options: ["To prevent SQL injection", "To protect routes from unauthorized access", "To validate form input", "To guard against memory leaks"],
                answer: 1,
            },
            {
                question: "Which of the following is used to share data between unrelated components in Angular?",
                options: ["@Input/@Output", "Services", "ViewChild", "Content Projection"],
                answer: 1,
            },
            {
                question: "What is lazy loading in Angular?",
                options: ["Loading components asynchronously", "Loading modules only when needed", "Delaying the initialization of services", "Postponing HTTP requests"],
                answer: 1,
            },
            {
                question: "What is an Angular pipe?",
                options: ["A way to transfer data between components", "A tool to transform displayed values within a template", "A mechanism for HTTP requests", "A way to handle errors"],
                answer: 1,
            },
            // Questions complexes
            {
                question: "What is Angular's change detection strategy?",
                options: ["Dirty checking", "Virtual DOM diffing", "Two-way data binding", "Observer pattern"],
                answer: 0,
            },
            {
                question: "Which hook is called after every checked change?",
                options: ["ngOnInit", "ngAfterViewInit", "ngOnChanges", "ngDoCheck"],
                answer: 3,
            },
            {
                question: "What is the purpose of 'async' pipe in Angular?",
                options: ["To create asynchronous functions", "To subscribe to observables and get the latest emitted value", "To make HTTP requests asynchronous", "To manage WebSockets"],
                answer: 1,
            },
            {
                question: "What is Angular Ivy?",
                options: ["A new compiler and runtime", "A testing framework", "A state management solution", "A UI component library"],
                answer: 0,
            },
            {
                question: "What is Angular Universal?",
                options: ["A universal component library", "A technique for rendering applications on the server side", "A universal CSS framework", "A cross-platform mobile framework"],
                answer: 1,
            },
            {
                question: "What is the purpose of 'trackBy' in Angular ngFor?",
                options: ["To track user actions", "To improve performance by identifying which items changed", "To track HTTP requests", "To track component lifecycle"],
                answer: 1,
            },
            {
                question: "What is the purpose of 'ViewEncapsulation' in Angular?",
                options: ["To encrypt view data", "To control how CSS styles are applied to a component", "To encapsulate HTML templates", "To optimize rendering performance"],
                answer: 1,
            },
            {
                question: "What is the purpose of Angular zones?",
                options: ["To create isolated testing environments", "To manage memory allocation", "To handle asynchronous operations and trigger change detection", "To define accessibility regions"],
                answer: 2,
            },
            {
                question: "What is the primary purpose of Angular's ChangeDetectionStrategy.OnPush?",
                options: ["To optimize change detection by checking only when inputs change", "To push changes manually to the DOM", "To enable two-way data binding", "To prevent changes in child components"],
                answer: 0,
            }
        ]
    }
];