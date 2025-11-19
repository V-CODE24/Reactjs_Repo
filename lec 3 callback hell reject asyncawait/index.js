// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     });
//     }
//     //setTimeout => Promisified setTimeout
//     function callback(){
//         console.log("1 second has Passed!")
//     }
// setTimeoutPromisified(1000).then(callback);


// callback Hell... when you have to call one async call after other async call

// setTimeout(function(){//it is an anonymous function cuz it doesn't have a name
//     console.log("hi");
//    setTimeout(function(){
    //     console.log("Hello");
        // setTimeout(function(){{
        //         setTimeout(resolve,duration);
        //     });

        //     setTimeoutPromisified(1000).then(Function(){
        //    console.log("hi"),
        //    setTimeoutPromisified(3000).then(Function(){
        //     console.log("hello"),
        //         console.log("Hello there");
        //     },5000)
        //    },3000);
        // },1000);
        
        // console.log("hello im outside of callback Hell!!!");




        function setTimeoutPromisified(duration){
            return new Promise(function(resolve){
                setTimeout(resolve,duration);
            });
        }

       
        // setTimeoutPromisified(1000).then(function(){
        //     console.log("hi");
        //     setTimeoutPromisified(3000).then(function(){
        //         console.log("hello");
        //         setTimeoutPromisified(5000).then(function(){
        //             console.log("hi there")
        //         })
        //     })
        // })
        // console.log("hello im outside")
        
        // we can get rid of call back hell here by DOING PROISE CHAINING
        
        setTimeoutPromisified(1000).then(function(){
            console.log("hi");
            return setTimeoutPromisified(3000)
        }).then(function(){
            console.log("hello");
            return setTimeoutPromisified(5000)
        }).then(function(){
            console.log("hi there")
        });;
        
        console.log("hello im outside")
        
