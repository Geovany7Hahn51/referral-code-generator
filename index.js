/*
* generate referral code
* @params { username, word_length, numlength, type }
*/

function refCodeGenerator(username, word_length, num_length, type) {

    // check for the username length
    if(username.length > 1){

        // check for word length 
        if(typeof(word_length) !== 'number'){
            return 'word length to chunk must be a number';
        }else{
            
            // check if username length is greater than word length
            if(username.length > word_length){

                // extract code word
                let chunked_name = username.slice(0, word_length);

                // check for wordcase
                if(type != null){

                    // check wordcase type
                    if(type == 'uppercase'){

                        // check for random number length
                        if(num_length > 1){
                            
                            // generate random number
                            // Math.floor(100000 + Math.random() * 900000)
                            let code = Math.floor(Math.pow(10, num_length-1) + Math.random() * 9 * Math.pow(10, num_length-1));
                            
                            // referral code
                            return chunked_name.toUpperCase()+''+code;
                        }else{
                            return 'random number length is required.';                            
                        }
                    }else if(type == 'lowercase'){
                        
                        // check for random number length
                        if(num_length > 1){
                            
                            // generate random number
                            let code = Math.floor(Math.pow(10, num_length-1) + Math.random() * 9 * Math.pow(10, num_length-1));
                            
                            // referral code
                            return chunked_name.toLowerCase()+''+code;
                        }else{
                            return 'random number length is required.';                            
                        }
                    }else{
                        
                        // check for random number length
                        if(num_length > 1){
                            
                            // generate random number
                            let code = Math.floor(Math.pow(10, num_length-1) + Math.random() * 9 * Math.pow(10, num_length-1));
                            
                            // referral code
                            return chunked_name+''+code;
                        }else{
                            return 'random number length is required.';                            
                        }
                    }
                }else{

                    // generate random number
                    let code = Math.floor(100000 + Math.random() * 900000)                                               

                    // referral code
                    return chunked_name+''+code;
                }
            }else{
                return 'username\'s length should be greater than word length.';
            }
        }
    }else{
        return 'username is required.';
    } 
}

module.exports = refCodeGenerator;