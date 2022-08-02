const QUESTIONS = 

        [
            {"HTML": 
        [{
            question: "Element & Tag", 
            answer1: "Elements are everything from start tag to the end tag (like components). Tags are actually what builds the elements. Official Answer is <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/API/Element'>Element is the most general base class from which all element objects</a>", 
            answer2: "A tag is used for creating an element. They indicate there is an element component."
        }, {
            question: "head & header", 
            answer1: "The &lt;head&gt; HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.<cite><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head'>Head</a></cite>",
            answer2: "The &lt;header&gt; HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.<cite><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header'>Headers</a></cite>"
        }, {
            question: "link & a", 
            answer1: "The &lt;link&gt; tag defines the relationship between the current document and an external resource. The &lt;link&gt; tag is most often used to link to external style sheets or to add a favicon to your website.<cite><a href='https://www.w3schools.com/tags/tag_link.asp'>Link</a></cite>", 
            answer2: "The &lt;a&gt; tag defines a hyperlink, which is used to link from one page to another. The most important attribute of the &lt;a&gt; element is the href attribute, which indicates the link's destination.<cite><a target='_blank' href='https://www.w3schools.com/tags/tag_a.asp'>A Tag<a></cite>"
        }, {
            question: "div & span", 
            answer1: "The &lt;div&gt; HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS.The &lt;div&gt; tag is easily styled by using the class or id attribute.<cite><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div'>DIV Tag</a></cite>", 
            answer2: "The &lt;span&gt; HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes). The &lt;span&gt; tag is much like the &lt;divgt; element, but &lt;div&gt; is a block-level element and &lt;span&gt; is an inline element.<cite><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span'>Span Tag</a></cite>"
        }, {
            question: "ol & ul & dl", 
            answer1: "Ordered List. An ordered list can be numerical or alphabetical.", 
            answer2: "Unordered List. Typically rendered as a bulleted list.", 
            answer3: "represents a description list. The element encloses a list of groups of terms (specified using the &lt;dt&gt; (defines) element) and descriptions (provided by &lt;dd&gt; (describes) elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs)<cite><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl'>DL</a></cite>"
        }, {
            question: "th & td", 
            answer1: "The &lt;thgt; HTML element defines a cell as header of a group of table cells. The exact nature of this group is defined by the <b>scope</b> and <b>headers</b> attributes. The text in &lt;th&gt; elements are bold and centered by default.", 
            answer2: "The &lt;td&gt; tag defines a standard data cell in an HTML table.  It participates in the table model. The text in &lt;th&gt; elements are bold and centered by default."
        }, {
            question: "radio & checkbox", 
            answer1: "A type of input. Radio buttons are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected. ", 
            answer2: "A type of input. The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices."
        }, {
            question: "q & blockquote", 
            answer1: "The &lt;&gt; HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks.", 
            answer2: "The &lt;blockquote&gt; HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation. Has a cite attribute available. (Ideal for these answers)"
        }, {
            question: "strong & b", 
            answer1: "The Strong Importance element. The &lt;strong&gt; tag is used to define text with strong importance. The content inside is typically displayed in bold.", 
            answer2: "The Bring Attention To element. The &lt;b&gt; tag specifies bold text without any extra importance. The &lt;b&gt; HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. <cite><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong'>Scroll to comparison</a></cite>"
        }, {
            question: "em & i", 
            answer1: "The Emphasis element. The &lt;em&gt; HTML element marks text that has stress emphasis. The &lt;em&gt; element can be nested, with each level of nesting indicating a greater degree of emphasis. <cite><a target='_blank' href='https://www.w3schools.com/tags/tag_em.asp'>em</a></cite>", 
            answer2: "The Idiomatic Text element. The &lt;i&gt; HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. <cite><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i'>Idiomatic Element</a></cite>"
        }, {
            question: "strong & em", 
            answer1: "The Strong Tag is to show greater importance than the surrounding text. Bolds Text.", 
            answer2: "The Emphasis Tag is just used to stress emphasis compared to surrounding text. Italize Text.<cite><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong'>Scroll to comparison</a></cite>"
        }, {
            question: "block & inline", 
            answer1: "A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).", 
            answer2: "An inline element does not start on a new line. An inline element only takes up as much width as necessary."
        }, {
            question: "input type='text' & textarea", 
            answer1: "Typically a one line text field.", 
            answer2: "The &lt;textarea&gt; HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."
        }, {
            question: "input type='img' & img", 
            answer1: "&lt;nput&gt; elements of type image are used to create graphical submit buttons, i.e. submit buttons that take the form of an image rather than text.", 
            answer2: "The &lt;img&gt; tag is used to embed an image in an HTML page."
        }, {
            question: "img & picture", 
            answer1: "The Image Embed element. Used for just images.", 
            answer2: "The Picture element. The &lt;picture&gt; HTML element contains zero or more <source> elements and one &lt;img&gt; element to offer alternative versions of an image for different display/device scenarios. "
        }
    ]
    }, 

    {"CSS":
[
    {
        question: "Inline & Internal & External CSS",
        answer1: "An inline style may be used to apply a unique style for a single element.", 
        answer2: "An internal style sheet may be used if one single HTML page has a unique style. The internal style is defined inside the &lt;style&gt; element, inside the head section.", 
        answer3: "With an external style sheet, you can change the look of an entire website by changing just one file! Each HTML page must include a reference to the external style sheet file inside the &lt;link&gt; element, inside the head section. An external style sheet can be written in any text editor, and must be saved with a .css extension."
    }, {
        question: ": (Pseudo Class)  &  :: (Pseudo Element)",
        answer1: "A state. A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s)", 
        answer2: "An element. A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s)"
    }, {
        question: "Selector & Combinator", 
        answer1: "A CSS selector selects the HTML element(s) you want to style.", 
        answer2: "A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator."
    }, {
        question: "margin & padding", 
        answer1: "Margins are used to create space around elements, outside of any defined borders.", 
        answer2: "Padding is used to create space around an element's content, inside of any defined borders. <cite><a target='_blank' href='https://www.w3schools.com/css/css_padding.asp'>Padding</a></cite>"
    }, {
        question: "outline & border", 
        answer1: "An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element <q>stand out</q>. Outlines never take up space, as they are drawn outside of an element's content.", 
        answer2: "The CSS border properties allow you to specify the style, width, and color of an element's border."
    }, {
        question: "content-box & border-box", 
        answer1: "content-box gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.", 
        answer2: "border-box tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width.<cite><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing'>Box-sizing Explination & Comaparison</a></cite>"
    }, {
        question: "display:none & visibility:hidden", 
        answer1: "display:none- It is hidden and takes no space.", 
        answer2: "visibility:hidden- It is not visible but gets up it’s original space whereas,"
    }, {
        question: "inline & inline-block", 
        answer1: "Displays an element as an inline element. Any height and width properties will have no effect.", 
        answer2: "The major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not."
    }, {
        question: "flex & grid", 
        answer1: "Flex is only one-dimensional. Its only rows and columns. Typically have to set up the frexbox to some extents. Wraps and lays like bricks.", 
        answer2: "Multi-dimensional. It offer more than just rows and columns. You can actually align things by row and columns."
    }, {
        question: "align-items & justify-content", 
        answer1: "The align-items property specifies the default alignment for items inside the flexible container. Cross-axis.", 
        answer2: "The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis."
    }, {
        question: "box-shadow & drop-shadow", 
        answer1: "Box shadow = square shadow. The box-shadow property attaches one or more shadows to an element. You can set multiple effects separated by commas.", 
        answer2: "Drop shadow of whatever the item is. The drop-shadow() CSS function applies a drop shadow effect to the input image. Its result is a <filter-function>."
    }, {
        question: "em & rem", 
        answer1: "Font size of the parent. Relative to the font-size of the element (2em means 2 times the size of the current font)",
        answer2: "Relative to font-size of the root element"
    }, {
        question: "em & px & pt & %", 
        answer1: "Relative to the size of the parent font-size.", 
        answer2: "Pixels. 1px = 1/96th of 1in",
        answer3: "Point. 1pt = 1/72nd of 1in", 
        answer4: "% is relative to the item its referring to or is a child of. "
    }, {
        question: "clip & clip-path", 
        answer1: "Rectangles only. The clip CSS property defines a visible portion of an element. The clip property applies only to absolutely positioned elements — that is, elements with position:absolute or position:fixed. Deprecated by clip-path.",
        answer2: "The clip-path property lets you clip an element to a basic shape or to an SVG source."
    }, {
        question: "Clipping and Masking", 
        answer1: "Plastic Surgery. Clips are paths. Like the clip path, it actually effects the path points. ", 
        answer2: "Filter. Masks are like mask you wear. You add the images to something already there. Like a filter. "
    }, {
        question: "width & max-width", 
        answer1: "Setting the width of a block-level element will prevent it from stretching out to the edges of its container.", 
        answer2: "The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width. This is important when making a site usable on small devices."
    }
]}, 

{"Javascript": [
    {"General": [
        {
            question: "var & let & const", 
            answer1: "The var statement declares a variable. Variables are containers for storing information.", 
            answer2: "Variables defined with let cannot be Redeclared. Variables defined with let must be Declared before use. Variables defined with let have Block Scope.",
            answer3: "Variables defined with const cannot be Redeclared. Variables defined with const cannot be Reassigned. Variables defined with const have Block Scope."
        }, {
            question: "undefined & null", 
            answer1: "The global undefined property represents the primitive value undefined. A function returns undefined if a value was not returned. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.", 
            answer2: "The value null represents the intentional absence of any object value."
        }, {
            question: "== & === & Object.is()", 
            answer1: "Equality. checks whether its two operands are equal, returning a Boolean result. It attempts to convert and compare operands that are of different types.", 
            answer2: "Strictly Equality. checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.", 
            answer3: "The Object.is() behaves like the === operator with two differences: -0 and +0, NaN"
        }, {
            question: "|| & ??", 
            answer1: "Logical OR ", 
            answer2: "Logical AND"
        }, {
            question: "for...in & for...of", 
            answer1: "Gives indexes mostly. The JavaScript for in statement loops through the properties of an Object. For array it does the object. It may be most practically used for debugging purposes", 
            answer2: "The JavaScript for of statement loops through the values of an iterable object."
        }, {
            question: "Array's length & String's Length", 
            answer1: "How many items are in the array.", 
            answer2: "How many characters are into the array."
        }, {
            question: "Object Literal & JSON", 
            answer1: "A variable is set with then brackets.. An Object literal is when you declare an Object in JavaScript code which is a variable that stores data in key-value pairs. ", 
            answer2: "Just brackets and then setting the information. JSON stands for JavaScript Object Notation and it's a language-agnostic format for storing and transferring data that is based on JavaScript Objects. "
        }, {
            question: "Math.floor() & Math.trunc()", 
            answer1: "The Math.floor() function returns the largest integer less than or equal to a given number. <cite><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc'>Math.Trunc()</a></cite>", 
            answer2: "The Math.trunc() function returns the integer part of a number by removing any fractional digits."
        }

    ]}, {"String": [
        {
            question: "slice & substring", 
            answer1: "For Arrays, not words. The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end. The slice() method does not change the original array.", 
            answer2: "For Strings and characters. The substring() method extracts characters, between two indices (positions), from a string, and returns the substring. The substring() method extracts characters from start to end (exclusive). The substring() method does not change the original string."
        }, {
            question: "at() & charAt()", 
            answer1: "Can use negative numbers to start fromt the end. The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.", 
            answer2: "Way more specific and going from left to right. The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string."
        }, {
            question: "charAt() & charCodeAt()", 
            answer1: "The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.", 
            answer2: "The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string."
        }, {
            question: "charAt() & charPointAt()", 
            answer1: "Gives the character at a point.The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.", 
            answer2: "Gives the Unicode number from symbols. The codePointAt() method returns a non-negative integer that is the Unicode code point value at the given position."
        }

    ]}, {"Array": [
        {
            question: "Array() & new Array()", 
            answer1: "Is a constructor. Its the main method. Its also just the term for a type of data. Its a primitive.", 
            answer2: "Create a new Array type of object."
        }, {
            question: "Single & Multiple parameter Array()", 
            answer1: "Single means you are defining the length of the array is. ", 
            answer2: "Multiple is when you are defining the differnt spots in the array. "
        }, {
            question: "of() & from()", 
            answer1: "If single item, it actually adds it to the array and doesnt create an array of that length. The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.",
            answer2: "The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object. You can actually use arrow functions with this. (ex: (Array.from([1, 2, 3], x => x + x)).<cite><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from'>From Examples</a></cite>"
        }, {
            question: "find() & filter()", 
            answer1: "Stops after it finds the first result. The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.",
            answer2: "Doesnt sop until it finds all of the results. The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function."
        }, {
            question: "findIndex() & indexOf()", 
            answer1: "Provide a function for testion. The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.", 
            answer2: "Finds the first occurance without a function to test against. The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."
        }, {
            question: "includes() & some()", 
            answer1: "Checks for whatever is inside of the paramter. The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.", 
            answer2: "Checks against a test function (normally a callback function).The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array."
        }, {
            question: "some() & every()", 
            answer1: "Test for at least one. The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.", 
            answer2: "Test that every element past the test. The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value."
        }, {
            question: "map() & flatMap()", 
            answer1: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.", 
            answer2: "Concats the arrays in arrays. The parameter gets rid of the amount square brackets on arrays entered. The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately."
        }, {
            question: "slice() & splice()", 
            answer1: "Creates a new slice from the array. The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.", 
            answer2: "Modifies the array by adding/subtracting from the array, based on the parameters. The splice() method adds and/or removes array elements. The splice() method overwrites the original array."
        }, {
            question: "forEach() & map()", 
            answer1: "The forEach() method executes a provided function once for each array element.", 
            answer2: "Creates a new array. The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."
        }, {
            question: "forEach & for...of", 
            answer1: "forEach() is a method of the Array prototype, which allows you to iterate over the elements of an array. While forEach() only iterates over arrays, it can access both the value and the index of each element while iterating. <cite><a target='_blank' href='https://www.30secondsofcode.org/articles/s/javascript-for-in-for-of-foreach'>Comparison with Examples.</a></cite>", 
            answer2: "for...of is used to iterate over iterable objects, iterating over their values instead of their properties. This iteration statement can be used with arrays, strings, Map or Set objects, but not with plain objects."
        }, {
            question: "shift() & pop()", 
            answer1: "Removes the first element from Arrays.The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.", 
            answer2: "Removes the last element of an array.The pop() method removes the last element from an array and returns that element. This method changes the length of the array."
        }, {
            question: "unshift() & push()", 
            answer1: "Adds elements to the beginning of an array. The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.", 
            answer2: "Add elements to the end of an array. The push() method adds one or more elements to the end of an array and returns the new length of the array."
        }, {
            question: "reduce() & reduceRight()", 
            answer1: "The reduce() method executes a user-supplied 'reducer' callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.", 
            answer2: "The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value."
        }, {
            question: "spread & rest parameter", 
            answer1: "Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.", 
            answer2: "The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript."
        }

    ]}, {"Function": [
        {
            question: "Argument & Paramater", 
            answer1: "arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. Function parameters are the names listed in the function definition.", 
            answer2: "Function arguments are the real values passed to (and received by) the function."
        }, {
            question: "Function Declaration & Function Expression", 
            answer1: "Starts with the Word Function. The function declaration (function statement) defines a function with the specified parameters.", 
            answer2: "Isnt began with the word function but is then created. The function keyword can be used to define a function inside an expression."
        }, {
            question: "Normal & Anonymous function", 
            answer1: "In JavaScript, named functions are simply a way of referring to a function that employs the function keyword followed by a name that can be used as a callback to that function. Normal functions with a name or identifier are known as named functions.", 
            answer2: "As the name suggests, “anonymous function” refers to a function that does not have a name or a title. In JavaScript, an anonymous function is something that is declared without an identification. It’s the distinction between a regular and an anonymous function. An anonymous function cannot be accessed after it is created; it can only be retrieved by a variable in which it is stored as a function value."
        }, {
            question: "Anonymous & Arrow function", 
            answer1: "Still uses the word function.", 
            answer2: "Doesnt require the word function. Also is built differently than the normal functions. Has different guidelines as well. "
        }

    ]}
]}
]


