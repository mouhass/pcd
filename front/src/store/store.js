import {createStore,combineReducers} from 'redux';

const reducers=(state={
    source:"",
    word1:"",
    word2:"",
    word3:"",
    exp1:"",
    exp2:"",
    exp3:""
},action)=>{
    switch(action.type)
    {
        case "zero":
            return{
                source : "video/Python Tutorial for Beginners 1 Install and Setup for Mac and Windows.mp4",
                word1: "Mac and windows",
               
                word2: "python",
                
                word3: "pycharm",
                exp1:"for Windows : an area within a frame on a computer screen, in which a particular program is operating or in which information of a particular type is shown , but for MacOs : is a proprietary graphical operating system developed and marketed by Apple Inc. since 2001. It is the primary operating system for Apple's Mac computers. Within the market of desktop, laptop and home computers, and by web usage, it is the second most widely used desktop OS, after Microsoft's Windows NT.[11][12]",
                exp2:"Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
                exp3:"PyCharm is an integrated development environment (IDE) used in computer programming, specifically for the Python language. It is developed by the Czech company JetBrains.[5] It provides code analysis, a graphical debugger, an integrated unit tester, integration with version control systems (VCSes), and supports web development with Django as well as data science with Anaconda."
                
            }
        case "first":
            return{
                    source : "video/Python Tutorial for Beginners 2 Strings - Working with Textual Data.mp4",
                    word1: "data types in python",
                    word2: "String methods",
                    word3: "etc",
                    exp1:"Basic Data Types in Python"+
                    "Integers."+
                    "Floating-Point Numbers."+
                    "Complex Numbers."+
                   " Strings. Escape Sequences in Strings. Raw Strings. Triple-Quoted Strings."+
                   " Boolean Type, Boolean Context, and Truthiness",

                exp2:"Method	Description <br/>"+
"capitalize()	Converts the first character to upper case <br/>"+
"casefold()	Converts string into lower case<br/>"+
"center()	Returns a centered string<br/>"+
"count()	Returns the number of times a specified value occurs in a string<br/>"+
"encode()	Returns an encoded version of the string<br/>"+
"endswith()	Returns true if the string ends with the specified value<br/>"+
"expandtabs()	Sets the tab size of the string<br/>"+
"find()	Searches the string for a specified value and returns the position of where it was found<br/>"+
"format()	Formats specified values in a string<br/>"+
"format_map()	Formats specified values in a string",
                exp3:"etc"
                   
            }
            case "second":
                return{
                    source : "video/Python Tutorial for Beginners 3 Integers and Floats - Working with Numeric Data.mp4",
                    word1: "3",
                    word2: "3",
                    word3: "3",
                    exp1:"nvijdnvidvvndi",
                exp2:"sbvsdvnsdnvsdn",
                exp3:"cindcndind"
                   
                }
            case "third":
                 return{
                 source : "video/Python Tutorial for Beginners 4 Lists, Tuples, and Sets.mp4",
                 word1: "4",
                 word2: "4",
                 word3: "4",
                 exp1:"nvijdnvidvvndi",
                exp2:"sbvsdvnsdnvsdn",
                exp3:"cindcndind"
                
                 }
                 case "fourth":
                    return{
                    source : "video/Python Tutorial for Beginners 5 Dictionaries - Working with Key-Value Pairs.mp4",
                    word1: "5",
                    word2: "5",
                    word3: "5",
                    exp1:"nvijdnvidvvndi",
                exp2:"sbvsdvnsdnvsdn",
                exp3:"cindcndind"
                   
                }




          default:
              return {
                  source : "",
                  word1: "",
                  word2: "",
                  word3: "",
                  exp1:"",
                exp2:"",
                exp3:""
                 
              }
    }
}


export default createStore(reducers);