// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// Prefixes:
    // http:// or https:// [optional] --> (http)?s?(:\/\/)?
    // www. [optional] --> (www\.)?

// Domain:
    // Some number of alphanumeric characters plus maybe '-' and '_' --> ([-\w_]+)

// Suffixes:
    // .com or other TLD following pattern of "." + some number of alphabetical characters --> \.([a-z]+)

function domainName(url){
    regex = url.match( /(http)?s?(:\/\/)?(www\.)?([-\w_]+)\.[a-z]+/ );
    return regex[4]
    }
